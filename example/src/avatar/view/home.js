// import Avatar from '../../../../dist/avatar';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#avatar1',
                name: 'user',
                multiple: false,
                value: [{
                    key: 'userId',
                    value: './asset/demo/avatar-4.jpg',
                    name: '张三'
                }],
                onAdd(self, result) {
                    console.warn('添加人员', result);
                }
            }, {
                el: '#avatar2',
                name: 'users',
                multiple: true,
                value: [{
                    key: 'user1',
                    value: './asset/demo/avatar-5.jpg',
                    name: '张小三'
                }, {
                    key: 'user2',
                    value: './asset/demo/avatar-6.jpg',
                    name: '李四李四'
                }, {
                    key: 'user3',
                    value: './asset/demo/avatar-7.jpg',
                    name: '老五'
                }],
                onAdd(self, result) {
                    console.warn('添加人员2', result);
                }
            }, {
                el: '#avatar3',
                name: 'user',
                multiple: false,
                readonly: true,
                value: [{
                    key: 'userId',
                    value: './asset/demo/avatar-4.jpg',
                    name: '张三'
                }],
                onAdd(self, result) {
                    console.warn('添加人员', result);
                }
            }, {
                el: '#avatar4',
                name: 'users',
                multiple: true,
                readonly: true,
                value: [{
                    key: 'user1',
                    value: './asset/demo/avatar-5.jpg',
                    name: '张小三'
                }, {
                    key: 'user2',
                    value: './asset/demo/avatar-6.jpg',
                    name: '李四李四'
                }, {
                    key: 'user3',
                    value: './asset/demo/avatar-7.jpg',
                    name: '老五'
                }],
                onAdd(self, result) {
                    console.warn('添加人员2', result);
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <avatar id="avatar1"></avatar>
            </div>
            <div class="col-sm-6">
              <avatar id="avatar2"></avatar>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <avatar id="avatar3"></avatar>
            </div>
            <div class="col-sm-6">
              <avatar id="avatar4"></avatar>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
