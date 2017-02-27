class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#rating1',
                name: 'ratingname',
                value: 2,
                showLabel: true,
                size: 'sm',
                onChange(self, result){
                    console.warn('点击了评分组件', result);
                }
            }, {
                el: '#rating2',
                name: 'ratingname2',
                value: 5,
                fractions: 2,
                onChange(self, result){
                    console.warn('点击了评分组件2', result);
                }
            }, {
                el: '#rating3',
                name: 'ratingname3',
                value: 2,
                showLabel: true,
                readonly: true,
                onChange(self, result){
                    console.warn('点击了评分组件3', result);
                }
            }, {
                el: '#rating4',
                name: 'ratingname3',
                size: 'lg',
                value: 3,
                showLabel: true,
                fractions: 2,
                onChange(self, result){
                    console.warn('点击了评分组件4', result);
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
              <rating id="rating1"></rating>
            </div>
            <div class="col-sm-6">
              <rating id="rating2"></rating>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <rating id="rating3"></rating>
            </div>
            <div class="col-sm-6">
              <rating id="rating4"></rating>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
