import { data } from "./data.js";

export default class Pikachu extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'protagonista');

    //Protagonista 
    this.orientation = "down";
    this.animation = "move_down";

    this.setDepth(70);
    
    // Atributos
    this.vidaTotal = 100*5;
    this.vida = this.vidaTotal/3;
    this.fuerza = 10;
    this.atacar = false;
    this.esHerido = false;
    this.velocidad = 50;
    this.inmune = false;
    this.puedeActuar = true;
    this.efecto = "";
    this.velX = 0;
    this.velY = 0;

    // Animacion movimientos
    this.scene.anims.create({
      key: 'move_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 1, end: 2 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 7, end: 8 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 13, end: 14 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 10, end: 11 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 4, end: 5 }),
      frameRate: 4,
      repeat: 0
    });

    // Animacion movimientos correr
    this.scene.anims.create({
      key: 'move_down_fast',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 1, end: 2 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_right_fast',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 7, end: 8 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_up_fast',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 13, end: 14 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_upright_fast',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 10, end: 11 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_downright_fast',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 4, end: 5 }),
      frameRate: 4*3,
      repeat: 0
    });

    // Animacion ataque
    this.scene.anims.create({
      key: 'attack_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 32, end: 34 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 40, end: 42 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 48, end: 50 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 44, end: 46 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 36, end: 38 }),
      frameRate: 4,
      repeat: 0
    });

    // Animacion evolucion 
    this.scene.anims.create({
      key: 'evolve',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 51, end: 54 }),
      frameRate: 4,
      repeat: 0
    });

    // Animaciones daño
    this.scene.anims.create({
      key: 'damage_down',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 17, end: 17 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_downright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 18, end: 18 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_right',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 19, end: 19 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_upright',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 20, end: 20 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_up',
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 21, end: 21 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.body.setSize(14, 15);
    this.body.offset.x = 17;
    this.body.offset.y = 24;

    this.play(this.animation, true);
    
    this.cursor = this.scene.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space',
      pause:'p',
      c:'c',
      r:'r',
      e:'e'
    });
  }

  actuar() {
    if (this.cursor.space.isDown && this.puedeActuar) {
     
      this.puedeActuar = false;
      this.atacar = true;
      if (this.orientation === "down") {
        this.animation = "attack_down";
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "right") {
        this.animation = "attack_right";

        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "up") {
        this.animation = "attack_up";
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "left") {
        this.animation = "attack_right";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "upright") {
        this.animation = "attack_upright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "upleft") {
        this.animation = "attack_upright";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "downright") {
        this.animation = "attack_downright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "downleft") {
        this.animation = "attack_downright";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }

      this.scene.time.addEvent({
        delay: 1000,
        callback: () => {
            this.puedeActuar = true;
        },
        loop: false
      });
    }
    else if(this.cursor.c.isDown && data.puntos > 0 && this.puedeActuar)
    {
      data.puntos--;
      if (this.cursor.up.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad*3;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upright";
        this.flipX = false;
        this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown && this.cursor.left.isDown) {
        this.velX = -this.velocidad*3;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upleft";
        this.flipX = true;
        this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad*3;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downright";
        this.flipX = false;
        this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.left.isDown) {
        
        this.velX = -this.velocidad*3;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downleft";
        this.flipX = true;
        this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.right.isDown) {
        
        this.velX = this.velocidad*3;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "right";
        this.flipX = false;
        this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.left.isDown) {
        this.velX = -this.velocidad*3;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "left";
        this.flipX = true;
        this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown) {
        this.velX = 0;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "up";
        this.animation = "move_up_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown) {
        this.velX = 0;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "down";
        this.animation = "move_down_fast";
        this.anims.play(this.animation, true);
      }
      else
        data.puntos++; // Se le devuelven los puntos
    }
    else if(this.puedeActuar)
    {
      if (this.cursor.up.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upright";
        this.flipX = false;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown && this.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upleft";
        this.flipX = true;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downright";
        this.flipX = false;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downleft";
        this.flipX = true;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "right";
        this.flipX = false;
        this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "left";
        this.flipX = true;
        this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown) {
        this.velX = 0;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "up";
        this.animation = "move_up";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown) {
        this.velX = 0;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "down";
        this.animation = "move_down";
        this.anims.play(this.animation, true);
      }
    }

    if(this.puedeActuar && (!this.cursor.c.isDown || data.puntos <= 0))
    {
      if (this.cursor.up.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upright";
        this.flipX = false;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown && this.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upleft";
        this.flipX = true;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downright";
        this.flipX = false;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downleft";
        this.flipX = true;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }

      else
      {
        if (this.cursor.right.isDown) {
          this.velX = this.velocidad;
          this.velY = 0;
          this.body.setVelocityX(this.velX);
          this.body.setVelocityY(this.velY);
          this.orientation = "right";
          this.flipX = false;
          this.animation = "move_right";
          this.anims.play(this.animation, true);
        }
        if (this.cursor.left.isDown) {
          this.velX = -this.velocidad;
          this.velY = 0;
          this.body.setVelocityX(this.velX);
          this.body.setVelocityY(this.velY);
          this.orientation = "left";
          this.flipX = true;
          this.animation = "move_right";
          this.anims.play(this.animation, true);
        }
        if (this.cursor.up.isDown) {
          this.velX = 0;
          this.velY = -this.velocidad;
          this.body.setVelocityX(this.velX);
          this.body.setVelocityY(this.velY);
          this.orientation = "up";
          this.animation = "move_up";
          this.anims.play(this.animation, true);
        }
        if (this.cursor.down.isDown) {
          this.velX = 0;
          this.velY = this.velocidad;
          this.body.setVelocityX(this.velX);
          this.body.setVelocityY(this.velY);
          this.orientation = "down";
          this.animation = "move_down";
          this.anims.play(this.animation, true);
        }
      }
    }
    if(this.cursor.r.isDown && this.puedeActuar) // Recupera vida
    {
      if(this.scene.puntuacion.nivel > 0 && this.vida <= this.vidaTotal/2) // Solo puede recuperar la vida si ha perdido la mitad y si puede gastar niveles
      {
        this.vida = this.vidaTotal;
        data.puntos -= 330;
      }
    }
    if(this.cursor.e.isDown && this.puedeActuar && this.scene.puntuacion.nivel > 4) // Evoluciona
    {
      
    }
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
    if(data.tiempoEfecto > 0)
    {
      data.tiempoEfecto--;
      if(data.tiempoEfecto === 0)
      {
        this.efecto = "";
        this.velocidad = 50;
        this.fuerza = 5;
        this.inmune = false;
      }
      else {
        switch(this.efecto)
        {
          case "veneno": // Piramide morada. Te resta vida durante un tiempo
            if(this.vida > 1)
            {
              this.vida--;
              this.esHerido = true;
            }  
          break;

          case "ralentizar": // Pegamento. Te disminuye la velocidad poco a poco.
            if(this.velocidad > 0)
              this.velocidad--;
          break;
        }
      }
    }  
    
    if(this.vida > 0) // && this.puedeActuar)
    {
      const cursor = this.cursor;
      
      this.velX = 0;
      this.velY = 0;
      this.body.setVelocityX(this.velX);
      this.body.setVelocityY(this.velY);
      
      this.actuar();
      
      if(this.esHerido && !this.atacar && this.puedeActuar)
      {
        this.puedeActuar = false;
        switch(this.orientation)
        {
          case "up": 
              this.flipX = false;
              this.animation = 'damage_up';
              break;
          case "upright":
              this.flipX = false;
              this.animation = 'damage_upright';
              break;
          case "upleft":
              this.flipX = true;
              this.animation = 'damage_upright';
              break;
          case "down":
              this.flipX = false;
              this.animation = 'damage_down';
              break;
          case "downright":
              this.flipX = false;
              this.animation = 'damage_downright';
              break;
          case "downleft":
              this.flipX = true;
              this.animation = 'damage_downright';
              break;
          case "right":
              this.flipX = false;
              this.animation = 'damage_right';
              break;
          case "left":
              this.flipX = true;
              this.animation = 'damage_right';
              break;
            
        }
        this.scene.animacionHerido = true;
        this.timer = this.scene.time.addEvent({
            delay: 500,
            callback: () => {
                this.puedeActuar = true;
            },
            loop: false
        });
        this.anims.play(this.animation, true);
      }
      
     this.esHerido = false;
    }
    else if(this.vida === 0)
    {
      this.esHerido = false;
      this.destroy();
    }  
  }
}