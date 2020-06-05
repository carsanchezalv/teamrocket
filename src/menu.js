import {data} from "./data.js"
export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'menu' });
    }
    preload() {
        this.load.audio("inicio", [
            "assets/music/inicio.ogg",
            "assets/music/inicio.mp3"
          ]);
          this.load.audio("musica_seleccion", [
            "assets/music/Select.ogg",
            "assets/music/Select.mp3"
          ]); 
    }
    create() {

        const escena = this.scene;
        this.musicOn = true;
         // Música
         let config = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        };
        let music = this.sound.add('inicio', config);
        music.play();

        let configSeleccion = {
            mute: false,
            volume: 0.7,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        };
        let seleccion = this.sound.add('musica_seleccion', configSeleccion);

        // Botón de jugar
        let jugar = this.add.text( this.scale.width / 2, this.scale.height / 2 - 70, '[ JUGAR ]', {

            fontSize: '70px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#8A2BE2",
    //        backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "#FFFFFF",
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
            music.stop();
            seleccion.play();
            escena.start('game');
        })
        

        let musica = this.add.text( this.scale.width / 2 - 200, this.scale.height / 2 + 50, 'Desactivar musica', {

            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#8A2BE2",
    //      backgroundColor: 'rgba(255, 255, 0, 1)',
            stroke: "#FFFFFF",
            strokeThickness: 3,
            align: 'center', 
        }).setDepth(1).setOrigin(0.5);

        musica.setInteractive();
        musica.on('pointerover', function (pointer) {
            musica.setScale(1.2);
            musica.fill = "#8A2BE2";
        })
        musica.on('pointerout', function (pointer) {
            musica.setScale(1);
        })
        musica.on('pointerup', function (pointer) {
            musica.fill = "#8A2BE2";
            seleccion.play();
            if(data.musica)
            {
                music.stop();
                data.musica = false;
                musica.text = "Activar musica"
            }
            else
            {
                music.play();
                data.musica = true;
                musica.text = "Desactivar musica"
            }
        })

    // Botón pantalla completa
       let pantalla = this.add.text( this.scale.width / 2 + 200, this.scale.height / 2 + 50, 'Activar pantalla completa', {

            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#8A2BE2",
            stroke: "#FFFFFF",
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
            seleccion.play();
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

        let facil = this.add.text( this.scale.width / 2 - 250, this.scale.height / 2 - 190, 'Facil', {

            fontSize: '45px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#8A2BE2",
            stroke: "#FFFFFF",
            strokeThickness: 3,
            align: 'center',
        }).setDepth(1).setOrigin(0.5);
        
        facil.setInteractive();
        facil.on('pointerover', function (pointer) {
            facil.setScale(1.2);
        })
        facil.on('pointerout', function (pointer) {
            facil.setScale(1);
        })
        facil.on('pointerup', function (pointer)
        {
            seleccion.play();
            if(data.nivel != 0.5)
            {
                data.nivel = 0.5;
                facil.setFill("violet");
                facil.setStroke("purple");
                facil.setFontSize('60px');

                normal.setFill("#8A2BE2");
                normal.setStroke("#FFFFFF");
                normal.setFontSize('45px');

                dificil.setFill("#8A2BE2");
                dificil.setStroke("#FFFFFF");
                dificil.setFontSize('45px');
            }
        })

        let normal = this.add.text( this.scale.width / 2, this.scale.height / 2 - 190, 'Normal', {

            fontSize: '60px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "violet",
            stroke: "purple",
            strokeThickness: 3,
            align: 'center',
        }).setDepth(1).setOrigin(0.5);
        
        normal.setInteractive();
        normal.on('pointerover', function (pointer) {
            normal.setScale(1.2);
        })
        normal.on('pointerout', function (pointer) {
            normal.setScale(1);
        })
        normal.on('pointerup', function (pointer)
        {
            seleccion.play();
            if(data.nivel != 1)
            {
                data.nivel = 1;
                normal.setFill("violet");
                normal.setStroke("purple");
                normal.setFontSize('60px');

                facil.setFill("#8A2BE2");
                facil.setStroke("#FFFFFF");
                facil.setFontSize('45px');

                dificil.setFill("#8A2BE2");
                dificil.setStroke("#FFFFFF");
                dificil.setFontSize('45px');
            }
        })

        let dificil = this.add.text( this.scale.width / 2 + 250, this.scale.height / 2 - 190, 'Dificil', {

            fontSize: '45px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#8A2BE2",
            stroke: "#FFFFFF",
            strokeThickness: 3,
            align: 'center',
        }).setDepth(1).setOrigin(0.5);
        
        dificil.setInteractive();
        dificil.on('pointerover', function (pointer) {
            dificil.setScale(1.2);
        })
        dificil.on('pointerout', function (pointer) {
            dificil.setScale(1);
        })
        dificil.on('pointerup', function (pointer)
        {
            seleccion.play();
            if(data.nivel != 1.5)
            {
                data.nivel = 1.5;
                dificil.setFill("violet");
                dificil.setStroke("purple");
                dificil.setFontSize('60px');

                facil.setFill("#8A2BE2");
                facil.setStroke("#FFFFFF");
                facil.setFontSize('45px');

                normal.setFill("#8A2BE2");
                normal.setStroke("#FFFFFF");
                normal.setFontSize('45px');
            }
        })
    }    
    
    update(time, delta)
    {

    }
}