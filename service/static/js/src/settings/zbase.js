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

