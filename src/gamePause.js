import { data } from "./data.js";

export default class GamePause extends Phaser.Scene {
    constructor() {
      super({ key: 'gamePause' });
    }
  
    preload() { 

      this.load.audio("musica_gamepause", [
        "assets/music/GamePause.ogg",
        "assets/music/GamePause.mp3"
      ]); 

      this.load.image('pantallaPause', 'assets/gamePause.png');
    }
  
    init(datos){
        this.escena = datos.clave;
    }

    create() {
  
      this.pantalla = this.add.sprite(this.scale.width / 2, this.scale.height / 2 + 25, 'pantallaPause');
      this.pantalla.setTexture('pantallaPause');
      this.pantalla.setScrollFactor(0);
      this.nombreEscena = this.escena;

      let skip = this.add.text( this.scale.width / 2 - 10, this.scale.height - 80, 'Reanudar', {

            fontSize: '45px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#CC95F6",
            stroke: "white",
            strokeThickness: 8,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);
        skip.setInteractive();
        skip.on('pointerover', function (pointer) {
            skip.setScale(1.2);
        })
        skip.on('pointerout', function (pointer) {
            skip.setScale(1);
        })
        let nombre = this.escena; // key de la escena de la que vengo
        let estaEscena = this.scene;
        skip.on('pointerup', function (pointer) {
            music.stop();
            estaEscena.stop('gamePause');
            estaEscena.resume(nombre);
        })
     
        // Música
        let config = {
          mute: false,
          volume: 0.5,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0
        };
        let music = this.sound.add('musica_gamepause', config);
      if(data.musica) {
        music.play();
      } 
    }
  
    update(time, delta) {
      
      
    }
  }