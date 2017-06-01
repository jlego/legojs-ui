var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function () {
    function People(name) {
        _classCallCheck(this, People);

        this.name = name;
    }

    _createClass(People, [{
        key: 'sayhi',
        value: function sayhi(id) {
            var tmpl = function tmpl(addrs) {
                return '\n          <table>\n          ' + addrs.map(function (addr) {
                    return '\n            <tr><td><a href="#/home/read/3">' + addr.first + '</a></td></tr>\n            <tr><td><a href="#/test/2">' + addr.last + '_' + id + '</a></td></tr>\n          ';
                }).join('') + '\n          </table>\n        ';
            };
            var data = [{ first: 'home1', last: 'Bond' }, { first: 'test', last: 'bbbb' }];

            // let anyObject = new EventClass();

            // anyObject.on("change", (data) => {
            //     console.log("change event :", data);
            // });
            // anyObject.emit("change", "Hello 3778 !");
            return tmpl(data);
        }
    }]);

    return People;
}();

export default People;