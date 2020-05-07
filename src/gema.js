import { data } from "./data.js";

export default class Gema extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'gema');

        this.animation = "brillo";
        // Atributos
        this.valor = 1;
        this.velocidad = 40;
        this.visible = true;
        this.numGema = 0;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'brillo',
            frames: this.scene.anims.generateFrameNumbers('gema', { start: 1, end: 7 }),
            frameRate: 7,
            repeat: 0
        });

        // Animacion ataque

        // Animacion evolucion 


        // Animaciones daño
    
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

       // this.body.setSize(14, 10);
       // this.body.offset.x = 16;
        //this.body.offset.y = 27;

       this.play(this.animation, true);
       this.scene.physics.world.enableBody(this);
       this.scene.physics.add.overlap(this, this.scene.pikachuSprite, () => this.collectGema());
    }

    collectGema(){
        //Gema.kill(); 
        this.destroy();
        //Gema.disableBody(player, gema);
        this.numGema++;
        data.puntos += this.valor;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.play(this.animation, true);
    }
}