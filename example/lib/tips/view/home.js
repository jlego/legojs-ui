var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification1">\u7CFB\u7EDF\u63D0\u793A1</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification2">\u7CFB\u7EDF\u63D0\u793A2</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification3">\u7CFB\u7EDF\u63D0\u793A3</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification4">\u7CFB\u7EDF\u63D0\u793A4</button>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="popover4">Right</button>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification1">\u7CFB\u7EDF\u63D0\u793A1</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification2">\u7CFB\u7EDF\u63D0\u793A2</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification3">\u7CFB\u7EDF\u63D0\u793A3</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-primary" id="notification4">\u7CFB\u7EDF\u63D0\u793A4</button>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Tooltip from '../../../../dist/tooltip';
// import Popover from '../../../../dist/popover';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            events: {
                'click #notification1': function clickNotification1() {
                    Lego.UI.message('success', '系统提示1');
                },
                'click #notification2': function clickNotification2() {
                    Lego.UI.message('info', '系统提示2');
                },
                'click #notification3': function clickNotification3() {
                    Lego.UI.message('warning', '系统提示3');
                },
                'click #notification4': function clickNotification4() {
                    Lego.UI.message('error', '系统提示4');
                },
                'click #popover2': 'showPopover'
            }
        };
        Object.assign(options, opts);

        var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));

        Lego.UI.tooltip({
            el: '#tooltip1',
            title: '提示1',
            placement: 'top',
            onHidden: function onHidden() {
                console.warn('隐藏提示1');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip2',
            title: '提示2',
            placement: 'bottom',
            onHidden: function onHidden() {
                console.warn('隐藏提示2');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip3',
            title: '提示3',
            placement: 'left',
            onHidden: function onHidden() {
                console.warn('隐藏提示3');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip4',
            title: '提示4',
            placement: 'right',
            onHidden: function onHidden() {
                console.warn('隐藏提示4');
            }
        });
        Lego.UI.popover({
            el: '#popover1',
            title: '提示1',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'top',
            onHidden: function onHidden() {
                console.warn('隐藏提示1');
            }
        });
        // Lego.UI.popover({
        //     el: $('#popover2'),
        //     title: '提示2',
        //     content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
        //     placement: 'bottom',
        //     onHidden() {
        //         console.warn('隐藏提示2');
        //     }
        // });
        Lego.UI.popover({
            el: '#popover3',
            title: '提示3',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'left',
            onHidden: function onHidden() {
                console.warn('隐藏提示3');
            }
        });
        Lego.UI.popover({
            el: '#popover4',
            title: '提示4',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'right',
            container: 'body',
            onHidden: function onHidden() {
                console.warn('隐藏提示4');
            }
        });
        return _this;
    }

    _createClass(HomeView, [{
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject);
            return vDom;
        }
    }, {
        key: 'showPopover',
        value: function showPopover(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            Lego.UI.popover({
                el: target,
                title: '提示2',
                content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
                placement: 'bottom',
                showNow: true,
                onHidden: function onHidden() {
                    console.warn('隐藏提示2');
                }
            });
        }
    }]);

    return HomeView;
}(Lego.UI.Baseview);

export default HomeView;