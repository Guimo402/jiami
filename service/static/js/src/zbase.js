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

