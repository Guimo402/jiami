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

