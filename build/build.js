const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup');
const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const uglifyjs = require('uglify-js');
const async = require('rollup-plugin-async');
const regenerator = require('rollup-plugin-regenerator');
const istanbul = require('rollup-plugin-istanbul');
const flow = require('rollup-plugin-flow-no-whitespace');
const cjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');
const version = process.env.VERSION || require('../package.json').version

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
const resolve = _path => path.resolve(__dirname, '../', _path);
build([{
    alias: 'lego',
    entry: resolve('src/index.js'),
    dest: resolve('dist/lego.js'),
    format: 'cjs',
    env: 'development'
}, {
    alias: 'lego.min',
    entry: resolve('src/index.js'),
    dest: resolve('dist/lego.min.js'),
    format: 'cjs',
    env: 'development'
}].map(genConfig));

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
    const config = {
        entry: opts.entry,
        dest: opts.dest,
        format: opts.format,
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
        config.plugins.push(
            // flow(),
            // node(),
            // cjs(),
            async(),
            regenerator(),
            buble(),
            uglify({
                mangle: false,
                compress: opts.alias == 'lego.min' ? true : false,
                output: {
                    beautify: opts.alias == 'lego.min' ? false : true,
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
    const isProd = /min\.js$/.test(config.dest)
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
