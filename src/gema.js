import { data } from "./data.js";
export default class Gema extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'gema');

        this.animation = "brillo";
        // Atributos
        this.valor = 20 / data.nivel;
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
    
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

       this.play(this.animation, true);
       this.scene.physics.world.enableBody(this);

       let musicaGemaConfig = {
        mute: false,        
        volume: 1,
        rate: 1,    
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
      }
  
      this.musicaGema = this.scene.sound.add("musicaGema", musicaGemaConfig);

       this.scene.physics.add.overlap(this, this.scene.pikachuSprite, () => this.collectGema());
    }

    collectGema() {
        this.musicaGema.play();
        this.scene.groupGemas;
        this.valor = this.valor * this.scene.pikachuSprite.bonusGemas;
        this.scene.pikachuSprite.puntuacion += this.valor;
        this.destroy();
        this.numGema++;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if(this.scene.pikachuSprite.tiempoEfecto === 0)
        {
            this.scene.pikachuSprite.bonusGemas = 1;
        }
        this.play(this.animation, true);
    }
}