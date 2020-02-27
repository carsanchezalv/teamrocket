export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
   //   this.load.image("logo", "assets/favicon.png")
        this.load.image("fondo", "assets/textures/mapaportada.png")
   //     this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
   //     this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
       this.load.audio("musica_portada", [
            "assets/music/portada.ogg",
            "assets/music/portada.mp3"
        ]);
        this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 64, frameHeight: 64 });
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
    let music = this.sound.add('musica_portada', a_config);
    music.play();

    //Protagonista
    this.add.sprite(300, 200, 'protagonista');
    this.scene.anims.create({
      key: 'move',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 0, end: 4 }),
      frameRate: 2,
      repeat: -1
    })
  }
  update(time, delta) {    
  }
}
