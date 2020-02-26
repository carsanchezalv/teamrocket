export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
   //   this.load.image("logo", "assets/favicon.png")
        this.load.image("fondo", "portada.png")
   //     this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
   //     this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
   //     this.load.audio("musica_inicio", [
  //          "assets/audio/bgm/menu_background.ogg",
   //         "assets/audio/bgm/menu_background.mp3"
   //     ]);
  }

  create() {
    this.add.image(400, 300, "fondo");
  }
  update(time, delta) {    
  }
}
