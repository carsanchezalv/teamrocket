export default class Video extends Phaser.Scene {

    constructor() {
        super({ key: 'video' });
    }
    preload() {
        this.load.video('intro', '../assets/video/intro.mp4', 'canplaythrough', true, false);     
    }

    create() {
        const escena = this.scene;
        let video = this.add.video(this.scale.width / 2, this.scale.height / 2, 'intro');

        video.play(false);
       

        let skip = this.add.text( this.scale.width / 2, this.scale.height - 20, 'Pulsa para continuar', {

            fontSize: '25px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#094ec0",
    //        backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "yellow",
            strokeThickness: 4,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);
        skip.setInteractive();
        skip.on('pointerover', function (pointer) {
            skip.setScale(1.2);
        })
        skip.on('pointerout', function (pointer) {
            skip.setScale(1);
        })
        skip.on('pointerup', function (pointer) {
            video.stop();
            video.destroy();
            escena.start('nombre');
        })

        let silenciar = this.add.text( this.scale.width / 2, 20, 'Silenciar', {

            fontSize: '20px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#00E1FF",
    //        backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "#094ec0",
            strokeThickness: 4,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);
        silenciar.setInteractive();
        silenciar.on('pointerover', function (pointer) {
            silenciar.setScale(1.2);
        })
        silenciar.on('pointerout', function (pointer) {
            silenciar.setScale(1);
        })
        silenciar.on('pointerup', function (pointer) {
            if(!video.isMuted())
            {
                video.setMute(true);
                silenciar.text = "Activar sonido"
            }
            else
            {
                video.setMute(false);
                silenciar.text = "Silenciar"
            }
        })
    }
}