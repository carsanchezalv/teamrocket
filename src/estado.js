export default class Estado extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        
        super(scene, x, y, 'vida10');
    
        this.setTexture('vida10');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setScale(0.2);
        this.scene.physics.world.enableBody(this);
        this.animacionHerido = false;

    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if(this.scene.movimientoBarra)
        {
            this.body.setVelocityX(this.scene.pikachuSprite.velX);
            this.body.setVelocityY(this.scene.pikachuSprite.velY);
            
            if(this.x != this.scene.pikachuSprite.x || this.y != this.scene.pikachuSprite.y - 30)
            {
                this.x = this.scene.pikachuSprite.x;
                this.y = this.scene.pikachuSprite.y - 30;
            }
        }
        else
        {
            this.x = this.scene.pikachuSprite.x;
            this.y = this.scene.pikachuSprite.y - 30;
            this.scene.movimientoBarra = true;
        }

        if(this.animacionHerido)
        {
            this.setTexture('vidahit');
                        
            this.scene.time.addEvent({
                delay: 500,
                callback: () => {
                    this.animacionHerido = false;
                },
                loop: false
            });
        }
        
        else {
            if (this.scene.pikachuSprite.vida > 90) {
                this.setTexture('vida10');
            }
            else if (this.scene.pikachuSprite.vida > 80) {
                this.setTexture('vida9')
            }
            else if (this.scene.pikachuSprite.vida > 70) {
                this.setTexture('vida8')
            }
            else if (this.scene.pikachuSprite.vida > 60) {
                this.setTexture('vida7')
            }
            else if (this.scene.pikachuSprite.vida > 50) {
                this.setTexture('vida6')
            }
            else if (this.scene.pikachuSprite.vida > 40) {
                this.setTexture('vida5')
            }
            else if (this.scene.pikachuSprite.vida > 30) {
                this.setTexture('vida4')
            }
            else if (this.scene.pikachuSprite.vida > 20) {
                this.setTexture('vida3')
            }
            else if (this.scene.pikachuSprite.vida > 10) {
                this.setTexture('vida2')
            }
            else if (this.scene.pikachuSprite.vida > 0) {
                this.setTexture('vida1')
            }
            else if (this.scene.pikachuSprite.vida <= 0) {
                this.setTexture('vida0')
            }
        }
    }
}