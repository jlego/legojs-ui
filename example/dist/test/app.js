/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _home = __webpack_require__(54);

	var _home2 = _interopRequireDefault(_home);

	var _list = __webpack_require__(55);

	var _list2 = _interopRequireDefault(_list);

	var _list3 = __webpack_require__(56);

	var _list4 = _interopRequireDefault(_list3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	HBY.router({
	    '/test': function test() {
	        console.warn('7777777777777');
	        HBY.create({
	            view: _list2.default,
	            dataSource: {
	                api: ['gg', 'ff'],
	                server: _list4.default
	            },
	            onAfter: function onAfter(self) {
	                // let i = 0;
	                // HBY.setTimer('theTime2', setInterval(function(){
	                //     self.data.list[0].last = i;
	                //     self.refresh();
	                //     i++;
	                // }, 3000));
	            }
	        });
	    },
	    '/test/list': function testList() {
	        HBY.create({
	            view: _list2.default,
	            data: {
	                list: [{ first: 'home', last: '99999' }, { first: 'test', last: 'mmmmm' }]
	            },
	            components: [{
	                el: '#home',
	                view: _home2.default,
	                data: [{ first: 'home2', last: '999992' }, { first: 'test2', last: 'mmmmm2' }]
	            }, {
	                el: '#test',
	                view: _home2.default,
	                data: [{ first: 'home3', last: '999993' }, { first: 'test3', last: 'mmmmm3' }]
	            }]
	        });
	    },
	    '/test/detail/:id': function testDetailId(id) {
	        console.warn('pppppppppp');
	    }
	});

/***/ },

/***/ 54:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<div>\n          ', '\n        </div>'], ['<div>\n          ', '\n        </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['<a id="', '" href="#/home" style="display:block;">', '</a>\n'], ['<a id="', '" href="#/home" style="display:block;">', '</a>\\n']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeView = function (_HBY$View) {
	    _inherits(HomeView, _HBY$View);

	    function HomeView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, HomeView);

	        var options = {
	            // el: 'div#uuu88',
	            events: {
	                'click #400': 'theClick'
	            }
	        };
	        HBY.$.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
	    }

	    _createClass(HomeView, [{
	        key: 'render',
	        value: function render() {
	            var data = this.data || [];
	            var vDom = hx(_templateObject, data.map(function (model, i) {
	                return hx(_templateObject2, model.first, model.last);
	            }));
	            return vDom;
	        }
	    }, {
	        key: 'theClick',
	        value: function theClick(event) {
	            event.stopPropagation();
	            HBY.trigger('data_update', { aa: 1 });
	        }
	    }]);

	    return HomeView;
	}(HBY.View);

	exports.default = HomeView;

/***/ },

/***/ 55:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<div>\n          ', '\n        </div>'], ['<div>\n          ', '\n        </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['<a id="', '" href="#/home/list" style="display:block;">', '</a>\n'], ['<a id="', '" href="#/home/list" style="display:block;">', '</a>\\n']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListView = function (_HBY$View) {
	    _inherits(ListView, _HBY$View);

	    function ListView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ListView);

	        var options = {
	            events: {
	                'click #test': 'theClick'
	            },
	            listen: {
	                'data_update': function data_update(data) {
	                    debug.warn('pppppppppp', data);
	                }
	            }
	        };
	        HBY.$.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, options));
	    }

	    _createClass(ListView, [{
	        key: 'render',
	        value: function render() {
	            var data = this.data.list || [];
	            var vDom = hx(_templateObject, data.map(function (model, i) {
	                return hx(_templateObject2, model.first, model.last);
	            }));
	            return vDom;
	        }
	    }, {
	        key: 'theClick',
	        value: function theClick(event) {
	            debug.warn('66666666666');
	        }
	    }]);

	    return ListView;
	}(HBY.View);

	exports.default = ListView;

/***/ },

/***/ 56:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListData = function (_HBY$Data) {
	    _inherits(ListData, _HBY$Data);

	    function ListData() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ListData);

	        var options = {
	            'gg': {
	                url: './content2.json',
	                listTarget: 'data',
	                model: {
	                    first: '',
	                    last: '',
	                    id: 0
	                }
	            },
	            'ff': {
	                url: './content2.json'
	            }
	        };
	        HBY.$.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (ListData.__proto__ || Object.getPrototypeOf(ListData)).call(this, options));
	    }

	    _createClass(ListData, [{
	        key: 'parse',
	        value: function parse(datas) {
	            // console.warn(datas);
	            return datas[0].data;
	        }
	    }]);

	    return ListData;
	}(HBY.Data);

	exports.default = new ListData();

/***/ }

/******/ });