import '../asset/scss/style.scss';

import Lego from "lego-core";
import BaseView from "./common/BaseView";
import Viewport from "./viewport/app";
import Badge from "./badge/app";

const coms = {
    BaseView: BaseView,
    Viewport: Viewport,
    Badge: Badge
};

Lego.components(coms);

export default coms;