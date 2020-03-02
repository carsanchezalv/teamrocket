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
<<<<<<< HEAD
        this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 50, frameHeight: 40 });
=======
        this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 10, frameHeight: 8 });
>>>>>>> 6f3cd8977a20d952dcf6f2afd3907592dd4dc44b
  }

  create() {
    //Portada
   
    this.add.image(700, 400, "fondo");

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
    this.pikachu = this.add.sprite(500, 200, 'protagonista');
    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 0, end: 4 }),
      frameRate: 2,
      repeat: -1
    });
    this.pikachu.anims.play("move");
  }
  update(time, delta) {    
  }
}
