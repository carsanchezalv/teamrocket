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

        this.load.audio("musica_seleccion", [
          "assets/music/Select.ogg",
          "assets/music/Select.mp3"
        ]); 

        this.load.image('pantallaPause', 'assets/gamePause.png');
        this.load.image("activar musica", "assets/activarMusica.png");
        this.load.image("desactivar musica", "assets/desactivarMusica.png");
      }
    
      init(datos) {
          this.escena = datos.clave;
          this.protagonista = datos.pikachuData;
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
              seleccion.play();
              estaEscena.stop('gamePause');
              estaEscena.resume(nombre);
          })
        
        let silenciar = this.add.image( 280, 280, "desactivar musica").setDepth(1).setOrigin(0.5);

        if(data.musica)
          silenciar.setTexture("desactivar musica");
        else
          silenciar.setTexture("activar musica");

        silenciar.setInteractive();
        silenciar.on('pointerover', function (pointer) {
            silenciar.setScale(1.2);
        })
        silenciar.on('pointerout', function (pointer) {
            silenciar.setScale(1);
        })

        silenciar.on('pointerup', function (pointer) {
          if(data.musica)
          {
            music.stop();
            data.musica = false;
            silenciar.setTexture("activar musica");
          }
          else
          {
            music.play();
            data.musica = true;
            silenciar.setTexture("desactivar musica");
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
        let music = this.sound.add('musica_gamepause', config);
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
        
        this.nivel = "";
        if(data.nivel === 0.5)
          this.nivel = "Fácil";
        
        else if(data.nivel === 1)
          this.nivel = "Normal";
        
        else if(data.nivel === 1.5)
          this.nivel = "Difícil";

        this.add.text(610, 200, `Jugador: ${data.nombre} \n \n Puntuación: ${this.protagonista.puntuacion.toFixed()} \n \n Nivel: ${this.nivel}`,{
          fontSize: '33px',
          fontStyle: 'bold',
          fontFamily: 'ERAS demi ITC',
          fill: "purple",
          stroke: "white",
          strokeThickness: 5,
          align: 'center', 
        }).setScrollFactor(0);
      
      }
    
      update(time, delta) {
        
        
      }
    }