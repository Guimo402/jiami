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

