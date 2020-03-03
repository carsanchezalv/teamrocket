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
        this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 50, frameHeight: 40 });
  }

  create() {
    //Portada
   
    this.add.image(700, 400, "fondo");

    //Musica
    let config = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    let music = this.sound.add('musica_portada', config);
    music.play();

    //Protagonista
    let teclaDerecha;

    this.pikachu = this.add.sprite(500, 200, 'protagonista');
    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 0, end: 2 }),
      frameRate: 2,
      repeat: -1
    });
    this.pikachu.anims.play("move");

    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor);

    // Fisicas
    
  }
  update(time, delta) {
    if(this.cursor.up.isDown && this.cursor.right.isDown)
    {
      this.pikachu.x++;
      this.pikachu.y--;
    }
    else if(this.cursor.up.isDown && this.cursor.left.isDown)
    {
      this.pikachu.x--;
      this.pikachu.y--;
    }
    else if(this.cursor.down.isDown && this.cursor.right.isDown)
    {
      this.pikachu.x++;
      this.pikachu.y++;
    }
    else if(this.cursor.down.isDown && this.cursor.left.isDown)
    {
      this.pikachu.x--;
      this.pikachu.y++;
    }
    else if(this.cursor.right.isDown)
    {
      this.pikachu.x++;
    }
    else if(this.cursor.left.isDown)
    {
      this.pikachu.x--;
    }
    else if(this.cursor.up.isDown)
    {
      this.pikachu.y--;
    }
    else if(this.cursor.down.isDown)
    {
      this.pikachu.y++;
    }
  }
}

