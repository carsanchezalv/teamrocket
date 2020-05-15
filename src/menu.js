import {data} from "./data.js"
export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'menu' });
    }
    create() {

        const escena = this.scene;
        
        // Botón de jugar
        let jugar = this.add.text( this.scale.width / 2, this.scale.height / 2 - 80, '[ JUGAR ]', {

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
            jugar.setScale(1.2);
        })
        jugar.on('pointerout', function (pointer) {
            jugar.setScale(1);
        })
        jugar.on('pointerup', function (pointer) {
            escena.start('game');
        })

        let musica = this.add.text( this.scale.width / 2 - 200, this.scale.height / 2 + 50, 'Desactivar musica', {

            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#094ec0",
    //      backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "#00E1FF",
            strokeThickness: 3,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);

        musica.setInteractive();
        musica.on('pointerover', function (pointer) {
            musica.setScale(1.2);
            musica.fill = "#ffff2b";
        })
        musica.on('pointerout', function (pointer) {
            musica.setScale(1);
        })
        musica.on('pointerup', function (pointer) {
            musica.fill = "#ffff2b";
            if(data.musica)
            {
                data.musica = false;
                musica.text = "Activar musica"
            }
            else
            {
                data.musica = true;
                musica.text = "Desactivar musica"
            }
        })

    // Botón pantalla completa
       let pantalla = this.add.text( this.scale.width / 2 + 200, this.scale.height / 2 + 50, 'Activar pantalla completa', {

            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#094ec0",
    //        backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "#00E1FF",
            strokeThickness: 3,
            align: 'center',
        }).setDepth(1).setOrigin(0.5);
        
        pantalla.setInteractive();
        pantalla.on('pointerover', function (pointer) {
            pantalla.setScale(1.2);
        })
        pantalla.on('pointerout', function (pointer) {
            pantalla.setScale(1);
        })
        pantalla.on('pointerup', function (pointer)
        {
            if(this.scene.scale.isFullscreen)
            {
                this.scene.scale.stopFullscreen();
                pantalla.text = "Activar pantalla completa";
            }
            else
            {
                this.scene.scale.startFullscreen();
                pantalla.text = "Desactivar pantalla completa";
            }
        })
    }    
    
    update(time, delta)
    {

    }
}