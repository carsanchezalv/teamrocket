export default class MensajeTrampa extends Phaser.Scene {
    constructor(scene, trampa) {
        
        super('mensajeTrampa');
        this.scene = scene;
        
        this.nombre = trampa;

        if(trampa === "trampa7")
        {
            this.mensaje = this.scene.add.text(360, 350, "¡Buenas noticias! Se han duplicado tus puntos al pisar esta trampilla", {
                font: "../fonts/pkmnem.ttf",
              //  fill: "#E60026",
                fontSize: '1px',
                padding: { x: 5, y: 3 },
                
                backgroundColor: "black"
            }).setScrollFactor(0);
            this.mensaje.setDepth(20);
            this.mensaje.setScale(1);
        }
        
        this.activo = true;
    }

    updateMensajeTrampa() {
        
        this.scene.time.addEvent({
            delay: 7000,
            callback: () => {
                this.activo = false;
            },
            loop: false
        });

        if(!this.activo)
            this.mensaje.destroy();
                              
    }

}