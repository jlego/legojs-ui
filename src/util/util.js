const Util = {
    /**
     * [uuid description]
     * @return {[type]} [description]
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
        let windowW = $(window).width(),
            windowH = $(window).height(),
            _X = el.offset().left,
            _Y = el.offset().top,
            elW = el.width(),
            elH = el.height(),
            dropW = dropEl.width(),
            dropH = dropEl.height(),
            upDown = dropH > (windowH - _Y - elH) ? 'top' : 'bottom',
            leftRight = dropW > (windowW - _X - elW) ? 'Right' : 'Left';
        // console.warn(dropH, windowH, _Y, elH);
        return {
            _x: leftRight,
            _y: upDown
        };
    },
    // 动画
    animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
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
            bmp: 'file',
            gif: 'file',
            png: 'file',
            jpg: 'file-jpg',
            jpeg: 'file-jpg',
            tif: 'file',
            psd: 'file',
            pdg: 'file',
            ai: 'file',
            ico: 'file',
            css: 'file',
            doc: 'file-text',
            docx: 'file-text',
            ppt: 'file-ppt',
            pptx: 'file-ppt',
            rar: 'book',
            '7z': 'book',
            gz: 'book',
            bz: 'book',
            ace: 'book',
            uha: 'book',
            zpaq: 'book',
            rar: 'book',
            txt: 'file',
            yml: 'file',
            ini: 'file',
            js: 'file',
            url: 'file',
            xls: 'file-excel',
            xlsx: 'file-excel',
            et: 'file-excel',
            zip: 'book',
            pdf: 'file-pdf',
            none: 'file-unknown'
        },
        ext = isExt ? name : this.getExtName(name);
        return (ext !== false && extMap[ext]) ? extMap[ext] : '';
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
    }
};
// 判断是否空值(主要用于视图模板)
window.val = function(value, defaultValue){
    return value ? value : (defaultValue || '');
};
Lego.components('Util', Util);
export default Util;