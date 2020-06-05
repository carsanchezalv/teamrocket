import { data } from "./data.js";
export default class GameWin extends Phaser.Scene {
  constructor() {
    super({ key: 'gameWin' });
  }

  preload() {  
    
    this.load.audio("musica_gameover", [
      "assets/music/GameOver.ogg",
      "assets/music/GameOver.mp3"
    ]); 
    this.load.image('pantallaWin', 'assets/gameWin.png');
   
  }

  create() {

    this.pantalla = this.add.sprite(600, 310, 'pantallaWin');
    this.pantalla.setTexture('pantallawin');
    this.pantalla.setScrollFactor(0);

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
      this.music = this.sound.add('musica_gameover', config);
    if(data.musica) {
      this.music.play();
    } 
  }

  update(time, delta) {
    
    this.add.text(300, 170, `Player: ${data.nombre}, 'Tu puntacion: ${data.puntos}`,{
      //font: "../fonts/AGENCYR.TTF",
      fill: "#8A2BE2",
      fontSize: '20px',
      //padding: { x: 5, y: 3 },s
      stroke: "#00FF89",
      //backgroundColor: "#FFFFFF"
      //backgroundImage: this.fondo,
    }).setScrollFactor(0);
  
    
  }
}