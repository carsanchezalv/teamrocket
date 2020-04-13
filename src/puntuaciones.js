export default class Puntuaciones extends Phaser.Scene {
    constructor() {
        super({ key: 'puntuaciones' });
    }
    preload() {

    }
    create() {  
        this.scene.start("game");
    }
}