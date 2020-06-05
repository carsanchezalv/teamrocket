import {data} from "./data.js";
export default class Nombre extends Phaser.Scene {
    constructor() {
        super({ key: 'nombre' });
    }

    preload() {
        data.nombre = prompt("¿Cómo te llamas?", "Player");
        if(data.nombre == null)
            data.nombre = "Anónimo";
    }

    create () {
        this.scene.start("menu");
    }
}