var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<span><i class="icon iconfont ', '"></i> ', '</span>'], ['<span><i class="icon iconfont ', '"></i> ', '</span>']),
    _templateObject2 = _taggedTemplateLiteral(['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        '], ['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Lego$UI$Baseview) {
    _inherits(Menu, _Lego$UI$Baseview);

    function Menu() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Menu);

        var data = [{
            key: 'nav1',
            value: '基本',
            icon: 'lego-icon-home',
            open: true,
            children: [{
                key: 'nav_buttons',
                value: 'Button 按钮'
            }, {
                key: 'nav1_2',
                value: 'Icon 图标'
            }]
        }, {
            key: 'nav2',
            value: '导航',
            icon: 'lego-icon-account-info',
            open: true,
            children: [{
                key: 'nav_dropdown',
                value: 'Dropdown 下拉菜单'
            }, {
                key: 'nav_navs',
                value: 'Nav 导航菜单'
            }, {
                key: 'nav_steps',
                value: 'Steps 步骤条'
            }]
        }, {
            key: 'nav3',
            value: '数据输入',
            icon: 'lego-icon-teamwork',
            open: true,
            children: [{
                key: 'nav_forms',
                value: 'Form 表单'
            }, {
                key: 'nav_transfer',
                value: 'Transfer 穿梭框'
            }, {
                key: 'nav_upload',
                value: 'Upload 上传文件'
            }, {
                key: 'nav_avatar',
                value: 'Avatar 头像'
            }, {
                key: 'nav_editcom',
                value: 'Editcom 编辑组件'
            }, {
                key: 'nav_rating',
                value: 'Rating 评分'
            }, {
                key: 'nav_tags',
                value: 'Tags 标签'
            }]
        }, {
            key: 'nav4',
            value: '数据展示',
            icon: 'lego-icon-purchase',
            open: true,
            children: [{
                key: 'nav_tables',
                value: 'Tables 表格'
            }, {
                key: 'nav_tips',
                value: 'Tips 提示框'
            }, {
                key: 'nav_tree',
                value: 'Tree 树型'
            }]
        }, {
            key: 'nav5',
            value: '反馈',
            icon: 'lego-icon-clues',
            open: true,
            children: [{
                key: 'nav_alert',
                value: 'Alert 警告框'
            }, {
                key: 'nav5_2',
                value: 'Form 表单'
            }]
        }];
        data.forEach(function (item) {
            item.value = hx(_templateObject, val(item.icon), val(item.value));
            if (item.children) {
                item.children.forEach(function (subItem) {
                    if (subItem.key == 'nav_' + Lego.getAppName()) {
                        subItem.active = true;
                    }
                });
            }
        });
        var options = {
            components: [{
                el: '#menu',
                type: 'pills-stacked',
                closeAllAble: false,
                activeKey: 'nav1',
                onClick: function onClick(self, item) {
                    // console.warn('点击了菜单5', item);
                    if (item.key) {
                        if (item.key.indexOf('_') > 0) {
                            Lego.startApp(item.key.split('_')[1]);
                        }
                    }
                },

                data: data
            }]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, options));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            var tmpl = hx(_templateObject2);
            return tmpl;
        }
    }]);

    return Menu;
}(Lego.UI.Baseview);

export default Menu;