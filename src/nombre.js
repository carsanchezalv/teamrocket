
export default class Nombre extends Phaser.Scene {
    constructor() {
        super({ key: 'nombre' });
    }

    preload() {
        let nombre = prompt("Introduce tu nombre");
    }

    create () {
        this.scene.start("menu");
    }
}