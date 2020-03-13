export default class Player {
    constructor(scene, x, y) {
        //Protagonista 
        this.scene = scene;
        this.orientation = "down";
        this.animation = "move_down";
        const anims = scene.anims;
        this.x = x;
        this.y = y;
        
        // Animacion movimientos
        anims.create({
            key: 'move_down',
            frames: anims.generateFrameNumbers('protagonista', { start: 1, end: 2 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'move_right',
            frames: anims.generateFrameNumbers('protagonista', { start: 7, end: 8 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'move_up',
            frames: anims.generateFrameNumbers('protagonista', { start: 13, end: 14 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'move_upright',
            frames: anims.generateFrameNumbers('protagonista', { start: 10, end: 11 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'move_downright',
            frames: anims.generateFrameNumbers('protagonista', { start: 4, end: 5 }),
            frameRate: 2,
            repeat: 0
        });

    // Animacion ataque
        anims.create({
            key: 'attack_down',
            frames: anims.generateFrameNumbers('protagonista', { start: 32, end: 34 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'attack_right',
            frames: anims.generateFrameNumbers('protagonista', { start: 40, end: 42 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'attack_up',
            frames: anims.generateFrameNumbers('protagonista', { start: 48, end: 50 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'attack_upright',
            frames: anims.generateFrameNumbers('protagonista', { start: 44, end: 46 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'attack_downright',
            frames: anims.generateFrameNumbers('protagonista', { start: 36, end: 38 }),
            frameRate: 2,
            repeat: 0
        });

    // Animacion evolucion 
        anims.create({
            key: 'evolve',
            frames: anims.generateFrameNumbers('protagonista', { start: 52, end: 54 }),
            frameRate: 2,
            repeat: 0
        });

    // Animaciones daño
        anims.create({
            key: 'damage_down',
            frames: anims.generateFrameNumbers('protagonista', { start: 17, end: 17 }),
            frameRate: 2,
            repeat: 0
        }); 

        anims.create({
            key: 'damage_downright',
            frames: anims.generateFrameNumbers('protagonista', { start: 18, end: 18 }),
            frameRate: 2,
            repeat: 0
        });
        anims.create({
            key: 'damage_right',
            frames: anims.generateFrameNumbers('protagonista', { start: 19, end: 19 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'damage_upright',
            frames: anims.generateFrameNumbers('protagonista', { start: 20, end: 20 }),
            frameRate: 2,
            repeat: 0
        });

        anims.create({
            key: 'damage_up',
            frames: anims.generateFrameNumbers('protagonista', { start: 21, end: 21 }),
            frameRate: 2,
            repeat: 0
        });
        this.cursor = scene.input.keyboard.createCursorKeys();
/*
        this.sprite = scene.physics.add
            .sprite(x, y, null, 0)
            .setSize(0, 0)
            .setOffset(0, 0);

        this.sprite.anims.play(this.animation);
*/
    }

update() {
    const cursor = this.cursor;
 //   const sprite = this.sprite;
    const velocidad = 1;
    let body = this.body;
    
    let scene = this.scene;

    if(cursor.space.isDown)
    {
      if(this.orientation === "down")
      {  
        this.animation = "attack_down";
        body.anims.play(this.animation, true);
    //    sprite.anims.play(this.animation, true);
   //     this.anims.play("attack_down", true);
      }
      else if(this.orientation === "right")
      {
        this.animation = "attack_right";
        
        body.flipX = false;
        body.anims.play(this.animation, true);
   //     this.anims.play("attack_right", true);
      }
      else if(this.orientation === "up")
      {
        this.animation = "attack_up";
        body.anims.play(this.animation, true);
   //     this.anims.play("attack_up", true);
      }
      else if(this.orientation === "left")
      {
        this.animation = "attack_right";
        body.flipX = true;
        body.anims.play(this.animation, true);
   //     this.anims.play("attack_right", true);
      }
      else if(this.orientation === "upright")
      {
        this.animation = "attack_upright";
        body.flipX = false;
        body.anims.play(this.animation, true);
    //    this.anims.play("attack_upright", true);
      }
      else if(this.orientation === "upleft")
      {
        this.animation = "attack_upright";
        body.flipX = true;
        body.anims.play(this.animation, true);
    //    this.anims.play("attack_upright", true);
      }
      else if(this.orientation === "downright")
      {
        this.animation = "attack_downright";
        body.flipX = false;
        body.anims.play(this.animation, true);
    //    this.anims.play("attack_downright", true);
      }
      else if(this.orientation === "downleft")
      {
        this.animation = "attack_downright";
        body.flipX = true;
        body.anims.play(this.animation, true);
    //    this.anims.play("attack_downright", true);
      }
    }
    else if(cursor.up.isDown && cursor.right.isDown)
    {
      body.x++;
      body.y--;
      this.orientation = "upright";
      body.flipX = false;
      this.animation = "move_upright";
      body.anims.play(this.animation, true);
    //  this.anims.play("move_upright", true);
    }
    else if(cursor.up.isDown && cursor.left.isDown)
    {
      body.x--;
      body.y--;
      this.orientation = "upleft";
      body.flipX = true;
      this.animation = "move_upright";
      body.anims.play(this.animation, true);
    //  this.anims.play("move_upright", true);
    }
    else if(cursor.down.isDown && cursor.right.isDown)
    {
      body.x++;
      body.
      body.y++;
      this.orientation = "downright";
      body.flipX = false;
      this.animation = "move_downright";
      body.anims.play(this.animation, true);
    //  this.anims.play("move_downright", true);
    }
    else if(cursor.down.isDown && cursor.left.isDown)
    {
      body.x--;
      body.y++;
      this.orientation = "downleft";
      body.flipX = true;
      this.animation = "move_downright";
      body.anims.play(this.animation, true);
   //   this.anims.play("move_downright", true);
    }
    else if(cursor.right.isDown)
    {
      body.x++;
      this.orientation = "right";
      body.flipX = false;
      this.animation = "move_right";
      body.anims.play(this.animation, true);
   //   this.anims.play("move_right", true);
    }
    else if(cursor.left.isDown)
    {
      body.x--;
      this.orientation = "left";
      body.flipX = true;
      this.animation = "move_right";
      body.anims.play(this.animation, true);
    //  this.anims.play("move_right", true);
    }
    else if(cursor.up.isDown)
    {
      body.y--;
      this.orientation = "up";
      this.animation = "move_up";
      body.anims.play(this.animation, true);
   //   this.anims.play("move_up", true)
    }
    else if(cursor.down.isDown)
    {
      this.y++;
      this.orientation = "down";
      this.animation = "move_down";
   //   this.anims.play("move_down", true);
      scene.anims.play(this.animation, true);
    }
  }
}