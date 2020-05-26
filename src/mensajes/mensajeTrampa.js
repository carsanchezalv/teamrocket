export default class MensajeTrampa extends Phaser.Scene {
    constructor(scene, trampa) {
        
        super('mensajeTrampa'+trampa);
        this.scene = scene;
        
        this.nombre = trampa;

        if(trampa === "trampa7")
        {
            this.mensaje = this.scene.add.sprite(512, 350, "mensajeTrampa7");
            this.mensaje.setTexture("mensajeTrampa7");
            this.mensaje.setScrollFactor(0);
            this.mensaje.setDepth(20);
            this.mensaje.setScale(0.5);
        }
        else if(trampa === "trampa8")
        {
            this.mensaje = this.scene.add.sprite(512, 350, "mensajeTrampa8");
            this.mensaje.setTexture("mensajeTrampa8");
            this.mensaje.setScrollFactor(0);
            this.mensaje.setDepth(20);
            this.mensaje.setScale(0.5);
        }
        this.activo = true;
    }

    updateMensajeTrampa() {
        
        this.scene.time.addEvent({
            delay: 5000,
            callback: () => {
                this.activo = false;
            },
            loop: false
        });

        if(!this.activo)
            this.mensaje.destroy();                              
    }
}