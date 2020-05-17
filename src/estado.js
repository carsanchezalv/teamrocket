export default class Estado extends Phaser.Scene {
    constructor(scene) {
        
        super('Estado');
        this.scene = scene;
        this.vida = scene.add.sprite(512, 226, 'vida10');
        this.vida.setTexture('vida10');
        this.vida.setScale(0.2);
        this.vida.setDepth(20);
        this.vida.setScrollFactor(0);
        this.animacionHerido = false;
    }

    updateVida(vidaPikachu, herido) {
 
        this.animacionHerido = herido;
        if(this.animacionHerido)
        {
            this.vida.setTexture('vidahit');
                        
            this.scene.time.addEvent({
                delay: 500,
                callback: () => {
                    this.animacionHerido = false;
                    this.scene.animacionHerido = false;
                },
                loop: false
            });
        }
        
        else {
            if (vidaPikachu > 90) {
                this.vida.setTexture('vida10');
            }
            else if (vidaPikachu > 80) {
                this.vida.setTexture('vida9')
            }
            else if (vidaPikachu > 70) {
                this.vida.setTexture('vida8')
            }
            else if (vidaPikachu > 60) {
                this.vida.setTexture('vida7')
            }
            else if (vidaPikachu > 50) {
                this.vida.setTexture('vida6')
            }
            else if (vidaPikachu > 40) {
                this.vida.setTexture('vida5')
            }
            else if (vidaPikachu > 30) {
                this.vida.setTexture('vida4')
            }
            else if (vidaPikachu > 20) {
                this.vida.setTexture('vida3')
            }
            else if (vidaPikachu > 10) {
                this.vida.setTexture('vida2')
            }
            else if (vidaPikachu > 0) {
                this.vida.setTexture('vida1')
            }
            else if (vidaPikachu <= 0) {
                this.vida.setTexture('vida0')
            }
        }
    }
}