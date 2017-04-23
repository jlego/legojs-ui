import '../asset/index.scss';
import Menu from './menu';

Lego.components('menu', Menu);

class Viewport extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            logoUrl: 'asset/img/logo.png',
            components: [{
                el: '#sidebar'
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const tmpl = hx`
        <div id="app" class="app-navbar-fixed app-sidebar-fixed">
            <link rel="stylesheet" type="text/css" href="dist/index/app.css" />
            <menu id="sidebar"></menu>
            <div class="app-content">
                <header class="navbar navbar-default navbar-static-top">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img src="${this.options.logoUrl}" alt="" />
                        </a>
                    </div>
                    <div class="navbar-collapse">
                        <ul class="nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>
                                <ul class="dropdown-menu">
                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>
                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>
                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="search-form" style="display:none;">
                            <a class="s-open" href="#">
                                <i class="ti-search"></i>
                            </a>
                            <form class="navbar-form" role="search">
                                <a class="s-remove" href="#" target=".navbar-form">
                                    <i class="ti-close"></i>
                                </a>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="搜索">
                                    <button class="btn search-button" type="submit">
                                        <i class="ti-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </header>
                <div class="main-content">
                    <div class="container-fluid" id="container">
                        <div id="page-container"></div>
                    </div>
                    <layer id="lego-layer"></layer>
                </div>
            </div>
            <footer>
                <div class="footer-inner">
                    <div class="pull-left">
                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">Lego</span>. <span>All rights reserved</span>
                    </div>
                    <div class="pull-right">
                        <span class="go-top"><i class="ti-angle-up"></i></span>
                    </div>
                </div>
            </footer>
        </div>
        `;
        return tmpl;
    }
}
export default Viewport;
