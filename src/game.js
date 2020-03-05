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
        this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
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
    this.pikachu = this.add.sprite(500, 200, 'protagonista');

    this.pikachu.orientation = "down";
  
    // Animacion movimientos
    this.anims.create({
      key: 'move_down',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 1, end: 2 }),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'move_right',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 7, end: 8 }),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'move_up',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 13, end: 14 }),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'move_upright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 10, end: 11 }),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'move_downright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 4, end: 5 }),
      frameRate: 2,
      repeat: -1
    });

  // Animacion ataque
    this.anims.create({
      key: 'attack_down',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 32, end: 34 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'attack_right',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 40, end: 42 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'attack_up',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 48, end: 50 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'attack_upright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 44, end: 46 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'attack_downright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 36, end: 38 }),
      frameRate: 2,
      repeat: 0
    });

  // Animacion evolucion 
    this.anims.create({
      key: 'evolve',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 52, end: 54 }),
      frameRate: 2,
      repeat: 0
    });

  // Animaciones daño
    this.anims.create({
      key: 'damage_down',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 17, end: 17 }),
      frameRate: 2,
      repeat: 0
    }); 

    this.anims.create({
      key: 'damage_downright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 18, end: 18 }),
      frameRate: 2,
      repeat: 0
    });
    this.anims.create({
      key: 'damage_right',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 19, end: 19 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'damage_upright',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 20, end: 20 }),
      frameRate: 2,
      repeat: 0
    });

    this.anims.create({
      key: 'damage_up',
      frames: this.anims.generateFrameNumbers('protagonista', { start: 21, end: 21 }),
      frameRate: 2,
      repeat: 0
    });

    this.cursor = this.input.keyboard.createCursorKeys();

    // Fisicas
    // this.physics.add.collider(this.pikachu, this.izquierda, this.muro, null);
// this.physics.add.collider(this.pikachu, this.derecha, this.muro, null);
  }

  

  update(time, delta) {

    if(this.cursor.space.isDown)
    {
      if(this.pikachu.orientation === "down")
      {  
        this.pikachu.anims.play("attack_down", true);
      }
      else if(this.pikachu.orientation === "right")
      {
        this.pikachu.flipX = false;
        this.pikachu.anims.play("attack_right", true);
      }
      else if(this.pikachu.orientation === "up")
      {
        this.pikachu.anims.play("attack_up", true);
      }
      else if(this.pikachu.orientation === "left")
      {
        this.pikachu.flipX = true;
        this.pikachu.anims.play("attack_right", true);
      }
      else if(this.pikachu.orientation === "upright")
      {
        this.pikachu.flipX = false;
        this.pikachu.anims.play("attack_upright", true);
      }
      else if(this.pikachu.orientation === "upleft")
      {
        this.pikachu.flipX = true;
        this.pikachu.anims.play("attack_upright", true);
      }
      else if(this.pikachu.orientation === "downright")
      {
        this.pikachu.flipX = false;
        this.pikachu.anims.play("attack_downright", true);
      }
      else if(this.pikachu.orientation === "downleft")
      {
        this.pikachu.flipX = true;
        this.pikachu.anims.play("attack_downright", true);
      }
    }
    else if(this.cursor.up.isDown && this.cursor.right.isDown)
    {
      this.pikachu.x++;
      this.pikachu.y--;
      this.pikachu.orientation = "upright";
      this.pikachu.flipX = false;
      this.pikachu.anims.play("move_upright", true);
    }
    else if(this.cursor.up.isDown && this.cursor.left.isDown)
    {
      this.pikachu.x--;
      this.pikachu.y--;
      this.pikachu.orientation = "upleft";
      this.pikachu.flipX = true;
      this.pikachu.anims.play("move_upright", true);
    }
    else if(this.cursor.down.isDown && this.cursor.right.isDown)
    {
      this.pikachu.x++;
      this.pikachu.y++;
      this.pikachu.orientation = "downright";
      this.pikachu.flipX = false;
      this.pikachu.anims.play("move_downright", true);
    }
    else if(this.cursor.down.isDown && this.cursor.left.isDown)
    {
      this.pikachu.x--;
      this.pikachu.y++;
      this.pikachu.orientation = "downleft";
      this.pikachu.flipX = true;
      this.pikachu.anims.play("move_downright", true);
    }
    else if(this.cursor.right.isDown)
    {
      this.pikachu.x++;
      this.pikachu.orientation = "right";
      this.pikachu.flipX = false;
      this.pikachu.anims.play("move_right", true);
    }
    else if(this.cursor.left.isDown)
    {
      this.pikachu.x--;
      this.pikachu.orientation = "left";
      this.pikachu.flipX = true;
      this.pikachu.anims.play("move_right", true);
    }
    else if(this.cursor.up.isDown)
    {
      this.pikachu.y--;
      this.pikachu.orientation = "up";
      this.pikachu.anims.play("move_up", true)
    }
    else if(this.cursor.down.isDown)
    {
      this.pikachu.y++;
      this.pikachu.orientation = "down";
      this.pikachu.anims.play("move_down", true);
    }
  }
}