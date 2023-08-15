export class JmService {
    constructor(id) {
        this.id = id;
        this.$jm_service = $('#' + id);
        this.menu = new JmServiceMenu(this);
        this.login = new JmServiceLogin(this);
        this.start();
    }
    start() {
        
    }
}