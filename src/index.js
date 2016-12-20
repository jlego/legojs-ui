import '../asset/scss/style.scss';
import jQuery from 'jquery';
import Lego from "lego-core";
import Viewport from "./viewport/app";
import Badge from "./badge/app";

window.$ = jQuery;

Lego.components({
    viewport: Viewport,
    badge: Badge
});