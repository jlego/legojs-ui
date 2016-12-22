import '../asset/scss/style.scss';
import Lego from "lego-core";
import Viewport from "./viewport/app";
import Badge from "./badge/app";

const coms = {
    Viewport: Viewport,
    Badge: Badge
};

Lego.components(coms);

export {
    Viewport,
    Badge
};