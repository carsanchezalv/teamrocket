import { data } from "./data.js";

// Textos
import Mensaje from './mensajes/mensaje.js';

export default class Trampillas extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, "trampilla");

        this.pisada = false;
        this.animation = nombre;
        this.visible = false;
        this.activo = true;
        // Animacion movimientos
        this.scene.anims.create({
            key: 'trampa7',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 6, end: 6 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa8',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 7, end: 7 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa9',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 8, end: 8 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa10',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 9, end: 9 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa11',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 10, end: 10 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa12',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 11, end: 11 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa13',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 12, end: 12 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa14',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 13, end: 13 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa15',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 14, end: 14 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa16',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 15, end: 15 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa17',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 16, end: 16 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa18',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 17, end: 17 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa19',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 18, end: 18 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa20',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 19, end: 19 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa21',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 20, end: 20 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa22',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 21, end: 21 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa23',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 22, end: 22 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa24',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 23, end: 23 }),
            frameRate: 1,
            repeat: 0
        });
        this.setScale(1.5);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.numMensajes = 0;
        this.play(this.animation, true);
        this.scene.physics.world.enableBody(this);

        this.body.setSize(25, 25);
        this.body.offset.x = 0;
        this.body.offset.y = 0;
        
        let musicaTrampillaConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
          }
      
          this.musicaTrampilla = this.scene.sound.add("musicaTrampilla", musicaTrampillaConfig);

        this.scene.physics.add.overlap(this.scene.pikachuSprite, this, () => this.pisarTrampa());
    }

    pisarTrampa() {
        if(this.activo)
        {
            switch(this.animation)
            {
                case "trampa7": // Duplica tus puntos
                    this.scene.pikachuSprite.puntuacion *= 2;
                break;

                case "trampa8": // Te recupera la vida               
                    this.scene.pikachuSprite.vida = this.scene.pikachuSprite.vidaTotal;
                break;

                case "trampa9": // Aumenta el valor de las gemas del suelo
                    this.scene.pikachuSprite.bonusGemas = 2;
                    this.scene.pikachuSprite.tiempoEfecto = 300 / data.nivel;
                break;

                case "trampa10": // Duplica tu fuerza
                    this.scene.pikachuSprite.fuerza *= 2;
                    this.scene.pikachuSprite.tiempoEfecto = 300 / data.nivel;
                break;

                case "trampa11":
                    // No hace nada
                break;

                case "trampa12": // Te va frenando poco a poco
                    this.scene.pikachuSprite.tiempoEfecto = 300 * data.nivel;
                    this.scene.pikachuSprite.efecto = "ralentizar";
                break;

                case "trampa13": // Te para de golpe
                    this.scene.pikachuSprite.tiempoEfecto = 300 * data.nivel;
                    this.scene.pikachuSprite.velocidad = 0;
                break;

                case "trampa14":
                    // No hace nada
                break;

                case "trampa15":
                    // No hace nada
                break;

                case "trampa16": // Envenena durante un tiempo
                    this.scene.pikachuSprite.tiempoEfecto = 200 * data.nivel;
                    this.scene.pikachuSprite.efecto = "veneno";
                break;

                case "trampa17": // Tu fuerza ahora vale la mitad
                    this.scene.pikachuSprite.fuerza = this.scene.pikachuSprite.fuerza / 2;
                    this.scene.pikachuSprite.tiempoEfecto = 300 / data.nivel;
                break;

                case "trampa18": // Tus puntos se convierten en un valor aleatorio
                    this.scene.pikachuSprite.puntuacion = Phaser.Math.Between(660/data.nivel, 2000/data.nivel);
                break;

                case "trampa19": // Te quita todos los puntos
                    this.scene.pikachuSprite.puntuacion = 0;
                break;

                case "trampa20": // Eres inmune durante un tiempo
                    this.scene.pikachuSprite.inmune = true;
                    this.scene.pikachuSprite.tiempoEfecto = 300/data.nivel;
                break;

                case "trampa21": // Te teletransporta a un lugar aleatorio

                    let sigue = true;
                    while(sigue)
                    {
                        this.xRand = Phaser.Math.Between(0, 6096/24);
                        this.yRand = Phaser.Math.Between(0, 3827/24);
                        if(this.scene.map.getTileAt(this.xRand, this.yRand, false, this.scene.suelo) !== null)
                        {
                            sigue = false;
                            this.scene.pikachuSprite.x = this.xRand * 24;
                            this.scene.pikachuSprite.y = this.yRand * 24;
                        }
                    }
                break;

                case "trampa22": // Te marea 
                    this.scene.pikachuSprite.velocidad *= -1;
                    this.scene.pikachuSprite.tiempoEfecto = 300 * data.nivel;
                break;

                case "trampa23":
                    // No hace nada
                break;

                case "trampa24": // Te reduce la velocidad a la mitad
                    this.scene.pikachuSprite.tiempoEfecto = 300 * data.nivel;
                    this.scene.pikachuSprite.velocidad = this.scene.pikachuSprite.velocidad / 2;
                break;
            }
            this.setVisible(true);
            this.visible = true;
            this.activo = false;
            this.pisada = true;
            this.musicaTrampilla.play();
        }
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    
        if(!this.scene.mensajeActivo && this.pisada)
        {   
            this.pisada = false;
            this.scene.mensajeActivo = true;
            this.scene.mensaje = new Mensaje(this.scene, this.animation);
            this.timer = this.scene.time.addEvent({
                delay: 5000,
                callback: () => {
                    this.scene.mensaje.alerta.destroy();
                    this.scene.mensajeActivo = false;
                },
                loop: false
            });
        }
        this.play(this.animation, true);
    }
}