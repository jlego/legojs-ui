/**
 * upload.js v0.12.0
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var localresizeimg = _interopDefault(require("localresizeimg-cjs"));

window.svgSprite = "<svg>" + "" + '<symbol id="icon-gif" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#48D9A1" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7FE4BD" ></path>' + "" + '<path d="M660.9 511.7l-156.4-226-139.1 226h295.5zM539.2 563.9h191.2v191.2H539.2V563.9zM374.1 563.9c52.8 0 95.6 42.8 95.6 95.6s-42.8 95.6-95.6 95.6-95.6-42.8-95.6-95.6 42.8-95.6 95.6-95.6z" fill="#C8F4E3" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-doc" viewBox="0 0 1024 1024">' + "" + '<path d="M259 383h500v40H259zM259 503h500v40H259zM259 622h500v40H259zM259 741h500v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M897.8 268.7L893 264H735.4c-20.1 0-36.4-16.2-36.4-36.1V70.2l-4.2-4.2H151.5c-18 0-32.5 14.8-32.5 33.1v827.8c0 18.3 14.5 33.1 32.5 33.1h715c17.9 0 32.5-14.8 32.5-33.1M259 264h400v40H259v-40z m500 517H259v-40h500v40z m0-119H259v-40h500v40z m0-119H259v-40h500v40z m0-120H259v-40h500v40z" fill="#40C4FF" ></path>' + "" + '<path d="M899 264z" fill="#27C78B" ></path>' + "" + '<path d="M259 264h400v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M699 231.9c0 20.5 16.7 37.1 37.3 37.1H898L699 70.2v161.7z" fill="#7AD6FF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-jpg" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M248.8 736.6V336.1h527.9v400.5H248.8z m473.3-236.7V390.7H303.4v291.2l109.2-163.8L540 663.8l91-72.8 91 91V499.9z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-zip" viewBox="0 0 1024 1024">' + "" + '<path d="M686 64.3H471.1c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2H147.2c-18.3 0-33.2 14.8-33.2 33.2v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V280.2L686 64.3zM454.8 180.4H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m7.5 331.6l-82.9 99.5h82.9v33.2H329.6v-33.2l82.9-99.5h-82.9v-33.2h132.6V711z m82.9 132.6H512V727.5h33.2v116.1z m0-132.6H512v-33.2h33.2V711z m-8.3-132.7h-16.6c-4.8 0-13.3-0.4-22.4-1.4-11.6 1-22.1 1.4-26.8 1.4h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2h16.2c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9 4.7 0 15.2 2.4 26.8 6.1 9.1-3.7 17.6-6.1 22.4-6.1h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.4h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-116.1h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m124.3 679.8c-12.1 0-23.4-3.5-33.2-9.2v42.4h-33.2v-99.5c0-7-0.2-13.7 0-20.1V711H628v3.1c8.6-2 19.5-3.1 33.2-3.1 36.6 0 66.3 29.7 66.3 66.3 0 36.6-29.6 66.3-66.3 66.3z" fill="#62D35F" ></path>' + "" + '<path d="M329.6 711h82.9l-82.9 99.4v33.2h132.7v-33.2h-82.9l82.9-99.4v-33.2H329.6zM512 677.8h33.2V711H512zM512 727.5h33.2v116.1H512zM661.2 711c-13.7 0-24.5 1.1-33.2 3.1V711h-33.2v46.3c-0.2 6.3 0 13.1 0 20.1v99.5H628v-42.4c9.8 5.7 21 9.2 33.2 9.2 36.6 0 66.3-29.7 66.3-66.3 0-36.7-29.6-66.4-66.3-66.4z m0 99.4c-18.3 0-33.2-14.8-33.2-33.2 0-18.3 14.8-33.2 33.2-33.2 18.3 0 33.2 14.8 33.2 33.2 0 18.4-14.9 33.2-33.2 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M661.2 777.3m-33.2 0a33.2 33.2 0 1 0 66.4 0 33.2 33.2 0 1 0-66.4 0Z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M497.9 576.9c9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6 0 9-25.7 13.3-47.3 15.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1 21.6 6.8 47.3 18.2 47.3 27.1 0-13.8 5.4-33.2-8.3-33.2zM446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#62D35F" ></path>' + "" + '<path d="M446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M462.3 561.7c0-8.9 18.7-20.3 35.6-27.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4-16.9-1.9-35.6-6.2-35.6-15.2z" fill="#62D35F" ></path>' + "" + '<path d="M497.9 534.7c-16.9 6.8-35.6 18.2-35.6 27.1 0 8.9 18.7 13.2 35.6 15.2 21.6-1.9 47.3-6.2 47.3-15.2s-25.7-20.3-47.3-27.1z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4 9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M685.8 64.4l1 173.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mov" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M693.2 791.5v-15.3h-45.9v15.3h-30.6v-91.8H387.3v91.8H280.2V256.2h30.6v30.6h45.9v-30.6h30.6v76.5h229.4v-76.5h107.1v535.3h-30.6zM356.7 317.4h-45.9V348h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m260-367H387.3v275.3h229.4V378.6z m76.5-91.8h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9V348z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6zM448.6 592.8V439.9l137.6 76.5-137.6 76.4z" fill="#FFCCCC" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ppt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M316.7 363.1h386.9c19.4 0 35.2 14.8 35.2 33.1v232c0 18.3-15.7 33.1-35.2 33.1H316.7c-19.4 0-35.2-14.8-35.2-33.1v-232c0.1-18.3 15.8-33.1 35.2-33.1zM246.4 313.4h527.5c9.7 0 17.6 7.4 17.6 16.6 0 9.2-7.9 16.6-17.6 16.6H246.4c-9.7 0-17.6-7.4-17.6-16.6 0-9.2 7.9-16.6 17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M492.6 827V330c0-9.2 7.9-16.6 17.6-16.6 9.7 0 17.6 7.4 17.6 16.6v497c0 9.2-7.9 16.6-17.6 16.6-9.8 0-17.6-7.4-17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M536.8 713.3l122.7 66.3c8.5 4.6 11.4 14.7 6.5 22.6-4.9 7.9-15.7 10.6-24.2 6.1L519.1 742c-8.5-4.6-11.4-14.7-6.5-22.6 4.9-8 15.7-10.7 24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M483.5 713.3l-122.7 66.3c-8.5 4.6-11.4 14.7-6.5 22.6 4.9 7.9 15.7 10.6 24.2 6.1L501.2 742c8.5-4.6 11.4-14.7 6.5-22.6-4.9-8-15.7-10.7-24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-xls" viewBox="0 0 1024 1024">' + "" + '<path d="M686 62.8H147.2C128.9 62.8 114 77.6 114 96v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V278.6L686 62.8z" fill="#62D35F" ></path>' + "" + '<path d="M684.9 62.8l1 174.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + '<path d="M808.5 729.3l-563.7 0.2h-31.3v-30.8l-0.1-353.4h38.4v345.5h57.6V537.4h76.8V691h57.6V479.8h76.8V691h57.6V556.6H655V691h57.6V383.8h76.8v307.1h19.2v38.4z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mp3" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M652.6 634.2c0 1.1 0.1 2.1 0 3.2v1.7h-0.2c-2.3 26.4-25.8 50.6-58.9 57.6-39.2 8.4-76.8-10.4-83.9-42-7.1-31.6 18.9-64 58.2-72.4 13.8-3 27.4-2.4 39.5 0.8V407.3c-27.9-1.6-65.3-1.6-102.7 5.2-35 6.3-68.3 19.1-93.7 30.9v256.2h-3.5c-3.3 26.9-27.1 51.4-60.4 58.6-40.4 8.8-79.2-10.9-86.5-44.1-7.3-33.1 19.5-67.1 60-75.9 15.9-3.5 31.4-2.4 44.9 2V467.3c-0.6 0.4-1 0.6-1 0.6V352.3s0.4-0.2 1-0.6v-6.3l16.7-3.3c24.5-13.3 71.6-36.1 122-45.1 74.2-13.4 148.9-0.5 148.9-0.5V412h-0.2v222.2z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ics" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + '<path d="M730.6 355.6H293.4c-12.4 0-22.4 9.9-22.4 22.2V744c0 12.3 10 22.2 22.4 22.2h437.1c12.4 0 22.4-9.9 22.4-22.2V377.8c0.1-12.3-10-22.2-22.3-22.2z m-31.4 346.7c0 5.5-4.5 10-10 10H334.8c-5.5 0-10-4.5-10-10V419.4c0-5.5 4.5-10 10-10h354.3c5.5 0 10 4.5 10 10v282.9z" fill="#FFEAC2" ></path>' + "" + '<path d="M406 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10H406c-5.5 0-10-4.5-10-10v-105c0-5.6 4.4-10 10-10zM495.2 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0-5.6 4.5-10 10-10zM584.5 319.9H618c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0.1-5.6 4.6-10 10.1-10z" fill="#FFEAC2" ></path>' + "" + '<path d="M467.7 498.4l-71.8 5.7v24.3h36.5v130.8h35.3V498.4zM628 498.4H521.2l-0.3 35.6h71.4c-14.8 18.1-19.7 25.6-27.5 44-7.8 18.4-11.6 38.8-11.6 61.2v19.9h30.5v-19.9c0-22 2.5-34.6 8.6-51.6 6.2-17 18.5-32.3 35.7-53.6v-35.6z" fill="#FFEAC2" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-pdf" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M347.3 655.8c-56.1 41.2-94.7 99.7-79.5 108.9l-13.3-6.6c-7.7-9.3 9.8-58.9 92.8-102.3zM768.7 609.6c28.7-60.1-207.6-51.1-380.3 27.7 134.4-50.9 383.2-72.9 380.3-27.7z" fill="#FFC5C5" ></path>' + "" + '<path d="M501.4 289.3c6.5-33.4-10.1-32.2-14.8-32.2l-10.5-0.1c-5.8 0-11 4.6-13.5 13.8-16.4 60.1 13.3 212.7 96.7 283.3 73.6 62.3 201.9 90.8 207 60.7-26.6 12.6-126.7-19.1-194-71.8-79.5-64.2-113.5-222.5-96.4-272 1.7-4.9 5.8-10.7 7.7-12 7.2 3.6 15.8 12.2 17.8 30.3z" fill="#FFC5C5" ></path>' + "" + '<path d="M500 298.9c-7.3 35.4-10.5 119.2-80 256.8C345.3 703.6 290.8 772.6 254.5 758l13 6.5c28.4 14.3 80.7-32.7 167.6-197.2 66.8-126.6 63.2-191.8 64.9-268.4z" fill="#FFC5C5" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-apk" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M757.3 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0.1 13.1-10.6 23.7-23.7 23.7z m-53.7-260.4c0 1.6-0.2 3.1-0.2 4.6-0.5 0-0.9-0.1-1.4-0.1h-0.3c0.1 0.9 0.3 1.8 0.3 2.7 0 17.5-14.2 31.7-31.7 31.7H353.7c-17.5 0-31.7-14.2-31.7-31.7 0-0.8 0.2-1.5 0.2-2.2-0.4 0.1-0.9 0.1-1.4 0.1 0-1.7-0.3-3.4-0.3-5.1 0-62.6 30.2-118.1 76.7-153l-48.9-48.9c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0l56 56c0.7 0.7 1 1.6 1.6 2.3 22.4-9.2 46.8-14.3 72.5-14.3 25.5 0 49.7 5.1 71.9 14.1 0.5-0.7 0.8-1.5 1.4-2.1l56-56c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6L626.4 354c46.8 35 77.2 90.6 77.2 153.4zM512 361.4c-72.2 0-132 52.6-143.6 121.5h17.1c-8.7 0-15.8 7.1-15.8 15.8 0 8.7 7.1 15.8 15.8 15.8h253.2c8.7 0 15.8-7.1 15.8-15.8 0-8.7-7.1-15.8-15.8-15.8h17C644 414 584.2 361.4 512 361.4z m71.2 105.7c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0.1 13-10.6 23.7-23.7 23.7z m-142.4 0c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0 13-10.6 23.7-23.7 23.7zM266.7 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0 13.1-10.6 23.7-23.7 23.7zM337.9 562h348.2c8.7 0 15.8 7.1 15.8 15.8V752c0 8.7-14.7 6.1-23.4 6.1 0 0-2.3 9.7-18.6 9.7-7.4 0-18.3-16.2-28.1-16.2-9.6 0-17.9 16.2-29.2 16.2-14.5 0-30.2-21.6-46.5-21.6-15.5 0-31.6 21.6-47.6 21.6-13.8 0-25.5-19.5-38.9-19.5-15.4 0-32.6 19.5-46.5 19.5-19.4 0-36.8-18.4-50.8-18.4-21.3 0-34.6 18.4-34.6 18.4-8.7 0-15.8-7.1-15.8-15.8V577.9c0.2-8.8 7.3-15.9 16-15.9z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-png" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M717.1 737.1h-82v-82h82v82zM553 655v-82h82v82h-82z m0-246h82v82h-82v-82z m-164 82v-82h82v82h-82z m82 164h-82v-82h82v82z m0-164h82v82h-82v-82z m82 246.1h-82v-82h82v82z m-246.1 0v-82h82v82h-82z m0-164.1v-82h82v82h-82z m0-246.1h82v82h-82v-82z m164.1 0h82v82h-82v-82z m246.1 0v82h-82v-82h82z m0 164.1v82h-82v-82h82z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-link" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#40C4FF" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7AD6FF" ></path>' + "" + '<path d="M741.6 673.1l-68.5 68.5c-19.1 19.1-91 5-110.2-14.2l-81.7-81.7c-19.2-19.2-26-70-6.9-89.1l20.6-20.6 48 48c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l41.1-41.1c7.6-7.6 9.2-18.2 3.6-23.8l-75.8-75.8c-3.7-3.7-9.6-4-15.4-1.7L542.8 488l13.7-13.7c19.1-19.1 69.9-12.4 89.1 6.9l81.7 81.7c19.3 19.2 33.5 91.1 14.3 110.2zM419.5 419.5l6.9-6.9c7.6-7.6 19.8-7.6 27.4 0l164.5 164.5c7.6 7.6 7.6 19.8 0 27.4l-6.9 6.9c-7.6 7.6-19.8 7.6-27.4 0L419.5 446.9c-7.6-7.6-7.6-19.9 0-27.4zM536 481.2l-49.5-49.5c2.3-5.8 2-11.7-1.7-15.4L409 340.5c-5.6-5.6-16.2-4-23.8 3.6l-41.1 41.1c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l48 48-20.6 20.6c-19.1 19.1-69.9 12.4-89.1-6.9l-81.7-81.7c-19.2-19.2-33.4-91.1-14.2-110.2l68.5-68.5c19.1-19.1 91-5 110.2 14.2l81.7 81.7c19.2 19.2 26 70 6.9 89.1L536 481.2z" fill="#C6EDFF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-file" viewBox="0 0 1024 1024">' + "" + '<path d="M863.3 201.6H622.5c-8.2 0-15.6 5-18.6 12.6-8.2 20.6-28.3 35.2-51.8 35.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v509.1c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9v-557c0-17.6-14.3-31.9-32-31.9z" fill="#FFE88C" ></path>' + "" + '<path d="M176.6 295.4h670.8V487H176.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M863.3 343.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v415.2c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9V375.3c0-17.7-14.3-32-32-32z" fill="#FFE88C" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-txt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#885CA6" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#AC8DC1" ></path>' + "" + '<path d="M688.2 616.7v102.8h-44.1V616.7h-58.7v-44.1H747v44.1h-58.8zM277 469.8h470v44.1H277v-44.1z m0-102.8h470v44.1H277V367z m249.7 249.7H277v-44.1h249.7v44.1z m0 102.8H277v-44.1h249.7v44.1z" fill="#DCCEE4" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-rar" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M307.6 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1L375 851h37l-18.7-29.4c-7.4-11.7-13.3-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65.1V851h33.4z m-2.4-125.1h24.1c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.7 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2zM516.2 700.4h-32.7L423.8 851h32.8l12.6-34.2h61.2l13.4 34.2h33.6l-61.2-150.6z m-37.4 91l20.7-55.9 21.1 55.9h-41.8zM625.4 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1l22.4 32.8h37L711 821.6c-7.4-11.7-13.2-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65V851h33.4z m-2.5-125.1H647c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.8 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M533.4 583.4h-16.7c-4.8 0-13.5-0.4-22.6-1.4-11.7 1-22.3 1.4-27.1 1.4h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.4-33.4 8.2-33.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1 4.7 0 15.3 2.4 27.1 6.1 9.1-3.7 17.8-6.1 22.6-6.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.6-8.4 16.6z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-100.4h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 14 5.5 16.8-8.4 16.8z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-117.1h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.8-8.4 16.8zM467 115.2h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1s-11 25-24.6 25z m-16.4 66.9H467c13.6 0 24.6 11.2 24.6 25.1s-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.3-33.5 8.2-33.5z" fill="#FFBABA" ></path>' + "" + "</symbol>" + "" + "</svg>";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};

var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent !== null) {
            set(parent, property, value, receiver);
        }
    } else if ("value" in desc && desc.writable) {
        desc.value = value;
    } else {
        var setter = desc.set;
        if (setter !== undefined) {
            setter.call(receiver, value);
        }
    }
    return value;
};

var taggedTemplateLiteral = function(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
};

var UploadView = function(_Lego$View) {
    inherits(UploadView, _Lego$View);
    function UploadView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, UploadView);
        var options = {
            uploadUri: "",
            downloadUri: Lego.config.downloadUri || "",
            percent: 0,
            isAuto: true,
            file: null,
            headers: {},
            params: {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {},
            needToken: false
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).call(this, options));
        _this.xhr = createXMLHTTPRequest();
        _this.startDate = 0;
        _this.form = null;
        function createXMLHTTPRequest() {
            var xmlHttpRequest = void 0;
            if (window.XMLHttpRequest) {
                xmlHttpRequest = new XMLHttpRequest();
                if (xmlHttpRequest.overrideMimeType) {
                    xmlHttpRequest.overrideMimeType("text/xml");
                }
            } else if (window.ActiveXObject) {
                var activexName = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];
                for (var i = 0; i < activexName.length; i++) {
                    try {
                        xmlHttpRequest = new ActiveXObject(activexName[i]);
                        if (xmlHttpRequest) {
                            break;
                        }
                    } catch (e) {}
                }
            }
            return xmlHttpRequest;
        }
        if (_this.options.percent == 0) {
            if (_this.options.needToken && _this.options.params.token || !_this.options.needToken) {
                _this.uploadInit();
                if (_this.options.isAuto) {
                    _this.start();
                }
            }
        }
        return _this;
    }
    createClass(UploadView, [ {
        key: "uploadInit",
        value: function uploadInit() {
            var this$1 = this;
            var _this2 = this;
            var taking = 0, file = this.options.file, opts = this.options, params = this.options.params;
            this.xhr.crossDomain = true;
            var progressbar = Lego.getView("#progressbar_" + this.options.vid);
            this.form = new FormData();
            this.form.append("file", file);
            if (!Lego.isEmptyObject(params)) {
                for (var key in params) {
                    this$1.form.append(key, params[key]);
                }
            }
            this.xhr.upload.addEventListener("progress", function(event) {
                if (event.lengthComputable) {
                    var nowDate = new Date().getTime();
                    taking = nowDate - _this2.startDate;
                    var x = event.loaded / 1024, y = taking / 1e3, uploadSpeed = x / y, formatSpeed = void 0;
                    if (uploadSpeed > 1024) {
                        formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb/s";
                    } else {
                        formatSpeed = uploadSpeed.toFixed(2) + "Kb/s";
                    }
                    var percent = Math.round(event.loaded * 100 / event.total);
                    if (progressbar) {
                        progressbar.options.percent = percent;
                    }
                    if (typeof _this2.options.onProgress == "function") {
                        _this2.options.onProgress(_this2, file, percent);
                    }
                }
            }, false);
            this.xhr.addEventListener("loadstart", function(event) {
                if (typeof _this2.options.onBegin == "function") {
                    _this2.options.onBegin(_this2, file);
                }
            }, false);
            this.xhr.addEventListener("load", function(event) {
                if (_this2.xhr.readyState == 4 && _this2.xhr.status == 200 && _this2.xhr.responseText != "") {
                    var resp = JSON.parse(_this2.xhr.response);
                    resp._id = file._id;
                    _this2.options.percent = 100;
                    if (typeof _this2.options.onComplete == "function") {
                        _this2.options.onComplete(_this2, resp);
                    }
                } else if (_this2.xhr.status != 200 && _this2.xhr.responseText) {
                    var errorMsg = {
                        status: "error",
                        data: "Unknown error occurred: [" + _this2.xhr.responseText + "]"
                    };
                    if (typeof _this2.options.onFail == "function") {
                        _this2.options.onFail(_this2, errorMsg);
                    }
                }
            }, false);
            this.xhr.addEventListener("error", function(event) {
                debug.error("上传失败");
                if (typeof _this2.options.onFail == "function") {
                    _this2.options.onFail(_this2, event);
                }
                _this2.remove();
            }, false);
            this.xhr.addEventListener("abort", function(event) {
                debug.error("取消上传");
                if (typeof _this2.options.onCancel == "function") {
                    _this2.options.onCancel(_this2, event);
                }
                _this2.remove();
            }, false);
            this.xhr.open("POST", this.options.uploadUri, true);
            for (var _key in this.options.headers) {
                this$1.xhr.setRequestHeader(_key, this$1.options.headers[_key]);
            }
        }
    }, {
        key: "cancel",
        value: function cancel() {
            this.xhr.abort();
        }
    }, {
        key: "start",
        value: function start() {
            this.startDate = new Date().getTime();
            this.xhr.send(this.form);
        }
    } ]);
    return UploadView;
}(Lego.View);

Lego.components("Baseupload", UploadView);

var _templateObject$2 = taggedTemplateLiteral([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);

var _templateObject2$2 = taggedTemplateLiteral([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);

var Progressbar = function(_Lego$UI$Baseview) {
    inherits(Progressbar, _Lego$UI$Baseview);
    function Progressbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Progressbar);
        var options = {
            status: "",
            showInfo: true,
            percent: 0,
            strokeWidth: 6,
            onComplete: function onComplete() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, options));
    }
    createClass(Progressbar, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            if (options.percent == 100) {
                if (typeof options.onComplete == "function") {
                    options.onComplete(this);
                }
            }
            var vDom = hx(_templateObject$2, options.showInfo ? hx(_templateObject2$2, this.format(options.percent)) : "", options.status ? options.status : "primary", options.percent);
            return vDom;
        }
    }, {
        key: "format",
        value: function format(percent) {
            if (typeof this.options.format == "function") {
                return this.options.format(percent);
            } else {
                return percent + "%";
            }
        }
    } ]);
    return Progressbar;
}(Lego.UI.Baseview);

Lego.components("progressbar", Progressbar);

var _templateObject$1 = taggedTemplateLiteral([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3$1 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);

var _templateObject4$1 = taggedTemplateLiteral([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ]);

var _templateObject5$1 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ]);

var _templateObject6 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject7 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ]);

var _templateObject8 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ]);

var UploadItem = function(_UploadBase) {
    inherits(UploadItem, _UploadBase);
    function UploadItem() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, UploadItem);
        var options = {
            uploadUri: "",
            percent: 0,
            isAuto: true,
            readonly: false,
            showZoom: true,
            file: {},
            type: "file",
            headers: {},
            params: {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {},
            onRemove: function onRemove() {},
            components: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).call(this, options));
    }
    createClass(UploadItem, [ {
        key: "components",
        value: function components() {
            var options = this.options;
            this.addCom({
                el: "#progressbar_" + options.vid,
                showInfo: false,
                status: "success",
                onComplete: function onComplete(self) {
                    self.options.percent = 100;
                }
            });
        }
    }, {
        key: "renderFile",
        value: function renderFile() {
            var opts = this.options;
            var vDom = hx(_templateObject$1, Lego.UI.Util.getFileIcon(opts.file.name), opts.percent < 100 ? hx(_templateObject2$1, val(opts.file._id), this.onCancel.bind(this), val(opts.file.name), "progressbar_" + opts.vid) : hx(_templateObject3$1, !opts.readonly && opts.percent == 100 ? hx(_templateObject4$1, val(opts.file._id), this.onRemove.bind(this)) : "", val(opts.file.name), Lego.UI.Util.convertByteUnit(opts.file.size), val(opts.file.url), val(opts.file.name)));
            return vDom;
        }
    }, {
        key: "renderPhoto",
        value: function renderPhoto() {
            var opts = this.options;
            var vDom = opts.percent < 100 ? hx(_templateObject5$1, val(opts.type), opts.vid, opts.vid, val(opts.previewImgSrc), "progressbar_" + opts.vid, val(opts.file._id), this.onCancel.bind(this)) : hx(_templateObject6, val(opts.type), opts.vid, opts.vid, val(opts.file.url), opts.showZoom ? hx(_templateObject7, val(opts.file._id)) : "", !opts.readonly && opts.percent == 100 ? hx(_templateObject8, val(opts.file._id), this.onRemove.bind(this)) : "");
            return vDom;
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            switch (opts.type) {
              case "file":
                return this.renderFile();
                break;

              case "photos":
                return this.renderPhoto();
                break;

              case "avatar":
                return this.renderPhoto();
                break;

              default:
                return this.renderFile();
            }
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            function before(el, target) {
                target.parentNode.insertBefore(el, target);
            }
            function prepend(el, target) {
                if (target.firstChild) {
                    before(el, target.firstChild);
                } else {
                    target.appendChild(el);
                }
            }
            function appendSvg() {
                var div = void 0, svg = void 0;
                div = document.createElement("div");
                div.innerHTML = window.svgSprite;
                window.svgSprite = null;
                svg = div.getElementsByTagName("svg")[0];
                if (svg) {
                    svg.setAttribute("aria-hidden", "true");
                    svg.style.position = "absolute";
                    svg.style.width = 0;
                    svg.style.height = 0;
                    svg.style.overflow = "hidden";
                    prepend(svg, document.body);
                }
            }
            var iconEl = this.$(".file-icon");
            if (iconEl.length) {
                iconEl.each(function(index, el) {
                    var classStr = $(el).attr("class"), fileExtArr = classStr.split(" ");
                    $(el).parent().html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-' + (fileExtArr[1] || "file") + '"></use></svg>');
                });
                appendSvg();
            }
        }
    }, {
        key: "removeFun",
        value: function removeFun() {
            var _this2 = this;
            if (this.options.type !== "avatar") {
                if (this.options.type == "photos") {
                    this.$el.remove();
                } else {
                    this.$el.slideUp("normal", function() {
                        _this2.$el.remove();
                    });
                }
            }
        }
    }, {
        key: "onCancel",
        value: function onCancel(event) {
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            this.cancel();
            if (typeof this.options.onCancel == "function") {
                this.options.onCancel("cancel", _id);
            }
            this.removeFun();
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            if (typeof this.options.onRemove == "function") {
                this.options.onRemove("remove", _id);
            }
            this.removeFun();
        }
    } ]);
    return UploadItem;
}(UploadView);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ]);

var _templateObject3 = taggedTemplateLiteral([ '<i class="anticon anticon-upload"></i>' ], [ '<i class="anticon anticon-upload"></i>' ]);

var _templateObject4 = taggedTemplateLiteral([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);

var _templateObject5 = taggedTemplateLiteral([ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ], [ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ]);

var Upload = function(_Lego$UI$Baseview) {
    inherits(Upload, _Lego$UI$Baseview);
    function Upload() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Upload);
        var uploadUri = window.location.protocol === "https:" ? "https://up.qbox.me" : "http://upload.qiniu.com";
        var options = {
            events: {
                "click .lego-addbtn, .lego-upload-add": "onClickAdd"
            },
            keyRoot: "",
            type: "file",
            buttonText: "添加附件",
            buttonIcon: "",
            showZoom: true,
            name: "",
            token: "",
            params: {},
            uploadUri: Lego.config.uploadUri || uploadUri,
            accept: [],
            acceptSuffix: [],
            previewImg: {
                width: 0,
                height: 0,
                quality: 1
            },
            multiple: true,
            context: null,
            template: "",
            maxFileSize: "5mb",
            maxFilesCount: 9,
            isAuto: true,
            readonly: false,
            disabled: false,
            hasCookie: false,
            showUploadList: true,
            value: [],
            previewContainer: ".lego-upload-container",
            uploadItem: UploadItem,
            onAddFile: function onAddFile() {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onRemove: function onRemove() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        if (options.type == "avatar") {
            options.multiple = false;
        }
        if (options.type !== "file") {
            options.accept = options.accept || [ "image/gif", "image/jpeg", "image/png", "image/jpg" ];
            var cssOpts = {
                width: options.previewImg.width || (options.type == "avatar" ? 150 : 95),
                height: options.previewImg.height || (options.type == "avatar" ? 150 : 95)
            };
            Object.assign(options.previewImg, cssOpts);
        }
        var _this = possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, options));
        _this.fileList = [];
        _this.$(".lego-fileInput").on("change", function(event) {
            var target = $(event.currentTarget)[0];
            _this.uploadInit(target.files, target);
        });
        var opt = _this.options;
        if (opt.value.length) {
            opt.value = opt.value.map(function(file) {
                var item = {
                    el: opt.previewContainer,
                    readonly: opt.readonly,
                    percent: 100,
                    showZoom: opt.showZoom,
                    type: opt.type,
                    file: file
                };
                if (!file._id && file.id) {
                    item._id = file.id;
                }
                return item;
            });
            if (opt.showUploadList) {
                opt.value.forEach(function(item, index) {
                    _this.showItem(item);
                });
            }
        }
        return _this;
    }
    createClass(Upload, [ {
        key: "render",
        value: function render() {
            var opts = this.options, width = opts.previewImg.width, height = opts.previewImg.height;
            if (width) {
                width = "width:" + (typeof width == "string" ? width : width + "px") + ";";
            }
            if (height) {
                height = "height:" + (typeof height == "string" ? height : height + "px") + ";";
            }
            var vDom = hx(_templateObject, val(opts.type), val(opts.type), width ? width : "", height ? height : "", !opts.readonly && opts.type !== "photos" && opts.type !== "avatar" ? hx(_templateObject2, opts.disabled ? "disabled" : "", opts.buttonIcon ? opts.buttonIcon : hx(_templateObject3), val(opts.buttonText)) : "", this.getValue().join(","), val(opts.name), val(opts.accept.join(",")), opts.showUploadList && opts.type == "file" ? hx(_templateObject4) : "", opts.type == "photos" || opts.type == "avatar" ? hx(_templateObject5, val(opts.type), val(opts.type)) : "");
            return opts.template ? opts.template : vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.showUploadList && !opts.value.length) {
                if (opts.type !== "file") {
                    this.$(".lego-upload-photo-item").remove();
                } else {
                    this.$(".lego-upload-container").html("");
                }
            }
        }
    }, {
        key: "uploadInit",
        value: function uploadInit(files, fileInput) {
            var _this2 = this;
            var uploadFiles = [];
            if ((typeof files === "undefined" ? "undefined" : _typeof(files)) == "object" && files[0]) {
                uploadFiles = Array.prototype.slice.call(files, 0);
            } else {
                uploadFiles = [ files ];
            }
            if (fileInput) {
                fileInput.value = "";
            }
            var that = this, opts = this.options, filesCount = uploadFiles.length, maxFilesCount = opts.maxFilesCount;
            if (filesCount) {
                if (filesCount > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    return;
                }
                uploadFiles = uploadFiles.filter(function(file) {
                    file._id = [ file.name, file.size, file.lastModified ].join("_");
                    var hasFile = _this2.fileList.includes(file._id);
                    if (!hasFile) {
                        _this2.fileList.push(file._id);
                    }
                    return !hasFile;
                });
                if (!opts.multiple) {
                    this.fileList = [ this.fileList.pop() ];
                }
                if (this.fileList.length > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    this.fileList.length = maxFilesCount;
                    if (uploadFiles.length > maxFilesCount) {
                        uploadFiles.length = maxFilesCount;
                    }
                    return;
                }
                if (typeof opts.onAddFile == "function") {
                    opts.onAddFile(this, uploadFiles);
                }
                uploadFiles.forEach(function(file, i) {
                    if (opts.accept.length) {
                        if (!opts.accept.includes(file.type)) {
                            Lego.UI.message("error", "上传文件格式不正确");
                            _this2.fileList = _this2.fileList.filter(function(value) {
                                return value !== file._id;
                            });
                            return;
                        }
                    }
                    if (opts.acceptSuffix.length) {
                        if (!opts.acceptSuffix.includes(Lego.UI.Util.getExtName(file.name))) {
                            Lego.UI.message("error", "上传文件格式不正确");
                            _this2.fileList = _this2.fileList.filter(function(value) {
                                return value !== file._id;
                            });
                            return;
                        }
                    }
                    if (Math.ceil(file.size / (1024 * 1024)) > parseInt(opts.maxFileSize)) {
                        var msg = "发送文件最大为" + opts.maxFileSize;
                        if (uploadFiles.length == 1) {
                            Lego.UI.message("error", msg);
                        } else {
                            debug.warn(msg);
                        }
                        _this2.fileList = _this2.fileList.filter(function(value) {
                            return value !== file._id;
                        });
                        return;
                    }
                    if (i > maxFilesCount - 1) {
                        return;
                    }
                    var uploadOption = {
                        el: opts.previewContainer,
                        uploadUri: opts.uploadUri,
                        readonly: opts.readonly,
                        isAuto: opts.isAuto,
                        file: file,
                        type: opts.type,
                        percent: 0,
                        showZoom: opts.showZoom,
                        params: Object.assign({
                            key: opts.key || that.getKey(file.name),
                            token: opts.token ? opts.token : typeof opts.data == "string" ? opts.data : ""
                        }, opts.params || {}),
                        needToken: true,
                        onBegin: opts.onBegin,
                        onProgress: opts.onProgress,
                        onComplete: function onComplete(self, resp) {
                            var hasFile = opts.value.find(function(item) {
                                return item.file.hash == resp.hash;
                            });
                            if (!hasFile && opts.value.length <= maxFilesCount) {
                                resp.url = Lego.config.downloadUri + resp.key;
                                self.options.file = resp;
                                opts.value.push({
                                    file: resp,
                                    type: opts.type,
                                    percent: 100
                                });
                            }
                            if (typeof opts.onComplete == "function") {
                                opts.onComplete(that, resp, self);
                            }
                        },
                        onFail: opts.onFail,
                        onCancel: opts.onCancel
                    };
                    if (opts.type !== "file") {
                        uploadOption.isAuto = opts.isAuto;
                        opts.previewImg.success = function(results, option) {
                            option.previewImgSrc = results.blob;
                            that.showItem(option);
                        };
                        localresizeimg(file, opts.previewImg, uploadOption);
                    } else {
                        that.showItem(uploadOption);
                    }
                });
            } else {
                debug && debug.log("form input error");
            }
        }
    }, {
        key: "getKey",
        value: function getKey(fileName) {
            return this.options.keyRoot + Lego.UI.Util.uuid() + "." + Lego.UI.Util.getExtName(fileName);
        }
    }, {
        key: "onClickAdd",
        value: function onClickAdd(event) {
            this.$(".lego-fileInput").click();
        }
    }, {
        key: "showItem",
        value: function showItem(uploadOption) {
            var _this3 = this;
            var that = this, opts = this.options;
            var callback = function callback(type, _id) {
                _this3.fileList = _this3.fileList.filter(function(value) {
                    return value !== _id;
                });
                if (type == "cancel") {
                    if (typeof opts.onCancel == "function") {
                        opts.onCancel(_this3, _id);
                    }
                } else {
                    var hasOne = opts.value.find(function(item) {
                        return item.file._id == _id;
                    }), removeFile = {};
                    if (hasOne) {
                        removeFile = $.extend({}, hasOne.file || {});
                    }
                    if (typeof opts.onRemove == "function") {
                        opts.onRemove(_this3, removeFile);
                    }
                    opts.value = opts.value.filter(function(item) {
                        return item.file._id !== _id;
                    });
                }
                if (opts.type == "avatar") {
                    var html = [ '<div class="lego-upload-add preview-' + val(opts.type) + '">', '<i class="anticon anticon-plus avatar-uploader-trigger preview-' + val(opts.type) + '"></i></div>' ].join("");
                    _this3.$(".lego-upload-container").html(html);
                }
                _this3.refresh();
            };
            uploadOption.context = this;
            uploadOption.insert = opts.multiple ? opts.type == "photos" ? "prepend" : "append" : "html";
            uploadOption.onCancel = callback;
            uploadOption.onRemove = callback;
            Lego.create(opts.uploadItem, uploadOption);
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var result = [];
            if (this.options.value.length) {
                var newArr = this.options.value.filter(function(item) {
                    return !!item.id;
                });
                result = newArr.map(function(item) {
                    return item.id;
                });
            }
            return result;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.fileList = [];
            this.options.value = [];
            this.refresh();
            return this;
        }
    } ]);
    return Upload;
}(Lego.UI.Baseview);

Lego.components("upload", Upload);

module.exports = Upload;
