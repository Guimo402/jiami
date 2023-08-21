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

