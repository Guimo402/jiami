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

