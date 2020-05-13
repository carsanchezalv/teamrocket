import { data } from "./data.js";

export default class Trampillas extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, "trampilla");

        this.animation = nombre;
        this.visible = false;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'trampa1',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 0, end: 0 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa2',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 1, end: 1 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa3',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 2, end: 2 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa4',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 3, end: 3 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa5',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 4, end: 4 }),
            frameRate: 1,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'trampa6',
            frames: this.scene.anims.generateFrameNumbers('trampilla', { start: 5, end: 5 }),
            frameRate: 1,
            repeat: 0
        });
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
        switch(this.animation)
        {
            case "trampa1":
            break;

            case "trampa2":
            break;

            case "trampa3":
            break;

            case "trampa4":
            break;

            case "trampa5":
            break;

            case "trampa6":
            break;

            case "trampa7":
            break;

            case "trampa8":
            break;

            case "trampa9":
            break;

            case "trampa10":
            break;

            case "trampa11":
            break;

            case "trampa12":
            break;

            case "trampa13":
            break;

            case "trampa14":
            break;

            case "trampa15":
            break;

            case "trampa16":
            break;

            case "trampa17":
            break;

            case "trampa18":
            break;

            case "trampa19":
            break;

            case "trampa20":
            break;

            case "trampa21":
            break;

            case "trampa22":
            break;

            case "trampa23":
            break;

            case "trampa24":
            break;
        }
        this.anims.play(this.animation);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        this.play(this.animation, true);
    }
}