import { data } from "./data.js";

export default class Instrucciones extends Phaser.Scene {
    constructor() {
      super({ key: 'instrucciones' });
    }
  
    preload() { 

      this.load.audio("musica_instrucciones", [
        "assets/music/Instrucciones.ogg",
        "assets/music/Instrucciones.mp3"
      ]);

      this.load.audio("musica_seleccion", [
        "assets/music/Select.ogg",
        "assets/music/Select.mp3"
      ]); 

      this.load.image('reglas', 'assets/reglas.png');
    }

    init(datos) {
        this.escena = datos.clave;
    }

    create() {
  
      this.pantalla = this.add.sprite(this.scale.width / 2 + 10, this.scale.height / 2, 'reglas');
      this.pantalla.setTexture('reglas');
      this.pantalla.setScale(0.7);
      this.pantalla.setScrollFactor(0);
      this.nombreEscena = this.escena;
      this.instrucciones = false;

      let skip = this.add.text(this.scale.width / 2, 430, 'Ir al juego', {

            fontSize: '30px',
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
            seleccion.play();
            estaEscena.stop('instrucciones');
            estaEscena.resume(nombre);
        })
      
        let instrucciones = this.add.text(this.scale.width / 2, 80, 'Instrucciones ampliadas', {

            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#CC95F6",
            stroke: "white",
            strokeThickness: 8,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);
        instrucciones.setInteractive();
        instrucciones.on('pointerover', function (pointer) {
            instrucciones.setScale(1.2);
        })
        instrucciones.on('pointerout', function (pointer) {
            instrucciones.setScale(1);
        })
        
        instrucciones.on('pointerup', function (pointer) {
            seleccion.play();
            
            if(!instrucciones)
            {
                this.pantalla.setTexture("instrucciones");
                this.instrucciones = true;
                instrucciones.setText("Tutorial básico");
            }
            else
            {
                this.pantalla.setTexture("reglas");
                this.instrucciones = false;
                instrucciones.setText("Instrucciones ampliadas");
            }
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
      let music = this.sound.add('musica_instrucciones', config);
      if(data.musica) 
        music.play();

      let configSeleccion = {
        mute: false,
        volume: 0.7,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
      };
      let seleccion = this.sound.add('musica_seleccion', configSeleccion);    
    }
  
    update(time, delta) {

    }
  }