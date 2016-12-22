import Baseview from '../common/view';

class Menu extends Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click nav a': 'clickNav'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const tmpl = hx`
        <div class="sidebar-container perfect-scrollbar ps-container ps-active-y">
            <nav>
                <ul class="main-navigation-menu">
                    <li data-permis='{"module":"Home", "operate":"Query", "hide":1}' id="nav_home">
                        <a href="javascript:Lego.startApp('home');">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-home"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 首页 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Register", "operate":"Query", "hide":1}' id="nav_register">
                        <a href="javascript:Lego.startApp('test');">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-account-info"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 售后管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Customer", "operate":"Query", "hide":1}' id="nav_customer">
                        <a href="#customer/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-teamwork"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 客户管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Order", "operate":"Query", "hide":1}' id="nav_order">
                        <a href="#order/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-purchase"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 订单管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Channel", "operate":"Query", "hide":1}' id="nav_channel">
                        <a href="#channel/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-clues"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 渠道管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Finance", "operate":"Query", "hide":1}' id="nav_finance">
                        <a href="#finance/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-biz"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 财务管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Consumption", "operate":"Query", "hide":1}' id="nav_expenses">
                        <a href="#expenses/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-expenses"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 消费记录 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Product", "operate":"Query", "hide":1}' id="nav_product">
                        <a href="#product/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-products"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 产品管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Operation", "operate":"Query", "hide":1}' id="nav_operation">
                        <a href="#operation/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-dashboard"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 运营管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-permis='{"module":"Organization", "operate":"Query", "hide":1}' id="nav_organization">
                        <a href="#admin/">
                            <div class="item-content">
                                <div class="item-media">
                                    <i class="icon iconfont icon-admin"></i>
                                </div>
                                <div class="item-inner">
                                    <span class="title"> 后台管理 </span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        `;
        return tmpl;
    }
}
export default Menu;