/**
 * 折叠
 * ronghui Yu
 * 2017/1/17
 */
 import './asset/index.scss';

class Collapse {
    constructor(opts, callback) {
        const options = {
            target: '',
            restHeight: 0,  //剩余高度
            realHeight: '100%',  //实高
            onChange(){}
        };
        const that = this;
        this.callback = callback;
        if (typeof opts == 'object') {
            // 对象型参数
            Object.assign(options, opts);
            this.options = options;
            this.callback = options.onChange;
            if(options.restHeight){
                this.showHide(options.target, 'animate');
            }else{
                this.showHide(options.target, 'slideToggle');
            }
        }
        // 简洁型参数
        if (typeof opts == 'string') {
            this.showHide(opts, 'slideToggle');
        }
    }
    showHide(target, type){
        const that = this;
        target = target instanceof $ ? target : $(target);
        if(!target.length) return;
        if(!target.hasClass('collapse')) target.addClass('collapse');
        if(type == 'animate'){
            const height = parseInt(this.options.restHeight);
            const params = !target.hasClass('show') ? {height: this.options.realHeight} : {height: height};
            target[type](params, 'normal', function(){
                that.handler($(this));
            });
        }else{
            target[type]('normal', function(){
                that.handler($(this));
            });
        }
    }
    handler(target){
        if(typeof this.callback == 'function'){
            let result = '';
            if(target.hasClass('show')){
                result = 'hide';
                target.removeClass('show');
            }else{
                result = 'show';
                target.addClass('show');
            }
            this.callback(result, target);
        }
    }
}

const fun = function(opts, callback) {
    return new Collapse(opts, callback);
};
Lego.components('collapse', fun);
export default  fun;
