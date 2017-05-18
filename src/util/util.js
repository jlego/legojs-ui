import moment from 'moment';
window.moment = moment;

const Util = {
    /**
     * 唯一码
     */
    uuid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    // 取层飘浮方向
    getDirection(el, dropEl) {
        el = el instanceof $ ? el : $(el);
        dropEl = dropEl instanceof $ ? dropEl : $(dropEl);
        let windowW = $(window).width(),
            windowH = $(window).height(),
            _X = el.offset().left,
            _Y = el.offset().top,
            elW = el.width(),
            elH = el.height(),
            dropW = dropEl.width(),
            dropH = dropEl.height(),
            cssObj = {
                position: 'absolute',
                top: '100%',
                right: 'inherit',
                bottom: 'inherit',
                left: 0
            },
            tb = dropH > (windowH - _Y - elH) ? (dropH > _Y - 120 ? 'fixed' : 'top') : 'bottom',
            lr = dropW > (windowW - _X - elW) ? 'right' : 'left';
        if(tb == 'fixed'){
            Object.assign(cssObj, {position: 'fixed', top: 0, left: _X});
        }else{
            if(tb == 'top'){
                Object.assign(cssObj, {top: 'inherit', bottom: '100%'});
            }else{
                Object.assign(cssObj, {top: '100%'});
            }
            if(lr == 'right'){
                Object.assign(cssObj, {right: 0, left: 'inherit'});
            }else{
                Object.assign(cssObj, {right: 'inherit', left: 0});
            }
        }
        dropEl.css(cssObj);
    },
    // 动画
    animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
        animationName = /\s/g.test(animationName) ? animationName : ('animated ' + animationName);
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        el.addClass(animationName).one(animationEnd, function() {
            el.removeClass(animationName);
            if (typeof callback == 'function') callback();
        });
    },
    /**
     * 容量单位计算，支持定义小数保留长度；定义起始和目标单位，或按1024自动进位
     *
     * @param int size,容量计数
     * @param type unit,容量计数单位，默认为字节
     * @param type decimals,小数点后保留的位数，默认保留一位
     * @param type targetUnit,转换的目标单位，默认自动进位
     * @return type 返回符合要求的带单位结果
     */
    convertByteUnit(size, unit, decimals, direction, targetunit) {
        let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'],
            index, targetIndex, i, l = units.length,
            num,
            regFloat = /(^[+-]?\d*(?:\.\d+)?(?:[Ee][-+]?\d+)?)([kKMmGgTtpPeE]?[bB])?$/;
        if (typeof size === 'string') {
            num = size.match(regFloat);
            size = num[1];
            unit = num[2] || unit;
        }
        unit = unit || 'B';
        if (unit) {
            unit = unit.toUpperCase();
            for (i = 0; i < l; i++) {
                if (unit === units[i]) {
                    index = i;
                }
                if (targetunit && (targetunit + '').toUpperCase() === units[i]) {
                    targetIndex = i
                }
            }
        }
        if (direction === undefined) { //确定转化方向
            if (targetIndex === undefined) {
                direction = true;
            } else {
                direction = targetIndex > index;
            }
        }
        size = parseFloat(size);
        while ((direction ? (size >= 1024 && index < l - 1) : (size <= 1024 && index > 0))) {
            size = (direction ? size / 1024 : size * 1024);
            direction ? index++ : index--;
            if (index === targetIndex) break;
        }

        if (decimals) {
            size = size.toFixed(decimals) + units[index];
        } else {
            decimals = decimals || 2;
            size = (size.toFixed(decimals) + '').replace(/\.00/, '') + units[index];
        }
        return size
    },
    //获取文件格式名字
    getExtName(name) {
        let re = /\./,
            a, l;
        if (re.test(name)) {
            a = name.split(re);
            l = a.length;
            return a[l - 1].toLowerCase();
        }
        return null;
    },
    /*
     * 获取文件对应的class
     * */
    getFileIcon(name, isExt) {
        const extMap = {
            bmp: 'fa fa-file-o',
            gif: 'fa fa-file-image-o',
            png: 'fa fa-file-image-o',
            jpg: 'fa fa-file-image-o',
            jpeg: 'fa fa-file-image-o',
            tif: 'fa fa-file-text-o',
            psd: 'fa fa-file-image-o',
            pdg: 'fa fa-file-o',
            ai: 'fa fa-file-image-o',
            ico: 'fa fa-file-image-o',
            css: 'fa fa-file-text-o',
            doc: 'fa fa-file-word-o',
            docx: 'fa fa-file-word-o',
            ppt: 'fa fa-file-powerpoint-o',
            pptx: 'fa fa-file-powerpoint-o',
            rar: 'fa fa-file-zip-o',
            '7z': 'fa fa-file-zip-o',
            gz: 'fa fa-file-zip-o',
            bz: 'fa fa-file-zip-o',
            ace: 'fa fa-file-zip-o',
            uha: 'fa fa-file-zip-o',
            zpaq: 'fa fa-file-zip-o',
            rar: 'fa fa-file-zip-o',
            txt: 'fa fa-file-text-o',
            yml: 'fa fa-file-code-o',
            ini: 'fa fa-file-code-o',
            js: 'fa fa-file-code-o',
            url: 'fa fa-file-code-o',
            xls: 'fa fa-file-excel-o',
            xlsx: 'fa fa-file-excel-o',
            et: 'fa fa-file-excel-o',
            mp3: 'fa fa-file-audio-o',
            mp4: 'fa fa-file-video-o',
            zip: 'fa fa-file-zip-o',
            pdf: 'fa fa-file-pdf-o',
            none: 'fa fa-file-o'
        },
        ext = isExt ? name : this.getExtName(name);
        return (ext !== false && extMap[ext]) ? extMap[ext] : 'file';
    },

    /*
     * 判断文件是否可以预览
     * 可以传名字，也可以直接传后缀
     * */
    previewAble(nameOrExt) {
        const fileExt = this.getExtName(nameOrExt) || nameOrExt,
            extMap = [ 'bmp', 'gif', 'png', 'jpg', 'jpeg', 'txt', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx' ];
        return extMap.indexOf(fileExt) >= 0 || false;
    },
    /**
     * 判断文件是否是图片
     * */
    isImg(name, isExt) {
        const extMap = [ 'bmp', 'gif', 'png', 'jpg', 'jpeg' ],
            ext = isExt ? name : this.getExtName(name);
        return (ext !== false && extMap.indexOf(ext) >= 0) ? true : false;
    },
    //判断浏览器
    checkBrowser() {
        const u = navigator.userAgent;
        return {
            mozilla: /firefox/.test(u.toLowerCase()),
            webkit: /webkit/.test(u.toLowerCase()),
            opera: /opera/.test(u.toLowerCase()),
            msie: /msie/.test(u.toLowerCase())
        };
    },
    // 转为超链接
    urlToHref(str) {
        str = str.replace(/http[s]?:\/\/[\w.][^\,。‘’“”，《》<>{}+]*/g, '$& '); //隔开标点
        str = str.replace(/http[s]?:\/\/[\w.][^ ]*/g, '<a href="$&" target="_blank" style="color:#0092d8;">$&</a>'); //zee
        return str;
        //return str.replace(/(https?:\/\/[^ ]*)/g, '<a href="$1" target="_blank" style="color:#0092d8;">$1</a>');
    },
    // 过滤标签
    filterHtml(str) {
        const valiHTML = ["br|img"];
        if (this.checkBrowser.mozilla) {
            str = str.replace(/(<!--\[if[^<]*?\])>([\S\s]*?)<(!\[endif\]-->)/gi, '');
        }
        str = str.replace(/_moz_dirty=""/gi, "")
            .replace(/\[/g, "[[-")
            .replace(/\]/g, "-]]")
            .replace(/<\/ ?tr[^>]*>/gi, "[br]")
            .replace(/<\/ ?td[^>]*>/gi, "    ")
            .replace(/<(ul|dl|ol)[^>]*>/gi, "[br]")
            .replace(/<(li|dd)[^>]*>/gi, "[br]")
            .replace(/\<p[^>]*>/gi, "[br]")
            .replace(/\<div[^>]*>/gi, "[br]")
            .replace(/style=[\"\']([^\"\']+)[\"\']/gi, "")
            .replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]")
            .replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]")
            .replace(/<[^>]*>/g, "")
            .replace(/\[\[\-/g, "[")
            .replace(/\-\]\]/g, "]")
            .replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|span)[^\\]]*)\\]", "gi"), "<$1>");
        str = $.trim(str.replace(/^<br>/, '').replace(/(\<br[^>]*>){2,}/gi, '<br>'));
        return str;
    },
    filterTag(str) {
        if (this.checkBrowser.mozilla) {
            str = str.replace(/<\s*br\s*[^<]*>$/ig, '');
        }
        return str.replace(/&nbsp;/gi, ' ')
            .replace(/<\s*br\s*[^<]*>/ig, '\n')
            .replace(/&amp;/ig, '&')
            .replace(/&lt;/ig, '<')
            .replace(/&gt;/ig, '>');
    },
    unFilterTag(str) {
        return str.replace(/&/ig, '&amp;')
            .replace(/</ig, '&lt;')
            .replace(/>/ig, '&gt;')
            .replace(/\r?\n/ig, '<br>')
            .replace(/&nbsp;/gi, ' ');
    },
    faceTags: [
        "[微笑]", "[撇嘴]", "[色]", "[发呆]", "[得意]", "[流泪]", "[害羞]", "[闭嘴]", "[睡]", "[大哭]", "[尴尬]", "[发怒]", "[调皮]", "[呲牙]", "[惊讶]",
        "[酷]", "[冷汗]", "[抓狂]", "[吐]", "[偷笑]", "[白眼]", "[傲慢]", "[饥饿]", "[困]", "[惊恐]", "[流汗]", "[憨笑]", "[大兵]", "[奋斗]", "[疑问]",
        "[嘘]", "[晕]", "[敲打]", "[再见]", "[擦汗]", "[抠鼻]", "[鼓掌]", "[糗大了]", "[坏笑]", "[左哼哼]", "[右哼哼]", "[哈欠]", "[鄙视]", "[委屈]", "[快哭了]",
        "[阴脸]", "[亲亲]", "[吓]", "[可怜]", "[菜刀]", "[啤酒]", "[篮球]", "[乒乓球]", "[咖啡]", "[示爱]", "[爱心]", "[心碎]", "[刀]", "[足球]", "[瓢虫]",
        "[便便]", "[拥抱]", "[强]", "[弱]", "[握手]", "[胜利]", "[抱拳]", "[勾引]", "[拳头]", "[差劲]", "[爱你]", "[NO]", "[OK]", "[可爱]", "[咒骂]",
        "[折磨]", "[玫瑰]", "[凋谢]", "[衰]", "[骷髅]", "[猪头]", "[闪电]", "[炸弹]", "[饭]", "[西瓜]", "[蛋糕]", "[礼物]", "[太阳]", "[月亮]", "[鞭炮]"
    ],
    //表情转字符串
    faceToText(str, faceTags = this.faceTags) {
        const patt = new RegExp('<img face=\"\" src=\".*?f0(\\d+).gif\"+/?>', 'g');
        let newStr = str, arr;
        if (str.indexOf("<img") == -1) {
            return this.filterTag(str);
        }
        while (arr = patt.exec(str)) {
            newStr = newStr.replace(new RegExp(arr[0], 'g'), faceTags[arr[1]]);
        }
        newStr = this.filterTag(newStr);
        return newStr;
    },
    //字符串转表情
    textToFace(str, faceTags = this.faceTags) {
        str = this.unFilterTag(str);
        const arr = str.match(/\[.*?\]/g);
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                let index = faceTags.indexOf(arr[i]);
                if (index >= 0) {
                    str = str.replace(arr[i], '<img face="" src="' + Lego.config.faceIconUri + index + '.gif"/>');
                }
            }
        }
        return str;
    },
    // 光标处插入文本
    insertText(selector, str) {
        const ob = selector[0];
        ob.focus();
        const selection = window.getSelection ? window.getSelection() : document.selection;
        const range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if (!window.getSelection) {
            range.innerText(str);
            range.collapse(false);
            range.select();
            ob.focus();
        } else {
            range.collapse(false);
            const hasR = range.createContextualFragment(str);
            const hasR_lastChild = hasR.lastChild;
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild)
            }
            selection.removeAllRanges();
            selection.addRange(range)
            ob.focus();
        }
    },
    // 取时间段
    getPeriod(type) {
        let startDate, endDate;
        if(window.moment){
            switch(type){
                case 0:  //今天
                    startDate = moment().format("YYYY-MM-DD");
                    endDate = moment().format("YYYY-MM-DD");
                    break;
                case 1:  //本周
                    startDate = moment().day(0).format("YYYY-MM-DD");
                    endDate = moment().day(6).format("YYYY-MM-DD");
                    break;
                case 2:  //本月
                    startDate = moment().format("YYYY-MM-01");
                    endDate = moment(startDate).add(1, 'months').subtract(1, 'days').format("YYYY-MM-DD");
                    break;
                case 3:  //本年
                    startDate = moment().format("YYYY-01-01");
                    endDate = moment().format("YYYY-12-31");
                    break;
            }
        }else{
            debug.warn('依赖的moment.js插件还没安装');
        }
        return {startDate: startDate, endDate: endDate};
    }
};
// 判断是否空值(主要用于视图模板)
window.val = function(value, defaultValue){
    return value ? (typeof value == 'function' ? value() : value) : (defaultValue || '');
};
Lego.components('Util', Util);
export default Util;
