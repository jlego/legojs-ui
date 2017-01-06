const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const uglifyjs = require('uglify-js');
const async = require('rollup-plugin-async');
const regenerator = require('rollup-plugin-regenerator');
const istanbul = require('rollup-plugin-istanbul');
const flow = require('rollup-plugin-flow-no-whitespace');
const cjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');
const eslint = require('rollup-plugin-eslint');
const sass = require('rollup-plugin-sass');
const less = require('rollup-plugin-less');
// const buble = require('rollup-plugin-buble');
// const postcss = require('rollup-plugin-postcss');
// const simplevars = require('postcss-simple-vars');
// const nested = require('postcss-nested');
// const cssnext = require('postcss-cssnext');
// const cssnano = require('cssnano');

const version = process.env.VERSION || require('../package.json').version;
const buildStyleFile = 'dist/css/legoui.css';

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
if (fs.existsSync(buildStyleFile)) fs.unlinkSync(buildStyleFile);

const resolve = _path => path.resolve(__dirname, '../', _path);
build([{
    alias: 'legoui',
    entry: 'src/index.js',
    dest: 'dist/legoui.js'
},
{alias: 'common'},
{alias: 'alert'},
{alias: 'badge'},
{alias: 'viewport'},
{alias: 'button'},
{alias: 'table'},
{alias: 'pagination'},
{alias: 'dropdown'},
{alias: 'modal'},
{alias: 'navs'},
{alias: 'tabs'},
{alias: 'search'},
{alias: 'select'},
{alias: 'datepicker'},
{alias: 'input'},
{alias: 'tooltip'},
{alias: 'popover'}
].map(genConfig));

function ucfirst(str) {
    var str = str.toLowerCase();
    str = str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    return str;
}

function build(builds) {
    let built = 0
    const total = builds.length;
    const next = () => {
        buildEntry(builds[built]).then(() => {
            built++;
            if (built < total) {
                next();
            }
        }).catch(logError);
    }
    next();
}

function makBanner(opts) {
    const bannerTpl = `/**
 * ${opts.alias}.js v${version}
 * (c) ${new Date().getFullYear()} Ronghui Yu
 * @license MIT
 */`
    return bannerTpl;
}

function genConfig(opts) {
    const banner = makBanner(opts);
    const entry = 'src/' + opts.alias + '/index.js';
    const dest = 'dist/' + ucfirst(opts.alias) + '.js';
    const format = 'cjs';
    opts.env = opts.env || 'development';
    const config = {
        entry: resolve(opts.entry || entry),
        dest: resolve(opts.dest || dest),
        format: opts.format || format,
        banner,
        moduleName: 'LegoJS',
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(opts.env)
            })
        ]
    };

    if (opts.alias == 'observe') {
        config.plugins = [flow(), node(), cjs()];
    }
    if (opts.alias == 'data') {
        config.plugins = [async(), regenerator()];
    }
    if (opts.env) {
        const isMin = /min\.js$/.test(opts.alias);
        config.plugins.push(
            // simplevars(),
            // nested(),
            // cssnext({ warnForDuplicates: false, }),
            // cssnano(),
            // postcss({
            //     extensions: [ '.css' ],
            // }),
            flow(),
            // node(),
            // cjs(),
            // async(),
            // regenerator(),
            // istanbul({
            //     exclude: ['test/**/*.js']
            // }),
            // eslint({
            //     exclude: [
            //       'src/styles/**',
            //     ]
            // }),
            // less({
            //     output: function(styles, styleNodes) {
            //         if (opts.alias === 'legoui') {
            //         console.warn(buildStyleFile);
            //             fs.appendFile(buildStyleFile, styles, function(err) {});
            //         }
            //     },
            //     exclude: 'node_modules/**',
            // }),
            sass({
                output: function(styles, styleNodes) {
                    // fs.writeFileSync('dist/css/legoui.css', styles);
                    if (opts.alias === 'legoui') {
                        fs.appendFile(buildStyleFile, styles, function(err) {});
                    }
                }
            }),
            // less({
            //     output: 'dist/css/' + opts.alias + '.css',
            //     exclude: 'node_modules/**',
            // }),
            babel({
                exclude: 'node_modules/**',
            }),
            // buble(),
            uglify({
                mangle: false,
                compress: isMin,
                output: {
                    beautify: !isMin,
                    comments: function(node, comment) {
                        var text = comment.value;
                        var type = comment.type;
                        return /@preserve|@license|@cc_on/i.test(text);
                    }
                },
            }));
    }
    return config;
}

function buildEntry(config) {
    const isProd = /min\.js$/.test(config.dest);
    return rollup.rollup(config).then(bundle => {
        const code = bundle.generate(config).code
        if (isProd) {
            var minified = (config.banner ? config.banner + '\n' : '') + uglifyjs.minify(code, {
                fromString: true,
                output: {
                    screw_ie8: true,
                    ascii_only: true
                },
                compress: {
                    pure_funcs: ['makeMap']
                }
            }).code
            return write(config.dest, minified, true)
        } else {
            return write(config.dest, code)
        }
    })
}

function write(dest, code, zip) {
    return new Promise((resolve, reject) => {
        function report(extra) {
            console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
            resolve()
        }

        fs.writeFile(dest, code, err => {
            if (err) return reject(err)
            if (zip) {
                zlib.gzip(code, (err, zipped) => {
                    if (err) return reject(err)
                    report(' (gzipped: ' + getSize(zipped) + ')')
                })
            } else {
                report()
            }
        })
    })
}

function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb'
}

function logError(e) {
    console.log(e)
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}