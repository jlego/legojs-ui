var localResizeIMG = function(file, obj) {
    var URL = URL || webkitURL;
    var blob = URL.createObjectURL(file);
    /**
     * 生成base64
     * @param blob 通过file获得的二进制
     */
    var img = new Image();
    img.src = blob;

    img.onload = function() {
        var that = this;

        //生成比例
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = w / scale;

        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        $(canvas).attr({ width: w, height: h });
        ctx.drawImage(that, 0, 0, w, h);

        /**
         * 生成base64
         * 兼容修复移动设备需要引入mobileBUGFix.js
         */
        var base64 = canvas.toDataURL('image/jpeg', obj.quality || 0.8);

        // 修复IOS
        if (navigator.userAgent.match(/iphone/i)) {
            var mpImg = new MegaPixImage(img);
            mpImg.render(canvas, { maxWidth: w, maxHeight: h, quality: obj.quality || 0.8, orientation: 1 });
            base64 = canvas.toDataURL('image/jpeg', obj.quality || 0.8);
        }

        // 修复android
        if (navigator.userAgent.match(/Android/i)) {
            var encoder = new JPEGEncoder();
            base64 = encoder.encode(ctx.getImageData(0, 0, w, h), obj.quality * 100 || 80);
        }

        // 生成结果
        var result = {
            width: w,
            height: h,
            blob: blob,
            base64: base64,
            clearBase64: base64.substr(base64.indexOf(',') + 1)
        };

        // 执行后函数
        obj.success(result);
    };
};

function detectSubsampling(img) {
    var iw = img.naturalWidth,
        ih = img.naturalHeight;
    if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
        var canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, -iw + 1, 0);
        // subsampled image becomes half smaller in rendering size.
        // check alpha channel value to confirm image is covering edge pixel or not.
        // if alpha value is 0 image is not covering, hence subsampled.
        return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
    } else {
        return false;
    }
}

/**
 * Detecting vertical squash in loaded image.
 * Fixes a bug which squash image vertically while drawing into canvas for some images.
 */
function detectVerticalSquash(img, iw, ih) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
            ey = py;
        } else {
            sy = py;
        }
        py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    return (ratio === 0) ? 1 : ratio;
}

/**
 * Rendering image element (with resizing) and get its data URL
 */
function renderImageToDataURL(img, options, doSquash) {
    var canvas = document.createElement('canvas');
    renderImageToCanvas(img, canvas, options, doSquash);
    return canvas.toDataURL("image/jpeg", options.quality || 0.8);
}

/**
 * Rendering image element (with resizing) into the canvas element
 */
function renderImageToCanvas(img, canvas, options, doSquash) {
    var iw = img.naturalWidth,
        ih = img.naturalHeight;
    var width = options.width,
        height = options.height;
    var ctx = canvas.getContext('2d');
    ctx.save();
    transformCoordinate(canvas, ctx, width, height, options.orientation);
    var subsampled = detectSubsampling(img);
    if (subsampled) {
        iw /= 2;
        ih /= 2;
    }
    var d = 1024; // size of tiling canvas
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = d;
    var tmpCtx = tmpCanvas.getContext('2d');
    var vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
    var dw = Math.ceil(d * width / iw);
    var dh = Math.ceil(d * height / ih / vertSquashRatio);
    var sy = 0;
    var dy = 0;
    while (sy < ih) {
        var sx = 0;
        var dx = 0;
        while (sx < iw) {
            tmpCtx.clearRect(0, 0, d, d);
            tmpCtx.drawImage(img, -sx, -sy);
            ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
            sx += d;
            dx += dw;
        }
        sy += d;
        dy += dh;
    }
    ctx.restore();
    tmpCanvas = tmpCtx = null;
}

/**
 * Transform canvas coordination according to specified frame size and orientation
 * Orientation value is from EXIF tag
 */
function transformCoordinate(canvas, ctx, width, height, orientation) {
    switch (orientation) {
        case 5:
        case 6:
        case 7:
        case 8:
            canvas.width = height;
            canvas.height = width;
            break;
        default:
            canvas.width = width;
            canvas.height = height;
    }
    switch (orientation) {
        case 2:
            // horizontal flip
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;
        case 3:
            // 180 rotate left
            ctx.translate(width, height);
            ctx.rotate(Math.PI);
            break;
        case 4:
            // vertical flip
            ctx.translate(0, height);
            ctx.scale(1, -1);
            break;
        case 5:
            // vertical flip + 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
        case 6:
            // 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -height);
            break;
        case 7:
            // horizontal flip + 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(width, -height);
            ctx.scale(-1, 1);
            break;
        case 8:
            // 90 rotate left
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-width, 0);
            break;
        default:
            break;
    }
}


/**
 * MegaPixImage class
 */
function MegaPixImage(srcImage) {
    if (window.Blob && srcImage instanceof Blob) {
        var img = new Image();
        var URL = window.URL && window.URL.createObjectURL ? window.URL :
            window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
            null;
        if (!URL) {
            throw Error("No createObjectURL function found to create blob url");
        }
        img.src = URL.createObjectURL(srcImage);
        this.blob = srcImage;
        srcImage = img;
    }
    if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
        var _this = this;
        srcImage.onload = function() {
            var listeners = _this.imageLoadListeners;
            if (listeners) {
                _this.imageLoadListeners = null;
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i]();
                }
            }
        };
        this.imageLoadListeners = [];
    }
    this.srcImage = srcImage;
}

/**
 * Rendering megapix image into specified target element
 */
MegaPixImage.prototype.render = function(target, options) {
    if (this.imageLoadListeners) {
        var _this = this;
        this.imageLoadListeners.push(function() { _this.render(target, options) });
        return;
    }
    options = options || {};
    var imgWidth = this.srcImage.naturalWidth,
        imgHeight = this.srcImage.naturalHeight,
        width = options.width,
        height = options.height,
        maxWidth = options.maxWidth,
        maxHeight = options.maxHeight,
        doSquash = !this.blob || this.blob.type === 'image/jpeg';
    if (width && !height) {
        height = (imgHeight * width / imgWidth) << 0;
    } else if (height && !width) {
        width = (imgWidth * height / imgHeight) << 0;
    } else {
        width = imgWidth;
        height = imgHeight;
    }
    if (maxWidth && width > maxWidth) {
        width = maxWidth;
        height = (imgHeight * width / imgWidth) << 0;
    }
    if (maxHeight && height > maxHeight) {
        height = maxHeight;
        width = (imgWidth * height / imgHeight) << 0;
    }
    var opt = { width: width, height: height };
    for (var k in options) opt[k] = options[k];

    var tagName = target.tagName.toLowerCase();
    if (tagName === 'img') {
        target.src = renderImageToDataURL(this.srcImage, opt, doSquash);
    } else if (tagName === 'canvas') {
        renderImageToCanvas(this.srcImage, target, opt, doSquash);
    }
    if (typeof this.onrender === 'function') {
        this.onrender(target);
    }
};
// 例子
/*
    localResizeIMG({
        blob: blob,
        file: obj,
        width: 100,
        quality: 0.1,
        //before: function (that, blob) {},
        success: function (result) {
            var img = new Image();
            img.src = result.base64;

            $('body').append(img);
            console.log(result);
        }
    });
*/
module.exports = localResizeIMG;
