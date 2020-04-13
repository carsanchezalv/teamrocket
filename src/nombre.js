import {data} from "./data.js";
export default class Nombre extends Phaser.Scene {
    constructor() {
        super({ key: 'nombre' });
    }

    preload() {
        data.nombre = prompt("Introduce tu nombre");
    }

    create () {
        this.scene.start("menu");
    }
}