import homeView from './view/home';
import listView from './view/list';
import listData from './data/list';

Lego.components('home', homeView);

Lego.router({
    '/home': function home() {
        Lego.create(listView, {
            el: Lego.config.pageEl,
            dataSource: {
                api: ['test', 'ok'],
                server: listData
            },
            onAfter: function onAfter(self) {
                var i = 0;
                Lego.setTimer('theTime', setInterval(function () {
                    self.options.data[0].last = i;
                    self.refresh();
                    i++;
                }, 3000));
            },

            components: [{
                el: '#test',
                dataSource: {
                    api: ['ok'],
                    server: listData
                }
            }]
        });
    },
    '/home/list': function homeList() {
        Lego.create(listView, {
            el: Lego.config.pageEl,
            data: {
                list: [{ first: 'home', last: 'Bond' }, { first: 'test', last: 'bbbb' }]
            },
            components: [{
                el: '#home',
                data: [{ first: 'home2', last: 'Bond2' }, { first: 'test2', last: 'bbbb2' }]
            }, {
                el: '#test',
                data: [{ first: 'home3', last: 'Bond3' }, { first: 'test3', last: 'bbbb3' }]
            }]
        });
    },
    '/home/detail/:id': function homeDetailId(id) {
        console.warn('pppppppppp');
    }
});