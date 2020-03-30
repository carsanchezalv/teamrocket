export default class Pikachu extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'phaser');

    //Protagonista 
    let orientation = "down";
    this.animation = "move_down";

    // Animacion movimientos
    this.scene.anims.create({
      key: 'move_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 1, end: 2 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 7, end: 8 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 13, end: 14 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 10, end: 11 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 4, end: 5 }),
      frameRate: 2,
      repeat: 0
    });

// Animacion ataque
    this.scene.anims.create({
      key: 'attack_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 32, end: 34 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 40, end: 42 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 48, end: 50 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 44, end: 46 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 36, end: 38 }),
      frameRate: 2,
      repeat: 0
    });

// Animacion evolucion 
    this.scene.anims.create({
      key: 'evolve',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 52, end: 54 }),
      frameRate: 2,
      repeat: 0
    });

// Animaciones daño
   this.scene.anims.create({
      key: 'damage_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 17, end: 17 }),
      frameRate: 2,
      repeat: 0
    }); 

    this.scene.anims.create({
      key: 'damage_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 18, end: 18 }),
      frameRate: 2,
      repeat: 0
    });
    this.scene.anims.create({
      key: 'damage_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 19, end: 19 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 20, end: 20 }),
      frameRate: 2,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 21, end: 21 }),
      frameRate: 2,
      repeat: 0
    });
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.play(this.animation, true);
    this.cursor = this.scene.input.keyboard.createCursorKeys();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt); 
    const cursor = this.cursor;

    const velocidad = 1;
    
    let scene = this.scene;

    if(this.cursor.space.isDown)
    {
      if(this.orientation === "down")
      {  
        this.animation = "attack_down";
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "right")
      {
        this.animation = "attack_right";
        
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "up")
      {
        this.animation = "attack_up";
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "left")
      {
        this.animation = "attack_right";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "upright")
      {
        this.animation = "attack_upright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "upleft")
      {
        this.animation = "attack_upright";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "downright")
      {
        this.animation = "attack_downright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if(this.orientation === "downleft")
      {
        this.animation = "attack_downright";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
    }
    else if(cursor.up.isDown && cursor.right.isDown)
    {
      this.x++;
      this.y--;
      this.orientation = "upright";
      this.flipX = false;
      this.animation = "move_upright";
      this.anims.play(this.animation, true);
    }
    else if(cursor.up.isDown && cursor.left.isDown)
    {
      this.x--;
      this.y--;
      this.orientation = "upleft";
      this.flipX = true;
      this.animation = "move_upright";
      this.anims.play(this.animation, true);
    }
    else if(cursor.down.isDown && cursor.right.isDown)
    {
      this.x++;
      this.y++;
      this.orientation = "downright";
      this.flipX = false;
      this.animation = "move_downright";
      this.anims.play(this.animation, true);
    }
    else if(cursor.down.isDown && cursor.left.isDown)
    {
      this.x--;
      this.y++;
      this.orientation = "downleft";
      this.flipX = true;
      this.animation = "move_downright";
      this.anims.play(this.animation, true);
    }
    else if(cursor.right.isDown)
    {
      this.x++;
      this.orientation = "right";
      this.flipX = false;
      this.animation = "move_right";
      this.anims.play(this.animation, true);
    }
    else if(cursor.left.isDown)
    {
      this.x--;
      this.orientation = "left";
      this.flipX = true;
      this.animation = "move_right";
      this.anims.play(this.animation, true);
    }
    else if(cursor.up.isDown)
    {
      this.y--;
      this.orientation = "up";
      this.animation = "move_up";
      this.anims.play(this.animation, true);
    }
    else if(cursor.down.isDown)
    {
      this.y++;
      this.orientation = "down";
      this.animation = "move_down";
      this.anims.play(this.animation, true);
    }
  }
}