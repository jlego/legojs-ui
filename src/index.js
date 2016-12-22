import '../asset/scss/style.scss';
// import '../asset/less/index.less';
import Lego from "lego-core";
import Viewport from "./viewport/index";
import Alert from "./alert/index";
import Badge from "./badge/index";

const coms = {
    Viewport: Viewport,
    Alert: Alert,
    Badge: Badge
};

Lego.components(coms);

export {
    Viewport,
    Alert,
    Badge
};