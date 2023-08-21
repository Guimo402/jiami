class JmSvLogin {
    constructor(root) {
        this.root = root;
        this.$login = $(`
<body>
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

        this.hide();
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
        this.$settings = $(`<div>这里是设置页面</div>`);
        
        this.hide();
        this.root.$jm_sv.append(this.$settings);

        this.start();
    }

    start() {

    }

    show() {
        this.$settings.show();
    }

    hide() {
        this.$settings.hide();
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
       this.menu = new JmSvMenu(this);
       this.login = new JmSvLogin(this);
       this.settings = new Settings(this);
       this.sign = new JmSvSign(this);
       this.service = new JmSvService(this);
       this.start();
    }

    start() {
        
    }
}

