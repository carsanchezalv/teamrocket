export default class Objetivo extends Phaser.Scene {
    constructor(scene) {
        
        super('Objetivo');
        this.scene = scene;

        this.marcador1 = scene.add.sprite(715, 185, 'evolucionActivado');
        this.marcador1.setTexture('evolucionActivado');
        this.marcador1.setScale(0.18);
        this.marcador1.setDepth(60);
        this.marcador1.setScrollFactor(0);

        this.marcador2 = scene.add.sprite(715, 228, 'evolucionActivado');
        this.marcador2.setTexture('evolucionActivado');
        this.marcador2.setScale(0.18);
        this.marcador2.setDepth(60);
        this.marcador2.setScrollFactor(0);

        this.marcador3 = scene.add.sprite(715, 271, 'evolucionActivado');
        this.marcador3.setTexture('evolucionActivado');
        this.marcador3.setScale(0.18);
        this.marcador3.setDepth(60);
        this.marcador3.setScrollFactor(0);

        this.marcador4 = scene.add.sprite(715, 314, 'evolucionActivado');
        this.marcador4.setTexture('evolucionActivado');
        this.marcador4.setScale(0.18);
        this.marcador4.setDepth(60);
        this.marcador4.setScrollFactor(0);

        this.marcador5 = scene.add.sprite(715, 357, 'evolucionActivado');
        this.marcador5.setTexture('evolucionActivado');
        this.marcador5.setScale(0.18);
        this.marcador5.setDepth(60);
        this.marcador5.setScrollFactor(0);
    }

    updateEvoluciones(numero) {
        
        if(numero === 5)
        {
            this.marcador1.setTexture('evolucionActivado');
            this.marcador2.setTexture('evolucionActivado');
            this.marcador3.setTexture('evolucionActivado');
            this.marcador4.setTexture('evolucionActivado');
            this.marcador5.setTexture('evolucionActivado');
        }
        else if(numero === 4)
        {
            this.marcador1.setTexture('evolucionDesactivado');
            this.marcador2.setTexture('evolucionActivado');
            this.marcador3.setTexture('evolucionActivado');
            this.marcador4.setTexture('evolucionActivado');
            this.marcador5.setTexture('evolucionActivado');
        }
        else if(numero === 3)
        {   
            this.marcador1.setTexture('evolucionDesactivado');
            this.marcador2.setTexture('evolucionDesactivado');
            this.marcador3.setTexture('evolucionActivado');
            this.marcador4.setTexture('evolucionActivado');
            this.marcador5.setTexture('evolucionActivado');
        }
        else if (numero === 2)
        {   
            this.marcador1.setTexture('evolucionDesactivado');
            this.marcador2.setTexture('evolucionDesactivado'); 
            this.marcador3.setTexture('evolucionDesactivado');
            this.marcador4.setTexture('evolucionActivado');
            this.marcador5.setTexture('evolucionActivado');
        }
        else if(numero === 1)
        {  
            this.marcador1.setTexture('evolucionDesactivado');
            this.marcador2.setTexture('evolucionDesactivado');
            this.marcador3.setTexture('evolucionDesactivado');
            this.marcador4.setTexture('evolucionDesactivado');
            this.marcador5.setTexture('evolucionActivado');
        }
        else if (numero === 0)
        {
            this.marcador1.setTexture('evolucionDesactivado');
            this.marcador2.setTexture('evolucionDesactivado');
            this.marcador3.setTexture('evolucionDesactivado');
            this.marcador4.setTexture('evolucionDesactivado');
            this.marcador5.setTexture('evolucionDesactivado');
        }
    }
}