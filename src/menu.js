export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'menu' });
    }
    create() {

//        let jugar = this.add.text(this.scale.width / 2, this.scale.heigh / 2, 'Jugar', {
        //    -webkit-transition: border-radius 1s, text -shadow 1s, color 1s;
 //       fontSize: '30px',
 //       fontStyle: 'bold',
 //       fontFaminly: 'monospace',
 //       fill: "#094ec0" 
    //        fontFamily: 'Press Start 2P',
    //        fontSize: '30px',
    //        fontStyle: 'cursive',
    //        color:'rgb(0, 225, 255)',
         
    //        margin: 10px;
    //        padding: 10px;
    //        width: '500px',
         
    //        backgroundColor: 'rgba(0, 0, 0, 0.349)',
        
   //         stroke: '4px',
   //         strokeRadius: '10px',
    //        display: inline-block,

        //    border-color:  red  yellow blue rgb(0, 255, 0);
        //    box-shadow: 0px 3px 5px rgba(255, 0, 0, 0.5);
 //          }).setDepth(1).setOrigin(0.5);

 //          jugar.setInteractive();
//
 //          jugar.on('pointerover', function (value) {
  //             jugar.setScale(1.5);
  //         })
   
  //         jugar.on('pointerout', function (value) {
   //            playButton.setScale(1);
   //        })
   
   //        jugar.on('pointerup', function (value) {
   //             this.scene.start("game");
   //        })
     //      this.scene.start("game");

        let width = this.scale.width;
        let height = this.scale.height;
        const escena = this.scene;
    //     this.add.image(width /2, height / 2, 'background').setOrigin(0.5).setDepth(0).setScale(2);
        this.scene.pointer
        let jugar = this.add.text(width / 2, height / 2, '[ JUGAR ]', {
            
            fontSize: '60px',
            fontStyle: 'bold',
            fontFamily: 'ERAS demi ITC',
            fill: "#00E1FF",
       //     fontSize: '80px',
       //     fontStyle: 'cursive',
       //     fontFamily: 'Press Start 2P',
        //    fill: "#00E1FF"

    //            backgroundColor: 'rgba(255, 255, 0, 1)',
           
                stroke: "#094ec0",
                strokeThickness: 4,
           

               align: 'center',  // 'left'|'center'|'right'|'justify'
           //     padding: {
            //        left: 0,
            //        right: 0,
            //        top: 0,
            //        bottom: 0,
            //    }
             
            //    metrics: false
                // metrics: {
                //     ascent: 0,
                //     descent: 0,
                //     fontSize: 0
                // }
                // resolution: 1
            


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
/*
        let optionsButton = this.add.text(width / 2, height / 2, '<Options>', 
        { 
            fontSize: '30px',
            fontStyle: 'bold',
            fontFamily: 'monospace',
            fill: "#094ec0" 
        }).setDepth(1).setOrigin(0.5);
        
        optionsButton.setInteractive();

        optionsButton.on('pointerover', function (value) {
            optionsButton.setScale(1.3);
        })

        optionsButton.on('pointerout', function (value) {
            optionsButton.setScale(1);
        })

        optionsButton.on('pointerup', function (value) {
            instanciaScene.start('options');
        })
*/
    }
}