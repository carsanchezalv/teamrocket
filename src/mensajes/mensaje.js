export default class Mensajes extends Phaser.Scene {
    constructor(scene, nombre) {
        
        super('mensaje'+nombre);
        this.scene = scene;
        
        this.nombre = nombre;

        if(nombre === "trampa7")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa7");
            this.alerta.setTexture("mensajeTrampa7");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa8")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa8");
            this.alerta.setTexture("mensajeTrampa8");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa9")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa9");
            this.alerta.setTexture("mensajeTrampa9");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa10")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa10");
            this.alerta.setTexture("mensajeTrampa10");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa11")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa12")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa12");
            this.alerta.setTexture("mensajeTrampa12");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa13")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa13");
            this.alerta.setTexture("mensajeTrampa13");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa14")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa15")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa16")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa16");
            this.alerta.setTexture("mensajeTrampa16");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa17")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa17");
            this.alerta.setTexture("mensajeTrampa17");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa18")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa18");
            this.alerta.setTexture("mensajeTrampa18");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa19")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa19");
            this.alerta.setTexture("mensajeTrampa19");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa20")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa20");
            this.alerta.setTexture("mensajeTrampa20");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa21")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa21");
            this.alerta.setTexture("mensajeTrampa21");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa22")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa22");
            this.alerta.setTexture("mensajeTrampa22");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa23")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeNada");
            this.alerta.setTexture("mensajeNada");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "trampa24")
        {
            this.alerta = this.scene.add.sprite(512, 350, "mensajeTrampa24");
            this.alerta.setTexture("mensajeTrampa24");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "evolucion1")
        {
            this.alerta = this.scene.add.sprite(512, 350, "evolucionar1");
            this.alerta.setTexture("evolucionar1");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "evolucion2")
        {
            this.alerta = this.scene.add.sprite(512, 350, "evolucionar2");
            this.alerta.setTexture("evolucionar2");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "evolucion3")
        {
            this.alerta = this.scene.add.sprite(512, 350, "evolucionar3");
            this.alerta.setTexture("evolucionar3");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "portalNivel2")
        {
            this.alerta = this.scene.add.sprite(512, 350, "nivel2");
            this.alerta.setTexture("nivel2");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "portalNivel3")
        {
            this.alerta = this.scene.add.sprite(512, 350, "nivel3");
            this.alerta.setTexture("nivel3");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "portalNivel4")
        {
            this.alerta = this.scene.add.sprite(512, 350, "nivel4");
            this.alerta.setTexture("nivel4");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "portalNivel5")
        {
            this.alerta = this.scene.add.sprite(512, 350, "nivel5");
            this.alerta.setTexture("nivel5");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }
        else if(nombre === "portalNivel6")
        {
            this.alerta = this.scene.add.sprite(512, 350, "nivel6");
            this.alerta.setTexture("nivel6");
            this.alerta.setScrollFactor(0);
            this.alerta.setDepth(60);
            this.alerta.setScale(0.5);
        }

        this.activo = true;
    }

    updateMensaje() {
    }               
}