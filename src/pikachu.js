import { data } from "./data.js";

import Mensaje from './mensajes/mensaje.js';

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
    this.evoluciones = 3;
    this.puntuacion = 4000;
    this.tiempoEfecto = 0;
    this.bonusGemas = 1;
    this.esRaichu = false;
    this.evolucionAgotada = false;
    this.haVuelto = false;
    this.snorlax = false;
    this.articuno = false;
    this.zapdos = false;
    this.moltres = false;
    this.metwo = false;
    this.jefesIslasRestantes = 4;
    this.nivelRequerido = 2;

    let musicaEvolucionConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    this.musicaEvolucion = this.scene.sound.add("musicaEvolucion", musicaEvolucionConfig);

    let musicaAtaqueConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    this.musicaAtaque = this.scene.sound.add("musicaAtaque", musicaAtaqueConfig);

    let musicaDamageConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    this.musicaDamage = this.scene.sound.add("musicaDamage", musicaDamageConfig);
    
    let musicaRecuperarseConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    this.musicaRecuperarse = this.scene.sound.add("musicaRecuperarse", musicaRecuperarseConfig);

    this.crearAnimaciones();

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.body.setSize(14, 15);
    this.body.offset.x = 17;
    this.body.offset.y = 24;

    this.play(this.animation, true);
  }

  crearAnimaciones()
  {
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
      repeat: -1
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


    // Animaciones Raichu evolución
    // Animacion movimientos
    this.scene.anims.create({
      key: 'move_down_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 1, end: 2 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_right_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 7, end: 8 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_up_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 13, end: 14 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_upright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 10, end: 11 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_downright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 4, end: 5 }),
      frameRate: 4,
      repeat: 0
    });

    // Animacion movimientos correr
    this.scene.anims.create({
      key: 'move_down_fast_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 1, end: 2 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_right_fast_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 7, end: 8 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_up_fast_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 13, end: 14 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_upright_fast_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 10, end: 11 }),
      frameRate: 4*3,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'move_downright_fast_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 4, end: 5 }),
      frameRate: 4*3,
      repeat: 0
    });

    // Animacion ataque
    this.scene.anims.create({
      key: 'attack_down_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 46, end: 48 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_right_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 52, end: 54 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_up_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 58, end: 60 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_upright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 55, end: 57 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'attack_downright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 49, end: 51 }),
      frameRate: 4,
      repeat: 0
    });

    // Animaciones daño
    this.scene.anims.create({
      key: 'damage_down_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 26, end: 26 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_downright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 27, end: 27 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_right_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 28, end: 28 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_upright_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 29, end: 29 }),
      frameRate: 4,
      repeat: 0
    });

    this.scene.anims.create({
      key: 'damage_up_raichu',
      frames: this.scene.anims.generateFrameNumbers('protagonista_raichu', { start: 30, end: 30 }),
      frameRate: 4,
      repeat: 0
    });
  }

  actuar() {
    if (this.scene.cursor.space.isDown && this.puedeActuar) {
      
      this.musicaAtaque.play();
      this.puedeActuar = false;
      this.atacar = true;
      if (this.orientation === "down") {

        if(this.esRaichu)
          this.animation = "attack_down_raichu";
        else
          this.animation = "attack_down";
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "right") {
        
        if(this.esRaichu)
          this.animation = "attack_right_raichu";
        else
          this.animation = "attack_right";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "up") {
        
        if(this.esRaichu)
          this.animation = "attack_up_raichu";
        else
          this.animation = "attack_up";
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "left") {
        
        if(this.esRaichu)
          this.animation = "attack_right_raichu";
        else
          this.animation = "attack_right";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "upright") {
        
        if(this.esRaichu)
          this.animation = "attack_upright_raichu";
        else
          this.animation = "attack_upright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "upleft") {
        
        if(this.esRaichu)
          this.animation = "attack_upright_raichu";
        else
          this.animation = "attack_upright";
        this.flipX = true;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "downright") {
        
        if(this.esRaichu)
          this.animation = "attack_downright_raichu";
        else
          this.animation = "attack_downright";
        this.flipX = false;
        this.anims.play(this.animation, true);
      }
      else if (this.orientation === "downleft") {
        
        if(this.esRaichu)
          this.animation = "attack_downright_raichu";
        else
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
    else if(this.scene.cursor.c.isDown && this.puntuacion > 0 && this.puedeActuar)
    {
      this.puntuacion--;
      if (this.scene.cursor.up.isDown && this.scene.cursor.right.isDown) {
        this.velX = this.velocidad*3;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upright";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_upright_fast_raichu";
        else
          this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.up.isDown && this.scene.cursor.left.isDown) {
        this.velX = -this.velocidad*3;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upleft";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_upright_fast_raichu";
        else
          this.animation = "move_upright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown && this.scene.cursor.right.isDown) {
        this.velX = this.velocidad*3;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downright";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_downright_fast_raichu";
        else
          this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown && this.scene.cursor.left.isDown) {
        
        this.velX = -this.velocidad*3;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downleft";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_downright_fast_raichu";
        else
          this.animation = "move_downright_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.right.isDown) {
        
        this.velX = this.velocidad*3;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "right";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_right_fast_raichu";
        else
          this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.left.isDown) {
        this.velX = -this.velocidad*3;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "left";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_right_fast_raichu";
        else
          this.animation = "move_right_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.up.isDown) {
        this.velX = 0;
        this.velY = -this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "up";

        if(this.esRaichu)
          this.animation = "move_up_fast_raichu";
        else
          this.animation = "move_up_fast";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown) {
        this.velX = 0;
        this.velY = this.velocidad*3;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "down";

        if(this.esRaichu)
          this.animation = "move_down_fast_raichu";
        else
          this.animation = "move_down_fast";
        this.anims.play(this.animation, true);
      }
      else
        this.puntuacion++; // Se le devuelven los puntos
    }
    else if(this.puedeActuar)
    {
      if (this.scene.cursor.up.isDown && this.scene.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upright";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_upright_raichu";
        else
          this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.up.isDown && this.scene.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "upleft";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_upright_raichu";
        else
          this.animation = "move_upright";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown && this.scene.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downright";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_downright_raichu";
        else
          this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown && this.scene.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "downleft";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_downright_raichu";
        else
          this.animation = "move_downright";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.right.isDown) {
        this.velX = this.velocidad;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "right";
        this.flipX = false;

        if(this.esRaichu)
          this.animation = "move_right_raichu";
        else
          this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.left.isDown) {
        this.velX = -this.velocidad;
        this.velY = 0;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "left";
        this.flipX = true;

        if(this.esRaichu)
          this.animation = "move_right_raichu";
        else
          this.animation = "move_right";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.up.isDown) {
        this.velX = 0;
        this.velY = -this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "up";

        if(this.esRaichu)
          this.animation = "move_up_raichu";
        else
          this.animation = "move_up";
        this.anims.play(this.animation, true);
      }
      else if (this.scene.cursor.down.isDown) {
        this.velX = 0;
        this.velY = this.velocidad;
        this.body.setVelocityX(this.velX);
        this.body.setVelocityY(this.velY);
        this.orientation = "down";

        if(this.esRaichu)
          this.animation = "move_down_raichu";
        else
          this.animation = "move_down";
        this.anims.play(this.animation, true);
      }
    }

    if(Phaser.Input.Keyboard.JustDown(this.scene.cursor.r) && this.puedeActuar) // Recupera vida
    {
      if(this.scene.puntuacion.nivel > 0 && this.vida <= this.vidaTotal/2) // Solo puede recuperar la vida si ha perdido la mitad y si puede gastar niveles
      {
        this.musicaRecuperarse.play();
        this.vida = this.vidaTotal;
        this.puntuacion -= 330;
      }
    }
    if(Phaser.Input.Keyboard.JustDown(this.scene.cursor.e) && this.puedeActuar && this.evoluciones > 0 && !this.esRaichu) // Evoluciona
    {
      this.musicaEvolucion.play();
      
      if(data.musica)
        this.scene.music.pause();

      this.evoluciones--;
      this.puedeActuar = false;
      this.esRaichu = true;
      this.animation = "evolve";
      this.anims.play(this.animation, true);
      this.fuerza *= 2;
      this.velocidad *= 2;

      this.scene.time.addEvent({
        delay: 9000,
        callback: () => {
            this.puedeActuar = true;
            this.musicaEvolucion.stop();
            this.animation = "move_down_raichu";
            this.anims.play(this.animation, true);
            this.body.setSize(20, 20);
            this.body.offset.x = 22;
            this.body.offset.y = 19;
            if(data.musica)
              this.scene.music.resume();
            if(!this.scene.mensajeActivo)
            { 
              this.scene.mensajeActivo = true; 
              this.scene.mensaje = new Mensaje(this.scene, "evolucion1");
              this.timer = this.scene.time.addEvent({
                  delay: 5000,
                  callback: () => {
                    this.scene.mensaje.alerta.destroy();
                    this.scene.mensajeActivo = false;
                  },
                  loop: false
              });
            }
        },
        loop: false
      });

      this.scene.time.addEvent({
        delay: 30000,
        callback: () => {
            this.evolucionAgotada = true;
        },
        loop: false
      });
    }

    if(this.evolucionAgotada && this.esRaichu)
    {
      this.evolucionAgotada = false;
      this.animation = "evolve";
      this.anims.play(this.animation, true);
      this.fuerza = this.fuerza / 2;
      this.velocidad = this.velocidad / 2;
      this.puedeActuar = false;

      if(!this.scene.mensajeActivo)
      { 
        this.scene.mensajeActivo = true; 
        this.scene.mensaje = new Mensaje(this.scene, "evolucion2");
        this.timer = this.scene.time.addEvent({
            delay: 5000,
            callback: () => {
              this.scene.mensaje.alerta.destroy();
              this.scene.mensajeActivo = false;
            },
            loop: false
        });
      }
      this.scene.time.addEvent({
        delay: 2000,
        callback: () => {
            this.puedeActuar = true;
            this.animation = "move_down";
            this.anims.play(this.animation, true);
            this.body.setSize(14, 15);
            this.body.offset.x = 17;
            this.body.offset.y = 24;
        },
        loop: false
      });
      this.esRaichu = false;
    }
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
    if(this.haVuelto)
    {
      this.haVuelto = false;

      if(this.musicaEvolucion.isPaused)
        this.musicaEvolucion.resume();
      
      else if(data.musica)
        this.scene.music.play();
    }

    if(this.tiempoEfecto > 0)
    {
      this.tiempoEfecto--;
      if(this.tiempoEfecto === 0)
      {
        this.efecto = "";
        
        this.velocidad = 50;
        this.fuerza = 5;

        if(this.esRaichu)
        {
          this.velocidad *= 2;
          this.fuerza *= 2;
        }
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
      const cursor = this.scene.cursor;
      
      this.velX = 0;
      this.velY = 0;
      this.body.setVelocityX(this.velX);
      this.body.setVelocityY(this.velY);
      
      this.actuar();
      
      if(this.esHerido && !this.atacar && this.puedeActuar)
      {
        this.musicaDamage.play();
        this.puedeActuar = false;
        switch(this.orientation)
        {
          case "up": 
              this.flipX = false;

              if(this.esRaichu)
                this.animation = 'damage_up_raichu';
              else
                this.animation = 'damage_up';
              break;
          case "upright":
              this.flipX = false;
              if(this.esRaichu)
                this.animation = 'damage_upright_raichu';
              else
                this.animation = 'damage_upright';
              break;
          case "upleft":
              this.flipX = true;
              if(this.esRaichu)
                this.animation = 'damage_upright_raichu';
              else
                this.animation = 'damage_upright';
              break;
          case "down":
              this.flipX = false;
              if(this.esRaichu)
                this.animation = 'damage_down_raichu';
              else
                this.animation = 'damage_down';
              break;
          case "downright":
              this.flipX = false;
              if(this.esRaichu)
                this.animation = 'damage_downright_raichu';
              else
                this.animation = 'damage_downright';
              break;
          case "downleft":
              this.flipX = true;
              if(this.esRaichu)
                this.animation = 'damage_downright_raichu';
              else
                this.animation = 'damage_downright';
              break;
          case "right":
              this.flipX = false;
              if(this.esRaichu)
                this.animation = 'damage_right_raichu';
              else
                this.animation = 'damage_right';
              break;
          case "left":
              this.flipX = true;
              if(this.esRaichu)
                this.animation = 'damage_right_raichu';
              else
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

      if(this.scene.cursor.pause.isDown) {
        this.scene.music.pause();
        if(this.musicaEvolucion.isPlaying)
          this.musicaEvolucion.pause();

        this.scene.scene.launch('gamePause', {clave: this.scene.scene.key}); // Le paso la key de la escena actual para luego poder continuarla
        this.scene.scene.pause();

        this.reiniciarTeclas();

        this.haVuelto = true;
      }

     this.esHerido = false;
    }
    else if(this.vida === 0)
    {
      this.esHerido = true;
      this.setActive(false);

      // Game Over
      this.scene.music.stop();
      this.scene.scene.launch('gameOver');
      this.scene.scene.pause(this.scene.scene.key);
    }  
  }
  
  reiniciarTeclas()
  {
    this.scene.cursor.pause.isDown = false;
    this.scene.cursor.pause.isUp = true;
    this.scene.cursor.c.isDown = false;
    this.scene.cursor.c.isUp = true;
    this.scene.cursor.r.isDown = false;
    this.scene.cursor.r.isUp = true;
    this.scene.cursor.e.isDown = false;
    this.scene.cursor.e.isUp = true;
    this.scene.cursor.space.isDown = false;
    this.scene.cursor.space.isUp = true;
    this.scene.cursor.down.isDown = false;
    this.scene.cursor.down.isUp = true;
    this.scene.cursor.up.isDown = false;
    this.scene.cursor.up.isUp = true;
    this.scene.cursor.left.isDown = false;
    this.scene.cursor.left.isUp = true;
    this.scene.cursor.right.isDown = false;
    this.scene.cursor.right.isUp = true;
  }
}