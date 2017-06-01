var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        '], ['\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Tables from '../../../../dist/tables';

var TableView = function (_Lego$UI$Baseview) {
    _inherits(TableView, _Lego$UI$Baseview);

    function TableView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TableView);

        function getData() {
            var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var theData = [];
            for (var i = (currentPage - 1) * 20; i < currentPage * 20; i++) {
                theData.push({
                    key: i,
                    name: '胡彦斌' + i,
                    age: 32 + i,
                    // disabled: true,
                    address: '西湖区湖底公园1号'
                });
            }
            return theData;
        }
        var options = {
            components: [{
                el: '#theTable',
                className: 'table-striped',
                rowSelection: {
                    type: 'checkbox'
                },
                pagination: function pagination(listView) {
                    return {
                        totalCount: 300,
                        pageRang: 5,
                        pageSize: 20,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        onChange: function onChange(self, num) {
                            listView.options.data = getData(num);
                            listView.refresh();
                        }
                    };
                },

                // bordered: true,
                showHeader: true, //是否显示表头
                colSetting: function colSetting() {
                    console.warn('点击了列设置');
                },

                // showFooter: true, //是否显示表尾
                title: function title() {
                    return '表格标题';
                },

                // footer(){
                //     return '表格尾部';
                // },
                style: {
                    height: '100%'
                },
                onSetting: function onSetting(self, event) {
                    console.warn('dddddddddddddd');
                    // Lego.create(Modal, {
                    //     type: 'layer',
                    //     context: this,
                    //     title: '字段设置',
                    //     content: 'Designed and ',
                    //     width: 220,
                    //     showFooter: false,
                    //     onClose(self){
                    //         target.after('<layer id="' + theId + '"></layer>');
                    //     }
                    // });
                },

                data: getData(),
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    width: '400px',
                    filter: function filter(self, col) {
                        console.warn('点击了筛选', col);
                    }
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    width: '300px',
                    onCellClick: function onCellClick(self, row, col) {
                        console.warn(row, col);
                    },
                    filter: function filter(self, col, event) {
                        // console.warn('点击了筛选', col, $(event.currentTarget));
                        Lego.UI.popover({
                            el: $(event.currentTarget),
                            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
                            placement: 'bottom',
                            showNow: true,
                            onHidden: function onHidden() {
                                console.warn('隐藏提示2');
                            }
                        });
                    },
                    sorter: function sorter(self, col) {
                        console.warn('点击了排序', col);
                    }
                }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                    width: '300px'
                }]
            }]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (TableView.__proto__ || Object.getPrototypeOf(TableView)).call(this, options));
    }

    _createClass(TableView, [{
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject);
            return vDom;
        }
    }, {
        key: 'renderAfter',
        value: function renderAfter() {
            // Lego.UI.popover({
            //     el: '#popover2',
            //     title: '提示2',
            //     content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            //     placement: 'bottom',
            //     onHidden() {
            //         console.warn('隐藏提示2');
            //     }
            // });
        }
    }]);

    return TableView;
}(Lego.UI.Baseview);

export default TableView;