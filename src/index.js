require('../asset/scss/style.scss');

import Lego from "lego-core";
import BaseView from "./common/BaseView";
import Viewport from "./viewport/app";
import Badge from "./badge/app";

Lego.components({
    BaseView: BaseView,
    Viewport: Viewport,
    Badge: Badge
});

export {
    BaseView,
    Viewport,
    Badge
};