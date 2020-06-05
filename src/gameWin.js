import { data } from "./data.js";
export default class GameWin extends Phaser.Scene {
  constructor() {
    super({ key: 'gameWin' });
  }

  preload() {  
    
    this.load.audio("musica_gameWin", [
      "assets/music/GameWin.ogg",
      "assets/music/GameWin.mp3"
    ]); 
    this.load.image('pantallaWin', 'assets/gameWin.png');
   
  }

  init(datos) {
    this.protagonista = datos.pikachuData;
}

  create() {

    this.pantalla = this.add.sprite(600, 310, 'pantallaWin');
    this.pantalla.setTexture('pantallaWin');
    this.pantalla.setScrollFactor(0);

    this.nivel = "";
    if(data.nivel === 0.5)
      this.nivel = "Fácil";
    
    else if(data.nivel === 1)
      this.nivel = "Normal";
    
    else if(data.nivel === 1.5)
      this.nivel = "Difícil";

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
      this.music = this.sound.add('musica_gameWin', config);
    if(data.musica) {
      this.music.play();
    }

    this.add.text(500, 100, `Jugador: ${data.nombre} \n Tu puntuación: ${this.protagonista.puntuacion} \n Nivel: ${this.nivel}`,{
      fontSize: '45px',
      fontStyle: 'bold',
      fontFamily: 'ERAS demi ITC',
      fill: "purple",
      stroke: "white",
      strokeThickness: 5,
      align: 'center', 
    }).setScrollFactor(0);
  
    this.add.text(330, 450, `Created by Carlos Sánchez & Joel García`,{
      fontSize: '35px',
      fontStyle: 'bold',
      fontFamily: 'ERAS demi ITC',
      fill: "purple",
      stroke: "white",
      strokeThickness: 4,
      align: 'center', 
    }).setScrollFactor(0);
  }

  update(time, delta) {
    
    
  }
}