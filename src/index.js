import '../asset/scss/style.scss';
import Lego from "lego-core";
import Viewport from "./viewport/app";
import Badge from "./badge/app";

        console.warn(Lego);
Lego.registerUI({
    viewport: Viewport,
    badge: Badge
});