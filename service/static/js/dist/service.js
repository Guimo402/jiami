class JmSvAbout {
    constructor(root) {
        this.root = root;
        this.$about = $(`<div>这里是关于页面</div>`);
        
        this.hide();
        this.root.$jm_sv.append(this.$about);

        this.start();
    }

    start() {

    }

    show() {
        this.$about.show();
    }

    hide() {
        this.$about.hide();
    }
}

class JmSvLogin {
    constructor(root) {
        this.root = root;
        this.$login = $(`
<br><br><br><br>
<div class="container">
    <h2>用户登录</h2>
    <form>
    <div class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" name="password" required>
    </div>
    <br>
    <div class="form-group">
        <button type="submit">登录</button>
    </div>
    <div class="form-sign">
        还没有账号？注册一个吧
    </div>
    </form>
</div>
</body>
        
`);
        
        this.root.$jm_sv.append(this.$login);
        this.$sign = this.$login.find('.form-sign');


        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$sign.click(function() {
            outer.hide();
            outer.root.sign.show();
        });
    }

    show() {
        this.$login.show();
    }

    hide() {
        this.$login.hide();
    }
}

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

class JmSvService {
    constructor(root) {
        this.root = root;
        this.$service = $(`<div>这里是服务页面</div>`);
        
        this.hide();
        this.root.$jm_sv.append(this.$service);

        this.start();
    }

    start() {

    }

    show() {
        this.$service.show();
    }

    hide() {
        this.$service.hide();
    }
}

class Settings {
    constructor(root) {
        this.root = root;
        this.username = "";
        this.other_info = "";

        this.$settings = $(`
<div class="jm-sv-settings">
    <div class="jm-sv-settings-login">
        <div class="jm-sv-settings-title">
            登录
        </div>
        <div class="jm-sv-settings-username">
            <div class="jm-sv-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="jm-sv-settings-password">
            <div class="jm-sv-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="jm-sv-settings-submit">
            <div class="jm-sv-settings-item">
                <button>登录</button>
            </div>
        </div>
        <div class="jm-sv-settings-error-message">
        </div>
        <div class="jm-sv-settings-option">
            注册
        </div>
        <br>
    </div>
    <div class="jm-sv-settings-register">
        <div class="jm-sv-settings-title">
            注册
        </div>
        <div class="jm-sv-settings-username">
            <div class="jm-sv-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="jm-sv-settings-password jm-sv-settings-password-first">
            <div class="jm-sv-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="jm-sv-settings-password jm-sv-settings-password-second">
            <div class="jm-sv-settings-item">
                <input type="password" placeholder="确认密码">
            </div>
        </div>
        <div class="jm-sv-settings-submit">
            <div class="jm-sv-settings-item">
                <button>注册</button>
            </div>
        </div>
        <div class="jm-sv-settings-error-message">
        </div>
        <div class="jm-sv-settings-option">
            登录
        </div>
        <br>
    </div>
</div>

`);
        
        this.$login = this.$settings.find(".jm-sv-settings-login");
        this.$login_username = this.$login.find(".jm-sv-settings-username input");
        this.$login_password = this.$login.find(".jm-sv-settings-password input");
        this.$login_submit = this.$login.find(".jm-sv-settings-submit button");
        this.$login_error_message = this.$login.find(".jm-sv-settings-error-message");
        this.$login_register = this.$login.find(".jm-sv-settings-option");

        this.$login.hide();

        this.$register = this.$settings.find(".jm-sv-settings-register");
        this.$register_username = this.$register.find(".jm-sv-settings-username input");
        this.$register_password = this.$register.find(".jm-sv-settings-password-first input");
        this.$register_password_confirm = this.$register.find(".jm-sv-settings-password-second input");
        this.$register_submit = this.$register.find(".jm-sv-settings-submit button");
        this.$register_error_message = this.$register.find(".jm-sv-settings-error-message");
        this.$register_login = this.$register.find(".jm-sv-settings-option");

        this.$register.hide();

        this.root.$jm_sv.append(this.$settings);

        this.start();

    }

    start() {
        this.getinfo();
        this.add_listening_events();
    }

    add_listening_events() {
        this.add_listening_events_login();
        this.add_listening_events_register();
    }

    add_listening_events_login() {
        let outer = this;

        this.$login_register.click(function() {
            outer.register();
        });
        this.$login_submit.click(function() {
            outer.login_on_remote();
        });
    }

    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function() {
            outer.login();
        });
        this.$register_submit.click(function() {
            outer.register_on_remote();
        });
    }

    login_on_remote() {  // 在远程服务器上登录
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();

        $.ajax({
            url: "http://39.101.1.113:1000/settings/login/",
            type: "GET",
            data: {
                username: username,
                password: password,
            },
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }

    register_on_remote() {  // 在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();
        this.$register_error_message.empty();

        $.ajax({
            url: "http://39.101.1.113:1000/settings/register/",
            type: "GET",
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm,
            },
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();  // 刷新页面
                } else {
                    outer.$register_error_message.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() {  // 在远程服务器上登出
        $.ajax({
            url: "http://39.101.1.113:1000/settings/logout/",
            type: "GET",
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                }
            }
        });
    }

    register() {  // 打开注册界面
        this.$login.hide();
        this.$register.show();
    }

    login() {  // 打开登录界面
        this.$register.hide();
        this.$login.show();
    }

    getinfo() {
        let outer = this;

        $.ajax({
            url: "http://39.101.1.113:1000/settings/getinfo/",
            type: "GET",
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    outer.username = resp.username;
                    outer.other_info = resp.other_info;
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }

    hide() {
        this.$settings.hide();
    }

    show() {
        this.$settings.show();
    }

}

class JmSvSign {
    constructor(root) {
        this.root = root;
        this.$sign = $(`
<body>
    <br><br><br><br>
    <div class="container">
    <h1>用户注册</h1>
    <br><br>
    <form action="register.php" method="post">
        <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" name="username" id="username" class="form-control">
        </div>
        <div class="form-group">
        <br>
        <label for="password">密码</label>
        <input type="password" name="password" id="password" class="form-control">
        </div>
        <div class="form-group">
        <br>
        <label for="confirm_password">确认密码</label>
        <input type="password" name="confirm_password" id="confirm_password" class="form-control">
        </div>
        <br><br>
        <button type="submit" class="btn btn-primary">注册</button>
    </form>
    </div>
</body>

`);
        
        this.hide();
        this.root.$jm_sv.append(this.$sign);

        this.start();
    }

    start() {

    }

    show() {
        this.$sign.show();
    }

    hide() {
        this.$sign.hide();
    }
}

export class JmSv {
    constructor(id) {
       this.id = id;
       this.$jm_sv = $('#' + id);
       this.settings = new Settings(this);
       this.menu = new JmSvMenu(this);
       this.service = new JmSvService(this);
       this.about = new JmSvAbout(this);
       this.start();
    }

    start() {
        
    }
}

