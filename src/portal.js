import { data } from "./data.js";

// Jefes
import BossPlanta from "./jefePlanta.js";

export default class Portal extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, isla) {
        super(scene, x, y, 'portal');
        this.escena = scene;
        this.isla = isla;
        this.animation = "estatico";
        this.visible = true;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'estatico',
            frames: this.scene.anims.generateFrameNumbers('portal', { start: 1, end: 7 }),
            frameRate: 5,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'teletransporte',
            frames: this.scene.anims.generateFrameNumbers('portal', { start: 10, end: 15 }),
            frameRate: 5,
            repeat: 0
        });
    
       this.scene.add.existing(this);
       this.scene.physics.add.existing(this);

       this.anims.play(this.animation, true);
       this.scene.physics.world.enableBody(this);
       this.scene.physics.add.overlap(this, this.scene.pikachuSprite, () => this.entrarEnPortal());

       this.body.setSize(130, 130);
       this.body.offset.x = 62;
       this.body.offset.y = 60;
    }

    entrarEnPortal()
    {
        this.animation = "teletransporte";
        this.anims.play(this.animation, true);
        
        // Escena jefes dependiendo de la isla
        if(this.isla === "planta")
        {
            this.scene.activarJefePlanta = true;
        }
        else if(this.isla === "finalPlanta")
        {
            this.scene.activarPortal = true;
        }
        else if(this.isla === "agua")
        {
            this.scene.activarJefeAgua = true;
        }
        else if(this.isla === "finalAgua")
        {
            this.scene.activarPortal = true;
        }
        else if(this.isla === "centro")
        {
            this.scene.activarJefeFinal = true;
        }
        else if(this.isla === "finalJuego")
        {
            this.scene.activarPortal = true;
        }else if(this.isla === "fuego"){
            this.scene.activarJefeFuego = true;
        }else if(this.isla === "fuego"){
            this.scene.activarPortal = true;
        }
        this.destroy();
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.anims.play(this.animation, true);
    }
}