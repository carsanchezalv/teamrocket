import { data } from "./data.js";

export default class Pikachu extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'protagonista');

    //Protagonista 
    this.orientation = "down";
    this.animation = "move_down";

    // Atributos
    this.vidaTotal = 200;
    this.vida = this.vidaTotal;
    this.fuerza = 5;
    this.atacar = false;
    this.esHerido = false;
    this.velocidad = 50;
    this.inmune = false;
    
    this.efecto = "";

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
      frames: this.scene.anims.generateFrameNumbers('protagonista', { start: 52, end: 54 }),
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

    this.body.setSize(14, 10);
    this.body.offset.x = 16;
    this.body.offset.y = 27;

    this.play(this.animation, true);
    this.cursor = this.scene.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space',
      control:'ctrl'
    });
  }

  actuar() {
    if (this.cursor.space.isDown) {
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
    }
    else if(this.cursor.control.isDown && data.puntos > 0)
    {
      data.puntos--;
      if (this.cursor.up.isDown && this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad*3);
        this.body.setVelocityY(-this.velocidad*3);
        this.orientation = "upright";
        this.flipX = false;
        this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown && this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad*3);
        this.body.setVelocityY(-this.velocidad*3);
        this.orientation = "upleft";
        this.flipX = true;
        this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad*3);
        this.body.setVelocityY(this.velocidad*3);
        this.orientation = "downright";
        this.flipX = false;
        this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad*3);
        this.body.setVelocityY(this.velocidad*3);
        this.orientation = "downleft";
        this.flipX = true;
        this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad*3);
        this.body.setVelocityY(0);
        this.orientation = "right";
        this.flipX = false;
        this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad*3);
        this.body.setVelocityY(0);
        this.orientation = "left";
        this.flipX = true;
        this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown) {
        this.body.setVelocityX(0);
        this.body.setVelocityY(-this.velocidad*3);
        this.orientation = "up";
        this.animation = "move_up_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown) {
        this.body.setVelocityX(0);
        this.body.setVelocityY(this.velocidad*3);
        this.orientation = "down";
        this.animation = "move_down_fast";
        this.anims.play(this.animation, true);
      }
      else
        data.puntos++; // Se le devuelven los puntos
    }
    else
    {
      if (this.cursor.up.isDown && this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad);
        this.body.setVelocityY(-this.velocidad);
        this.orientation = "upright";
        this.flipX = false;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown && this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad);
        this.body.setVelocityY(-this.velocidad);
        this.orientation = "upleft";
        this.flipX = true;
        this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad);
        this.body.setVelocityY(this.velocidad);
        this.orientation = "downright";
        this.flipX = false;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown && this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad);
        this.body.setVelocityY(this.velocidad);
        this.orientation = "downleft";
        this.flipX = true;
        this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.right.isDown) {
        this.body.setVelocityX(this.velocidad);
        this.body.setVelocityY(0);
        this.orientation = "right";
        this.flipX = false;
        this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.left.isDown) {
        this.body.setVelocityX(-this.velocidad);
        this.body.setVelocityY(0);
        this.orientation = "left";
        this.flipX = true;
        this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.up.isDown) {
        this.body.setVelocityX(0);
        this.body.setVelocityY(-this.velocidad);
        this.orientation = "up";
        this.animation = "move_up";
        this.anims.play(this.animation, true);
      }
      else if (this.cursor.down.isDown) {
        this.body.setVelocityX(0);
        this.body.setVelocityY(this.velocidad);
        this.orientation = "down";
        this.animation = "move_down";
        this.anims.play(this.animation, true);
      }
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
              this.vida--;
          break;

          case "ralentizar": // Pegamento. Te disminuye la velocidad poco a poco.
            if(this.velocidad > 0)
              this.velocidad--;
          break;



          case "frenar": // Flecha roja. Te divide la velocidad entre 2 de golpe
          break;

          case "parar": // Cruz. Velocidad a 0
          break;

          case "marear": // Remolino. Invierte tus movimientos
          break;
          
          case "teletransportar": // Interrogacion. Te manda a donde sea
          break;

          case "curar": // Joya morada. Te recupera la vida
          break;

          case "minero": // Flecha morada abajo izquierda. Las gemas duplican su valor
          break;

          case "puntosperdidos": // Alcantarilla. Puntos a 0
          break;

          case "masfuerza": // Piramide roja cuadrada. Te duplica la fuerza
          break;

          case "menosfuerza": // Piramide roja pequeña. Te divide entre 2 la fuerza
          break;

          case "puntosrandom": // Ventilador. Te da o quita puntos aleatoriamente
          break;

          case "inmune": // Nido. Eres inmune
          break;
        }
      }
    }  
    
    if(this.vida > 0)
    {
      const cursor = this.cursor;

      this.body.setVelocityX(0);
      this.body.setVelocityY(0);
      
      this.actuar();
      
      if(this.esHerido && !this.atacar)
      {
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
        this.anims.play(this.animation, true);
      }
     
      this.esHerido = false;
   //   this.atacar = false;
    }
    else if(this.vida === 0)
    {
      this.destroy();
    }
  }
}