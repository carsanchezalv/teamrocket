import { data } from "./data.js";

// Textos
import MensajeTrampa from './mensajes/mensajeTrampa.js';

export default class Trampillas extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, "trampilla");

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
    
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

       this.play(this.animation, true);
       this.scene.physics.world.enableBody(this);
       
       this.scene.physics.add.overlap(this.scene.pikachuSprite, this, () => this.pisarTrampa());
    }

    pisarTrampa() {
        if(this.activo)
        {
            if(this.scene.mensaje != null && this.scene.mensajeActivo)
            {       
                this.scene.mensajeActivo = true;
                this.scene.mensaje.alerta.destroy();
            }
            switch(this.animation)
            {
                case "trampa7": // Duplica tus puntos
                    data.puntos *= 2;
                    if(this.scene.mensaje != null)
                    this.scene.mensajeActivo = true;
               
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa7");
                break;

                case "trampa8": // Te recupera la vida               
                    
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.vida = this.scene.pikachuSprite.vidaTotal;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa8");
                break;

                case "trampa9": // Aumenta el valor de las gemas del suelo
                    data.bonusGemas = 2;
                    this.scene.mensajeActivo = true;
                    data.tiempoEfecto = 200;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa9");
                break;

                case "trampa10": // Duplica tu fuerza
                this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.fuerza *= 2;
                    data.tiempoEfecto = 200;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa10");
                break;

                case "trampa11":
                    // No hace nada
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa11");
                break;

                case "trampa12": // Te va frenando poco a poco
                    data.tiempoEfecto = 200;
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.efecto = "ralentizar";
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa12");
                break;

                case "trampa13": // Te para de golpe
                    data.tiempoEfecto = 200;
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.velocidad = 0;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa13");
                break;

                case "trampa14":
                    // No hace nada
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa14");
                break;

                case "trampa15":
                    // No hace nada
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa15");
                break;

                case "trampa16": // Envenena durante un tiempo
                    data.tiempoEfecto = 200;
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.efecto = "veneno";
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa16");
                break;

                case "trampa17": // Tu fuerza ahora vale la mitad
                this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.fuerza = this.scene.pikachuSprite.fuerza / 2;
                    data.tiempoEfecto = 200;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa17");
                break;

                case "trampa18": // Tus puntos se convierten en un valor aleatorio
                    data.puntos = Phaser.Math.Between(0, 5000);
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa18");
                break;

                case "trampa19": // Te quita todos los puntos
                    data.puntos = 0;
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa19");
                break;

                case "trampa20": // Eres inmune durante un tiempo
                    this.scene.pikachuSprite.inmune = true;
                    this.scene.mensajeActivo = true;
                    data.tiempoEfecto = 200;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa20");
                break;

                case "trampa21": // Te teletransporta a un lugar aleatorio
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa21");
                    let sigue = true;
                    while(sigue)
                    {
                        this.xRand = Phaser.Math.Between(0, 6096/24);
                        this.yRand = Phaser.Math.Between(0, 3827/24);
                        if(this.scene.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
                        {
                            sigue = false;
                            this.scene.pikachuSprite.x = this.xRand * 24;
                            this.scene.pikachuSprite.y = this.yRand * 24;
                        }
                    }
                break;

                case "trampa22": // Te marea 
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.velocidad *= -1;
                    data.tiempoEfecto = 200;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa22");
                break;

                case "trampa23":
                    // No hace nada
                    this.scene.mensajeActivo = true;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa23");
                break;

                case "trampa24": // Te reduce la velocidad a la mitad
                    data.tiempoEfecto = 200;
                    this.scene.mensajeActivo = true;
                    this.scene.pikachuSprite.velocidad = this.scene.pikachuSprite.velocidad / 2;
                    this.scene.mensaje = new MensajeTrampa(this.scene, "trampa24");
                break;
            }
            this.setVisible(true);
            this.activo = false;
        }
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        this.play(this.animation, true);
    }
}