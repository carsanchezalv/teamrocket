export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
   //   this.load.image("logo", "assets/favicon.png")
        this.load.image("fondo", "portada.png")
   //     this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
   //     this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
       this.load.audio("musica_portada", [
            "./assets/music/portada.ogg",
            "./assets/music/portada.mp3"
        ]);
  }

  create() {
    //Portada
    this.add.image(400, 300, "fondo");

    //Musica
    let a_config = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
  };
  let music = this.sound.add('medieval_m', a_config);
  music.play();
  }
  update(time, delta) {    
  }
}
