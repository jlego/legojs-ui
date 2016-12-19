import homeView from './view/home';
import listView from './view/list';
import listData from './data/list';

HBY.router({
    '/test' () {
        console.warn('7777777777777');
        HBY.create({
            view: listView,
            dataSource: {
                api: ['gg', 'ff'],
                server: listData
            },
            onAfter(self) {
                // let i = 0;
                // HBY.setTimer('theTime2', setInterval(function(){
                //     self.data.list[0].last = i;
                //     self.refresh();
                //     i++;
                // }, 3000));
            }
        });
    },
    '/test/list' () {
        HBY.create({
            view: listView,
            data: {
                list: [
                    { first: 'home', last: '99999' },
                    { first: 'test', last: 'mmmmm' }
                ]
            },
            components: [{
                el: '#home',
                view: homeView,
                data: [
                    { first: 'home2', last: '999992' },
                    { first: 'test2', last: 'mmmmm2' }
                ]
            }, {
                el: '#test',
                view: homeView,
                data: [
                    { first: 'home3', last: '999993' },
                    { first: 'test3', last: 'mmmmm3' }
                ]
            }]
        });
    },
    '/test/detail/:id' (id) {
        console.warn('pppppppppp');
    }
});
