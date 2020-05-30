
export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'gameOver' });
  }

  preload() {  
    /*
    this.load.audio("musica_planta", [
      "assets/music/Bosque.ogg",
      "assets/music/Bosque.mp3"
    ]); */
    this.load.image('pantallaGO', 'assets/gameOver.png');
   
  }

  create() {

    this.pantalla = this.add.sprite(512, 280, 'pantallaGO');
    this.pantalla.setTexture('pantallaGO');
    this.pantalla.setScrollFactor(0);
    
    
   
    
    
    /*
    // Música
    if(data.musica) {
      let config = {
        mute: false,
        volume: 0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
      };
      this.music = this.sound.add('musica_planta', config);
      this.music.play();
    } */
  }

  update(time, delta) {
    
    
  }
}