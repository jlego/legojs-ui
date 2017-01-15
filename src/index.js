import '../asset/scss/style.scss';

import { Baseview } from "./common/index";
import Viewport from "./viewport/index";
import Alert from "./alert/index";
import Badge from "./badge/index";
import Buttons from "./buttons/index";
import Tables from "./tables/index";
import Pagination from "./pagination/index";
import Dropdown from "./dropdown/index";
import Modal from "./modal/index";
import Navs from "./navs/index";
import Tabs from "./tabs/index";
import Search from "./search/index";
import Selects from "./selects/index";
import Datepicker from "./datepicker/index";
import Inputs from "./inputs/index";
import Tooltip from "./tooltip/index";
import Popover from "./popover/index";
import Notification from "./notification/index";
import Message from "./message/index";
import Tree from "./tree/index";
import Treeselect from "./treeselect/index";
import Forms from "./forms/index";
import Listgroup from "./listgroup/index";
import Transfer from "./transfer/index";
import Progressbar from "./progressbar/index";
import Upload from "./upload/index";

Lego.components({
	baseview: Baseview,
	viewport: Viewport,
	alert: Alert,
	badge: Badge,
	buttons: Buttons,
	tables: Tables,
	pagination: Pagination,
	dropdown: Dropdown,
	modal: Modal,
	navs: Navs,
	tabs: Tabs,
	search: Search,
	selects: Selects,
	datepicker: Datepicker,
	inputs: Inputs,
	tooltip: Tooltip,
	popover: Popover,
	notification: Notification,
	message: Message,
	tree: Tree,
	treeselect: Treeselect,
	forms: Forms,
	listgroup: Listgroup,
	transfer: Transfer,
	progressbar: Progressbar,
	upload: Upload
});
export default Lego.UI;