export default class Objetivo extends Phaser.Scene {
    constructor(scene) {
        
        super('Objetivo');
        this.scene = scene;

        this.marcador = scene.add.sprite(290, 190, 'marcador3');
        this.marcador.setTexture('marcador3');
        this.marcador.setScale(1);
        this.marcador.setDepth(60);
        this.marcador.setScrollFactor(0);
    }

    updateEvoluciones(numero) {
        if(numero === 3)
            this.marcador.setTexture('snorlaxActivado');
        
        else if (numero === 2)
            this.marcador.setTexture('snorlaxDesactivado');
        
        else if(numero === 1)
            this.marcador.setTexture('articunoActivado');
        
        else if (numero === 0)
            this.marcador.setTexture('articunoDesactivado');
    }
}