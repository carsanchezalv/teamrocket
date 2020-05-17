export default class Puntuacion extends Phaser.Scene {
    constructor(scene) {
        super({ key: 'Puntuacion' });
        this.score = scene.add.sprite(305, 150, 'puntosPrueba');
        this.score.setDepth(20);
        this.score.setTexture('puntosPrueba');
        this.score.setScrollFactor(0);
    }

    updatePuntos(puntos) {
        /*
        if (puntos === 3) {
            this.hud.setTexture('vida3');
        }
        else if (puntos === 2) {
            this.hud.setTexture('vida2')
        }
        else if (puntos === 1) {
            this.hud.setTexture('vida1')
        }
        else if (puntos <= 0) {
            this.hud.setTexture('vida0')
        }
        */
    }
}