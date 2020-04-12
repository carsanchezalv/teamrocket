export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'menu' });
    }
    create() {

        const escena = this.scene;
        
        let jugar = this.add.text( this.scale.width / 2, this.scale.height / 2, '[ JUGAR ]', {
            
            fontSize: '60px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#00E1FF",
    //        backgroundColor: 'rgba(255, 255, 0, 1)',
           
            stroke: "#094ec0",
            strokeThickness: 4,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);

        jugar.setInteractive();

        jugar.on('pointerover', function (pointer) {
            jugar.setScale(1.5);
        })

        jugar.on('pointerout', function (pointer) {
            jugar.setScale(1);
        })

        jugar.on('pointerup', function (pointer) {
            escena.start('game');
        })
    }
}