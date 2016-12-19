class MainView extends HBY.View {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click nav a': 'clickNav'
            }
        };
        HBY.$.extend(true, options, opts);
        super(options);
    }
    render() {
        const tmpl = hx`
        <div id="app" class="app-navbar-fixed app-sidebar-fixed">
            <div class="sidebar app-aside" id="sidebar"></div>
            <div class="app-content">
                <header class="navbar navbar-default navbar-static-top">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img src="asset/img/logo.png" alt="" />
                        </a>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle"><i class="glyphicon glyphicon-qrcode"></i> 邀请码 </a>
                                <ul class="dropdown-menu">
                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>
                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle"><i class="hby-staff"></i>
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:;" id="modifyPassword"><i class="glyphicon glyphicon-lock"></i> 修改密码</a></li>
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
                    <div class="wrap-content container-fluid" id="container">
                    </div>
                </div>
            </div>
            <footer>
                <div class="footer-inner">
                    <div class="pull-left">
                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>
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
    clickNav(event){
        const target = HBY.$(event.currentTarget),
            app = target.data('app');
        HBY.startApp(app);
    }
}
export default MainView;