/**
 * 步骤条
 * ronghui Yu
 * 2017/1/17
 */
class Collapse {
    constructor(opts, callback) {
        const options = {
            direction: 'updown', //指定步骤条方向。目前支持水平updown/toggle
            target: '',
            onChange(){}
        };
        const that = this;
        this.callback = callback;
        if (typeof opts == 'object') {
            // 对象型参数
            Object.assign(options, opts);
            options.target = options.target instanceof $ ? options.target : $(options.target);
            if(!options.target.length) return;
            if(!options.target.hasClass('collapse')) options.target.addClass('collapse');
            this.callback = options.onChange;
            if(options.direction == 'updown'){
                if(options.target.hasClass('show')){
                    options.target.slideDown('normal', function(){
                        that.handler($(this));
                    });
                }else{
                    options.target.slideUp('normal', function(){
                        that.handler($(this));
                    });
                }
            }else{
                options.target.slideToggle('normal', function(){
                    that.handler($(this));
                });
            }
        }
        // 简洁型参数
        if (typeof opts == 'string') {
            const target = opts instanceof $ ? opts : $(opts);
            if(!target.length) return;
            if(!target.hasClass('collapse')) target.addClass('collapse');
            target.slideToggle('normal', function(){
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
export default fun;