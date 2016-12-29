// 公共组件
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';
import perfectScrollbar from 'perfect-scrollbar';
import Baseview from "./view";
import Util from "../util/util";

window.Ps = perfectScrollbar;

Lego.components({
	'Util': Util,
	// 'dialog': Util.dialog
});

export { Baseview };