export default class MensajeTrampa extends Phaser.Scene {
    constructor(scene, trampa) {
        
        super('mensajeTrampa'+trampa);
        this.scene = scene;
        
        this.nombre = trampa;

        if(trampa === "trampa7")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa7");
            this.alerta.setTexture("mensajeTrampa7");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa8")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa8");
            this.alerta.setTexture("mensajeTrampa8");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa9")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa9");
            this.alerta.setTexture("mensajeTrampa9");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa10")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa10");
            this.alerta.setTexture("mensajeTrampa10");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa11")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa12")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa12");
            this.alerta.setTexture("mensajeTrampa12");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa13")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa13");
            this.alerta.setTexture("mensajeTrampa13");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa14")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa15")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa16")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa16");
            this.alerta.setTexture("mensajeTrampa16");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa17")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa17");
            this.alerta.setTexture("mensajeTrampa17");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa18")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa18");
            this.alerta.setTexture("mensajeTrampa18");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa19")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa19");
            this.alerta.setTexture("mensajeTrampa19");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa20")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa20");
            this.alerta.setTexture("mensajeTrampa20");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa21")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa21");
            this.alerta.setTexture("mensajeTrampa21");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa22")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa22");
            this.alerta.setTexture("mensajeTrampa22");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa23")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }
        else if(trampa === "trampa24")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa24");
            this.alerta.setTexture("mensajeTrampa24");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(20);
            this.alerta.setScale(0.5);
        }

        this.activo = true;
    }

    updateMensaje() {
    }               
}