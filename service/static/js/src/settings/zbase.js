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

