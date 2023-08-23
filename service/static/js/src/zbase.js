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

