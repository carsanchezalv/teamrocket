import { data } from "./data.js";

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
            switch(this.animation)
            {
                case "trampa7":
                    data.puntos *= 2;
                break;

                case "trampa8":
                    this.scene.pikachuSprite.vida = this.scene.pikachuSprite.vidaTotal;
                break;

                case "trampa9":
                    data.bonusGemas = 2;
                    data.tiempoEfecto = 200;
                break;

                case "trampa10":
                    this.scene.pikachuSprite.fuerza *= 2;
                    data.tiempoEfecto = 200;
                break;

                case "trampa11":
                    // No hace nada
                break;

                case "trampa12":
                    data.tiempoEfecto = 200;
                    this.scene.pikachuSprite.efecto = "ralentizar";
                break;

                case "trampa13":
                    data.tiempoEfecto = 200;
                    this.scene.pikachuSprite.velocidad = 0;
                break;

                case "trampa14":
                    // No hace nada
                break;

                case "trampa15":
                    // No hace nada
                break;

                case "trampa16":
                    data.tiempoEfecto = 200;
                    this.scene.pikachuSprite.efecto = "veneno";
                break;

                case "trampa17":
                    this.scene.pikachuSprite.fuerza = this.scene.pikachuSprite.fuerza / 2;
                    data.tiempoEfecto = 200;
                break;

                case "trampa18":
                    data.puntos = Phaser.Math.Between(0, 5000);
                break;

                case "trampa19":
                    data.puntos = 0;
                break;

                case "trampa20":
                    this.scene.pikachuSprite.inmune = true;
                    data.tiempoEfecto = 200;
                break;

                case "trampa21":
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

                case "trampa22":
                    this.scene.pikachuSprite.velocidad *= -1;
                    data.tiempoEfecto = 200;
                break;

                case "trampa23":
                    // No hace nada
                break;

                case "trampa24":
                    data.tiempoEfecto = 200;
                    this.scene.pikachuSprite.velocidad = this.scene.pikachuSprite.velocidad / 2;
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