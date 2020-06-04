export default class Objetivo extends Phaser.Scene {
    constructor(scene) {
        
        super('Objetivo');
        this.scene = scene;

        this.marcador = scene.add.sprite(700, 180, 'marcador3');
        this.marcador.setTexture('marcador3');
        this.marcador.setScale(0.3);
        this.marcador.setDepth(60);
        this.marcador.setScrollFactor(0);
    }

    updateEvoluciones(numero) {
        if(numero === 3)
            this.marcador.setTexture('marcador3');
        
        else if (numero === 2)
            this.marcador.setTexture('marcador2');
        
        else if(numero === 1)
            this.marcador.setTexture('marcador1');
        
        else if (numero === 0)
            this.marcador.setTexture('marcador0');
    }
}