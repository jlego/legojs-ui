// 公共组件
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';
import perfectScrollbar from 'perfect-scrollbar';
import "../notification/index";
import "../message/index";
import "../util/util";
import Baseview from "./view";

window.Ps = perfectScrollbar;

export { Baseview };