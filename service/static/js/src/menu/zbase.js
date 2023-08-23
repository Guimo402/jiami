class JmSvMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<body>
    <div class="navbar">
        <a class="navbar-item-service" >信息服务</a>
        <a class="navbar-item-about" >关于</a>
        <a class="navbar-item-logout" >退出</a>
    </div>

    <h1>医疗数据保护系统</h1>
</body>
`);
        this.hide();
        this.root.$jm_sv.append(this.$menu);
        this.$service = this.$menu.find('.navbar-item-service');
        this.$about = this.$menu.find('.navbar-item-about');
        this.$logout = this.$menu.find('.navbar-item-logout');


        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$service.click(function() {
            outer.hide();
            outer.root.service.show();
        });
        this.$logout.click(function() {
            outer.root.settings.logout_on_remote();
        });
        this.$about.click(function() {
            outer.hide();
            outer.root.about.show();
        });
    }


    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}

