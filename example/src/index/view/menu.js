class Menu extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let data = [{
            key: 'nav1',
            value: '基本',
            icon: 'lego-icon-home',
            open: true,
            children: [{
                key: 'nav_home',
                value: 'Button 按钮',
                children: [{
                    key: 'nav_home_1',
                    value: 'Button 按钮'
                }, {
                    key: 'nav1_2_2',
                    value: 'Icon 图标'
                }]
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
            }]
        }, {
            key: 'nav4',
            value: '数据展示',
            icon: 'lego-icon-purchase',
            open: true,
            children: [{
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
        data.forEach(item => {
            item.value = hx `<span><i class="icon iconfont ${val(item.icon)}"></i> ${val(item.value)}</span>`;
            if (item.children) {
                item.children.forEach(subItem => {
                    if (subItem.key == ('nav_' + Lego.getAppName())) {
                        subItem.active = true;
                    }
                });
            }
        });
        const options = {
            components: [{
                el: '#menu',
                type: 'pills-stacked',
                closeAllAble: false,
                activeKey: 'nav1',
                onClick(self, item) {
                    console.warn('点击了菜单5', item);
                    if(item.key){
                        if (item.key.indexOf('_') > 0) {
                            Lego.startApp(item.key.split('_')[1]);
                        }
                    }
                },
                data: data
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const tmpl = hx `
        <div class="sidebar sidebar-left" id="sidebar">
            <div class="sidebar-container scrollbar">
                <nav>
                    <navs id="menu"></navs>
                </nav>
            </div>
        </div>
        `;
        return tmpl;
    }
}
export default Menu;