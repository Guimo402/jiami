class JmSvMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<body>
    <div class="navbar">
        <a class="navbar-item-login" >登录</a>
        <a class="navbar-item-about" >关于</a>
        <a class="navbar-item-settings" >设置</a>
    </div>

    <h1>医疗数据保护系统</h1>
</body>
`);

        this.root.$jm_sv.append(this.$menu);
        this.$login = this.$menu.find('.navbar-item-login');
        this.$settings = this.$menu.find('.navbar-item-settings');
        this.$about = this.$menu.find('.navbar-item-about');


        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$login.click(function() {
            outer.hide();
            outer.root.login.show();
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
        this.$about.click(function() {
            console.log("click about");
        });
    }


    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}

