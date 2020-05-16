import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";
import Estado from "./estado.js";
// Enemigo


export default class JefePlanta extends Phaser.Scene {
  constructor() {
    super({ key: 'jefePlanta' });
  }

  preload() {  
    this.load.tilemapTiledJSON('mapPlanta', 'assets/tiles/mapa/mapa_jefe_planta.json');

    // Tilesets
    this.load.image('isladeplanta', 'assets/tiles/dungeonPlanta.png');
    

 //   this.load.audio("musica", [
 //     "assets/music/portada.ogg",
 //     "assets/music/portada.mp3"
 //   ]);


    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });

    // Barra vida
    this.load.image('vida10', 'assets/estado/VIDA_10.png');
    this.load.image('vida9', 'assets/estado/VIDA_9.png');
    this.load.image('vida8', 'assets/estado/VIDA_8.png');
    this.load.image('vida7', 'assets/estado/VIDA_7.png');
    this.load.image('vida6', 'assets/estado/VIDA_6.png');
    this.load.image('vida5', 'assets/estado/VIDA_5.png');
    this.load.image('vida4', 'assets/estado/VIDA_4.png');
    this.load.image('vida3', 'assets/estado/VIDA_3.png');
    this.load.image('vida2', 'assets/estado/VIDA_2.png');
    this.load.image('vida1', 'assets/estado/VIDA_1.png');
    this.load.image('vida0', 'assets/estado/VIDA_0.png');
    this.load.image('vidahit', 'assets/estado/VIDA_HIT.png');
  }

  create() {

    this.map = this.make.tilemap({ 
      key: 'mapPlanta', 
      tileWidth: 5325, 
      tileHeight: 3150 
    });

    this.map.addTilesetImage('pr1', 'isladeplanta');

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['pr1']);
    this.suelo = this.map.createStaticLayer('suelo', ['pr1']);
    
    
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);

    this.xPikachu = 457;
    this.yPikachu = 320;

    this.pikachuSprite = new Pikachu(this, this.xPikachu, this.yPikachu);
    this.barraEstado = new Estado(this, this.pikachuSprite.x, this.pikachuSprite.y - 30);
    
    // Enemigo
  //  this.xJefe =
 //   this.yJefe = 
 //   this.jefe = new JefePlanta(this, this.xJefe, this.yJefe);
       

    // Colisiones
    this.physics.add.collider(this.pikachuSprite, this.borde);
    
 //   this.physics.add.collider(this.jefe, this.borde);
    
    
    // Camera zoom
    const camera = this.cameras.main;
    camera.setZoom(2);
    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.startFollow(this.pikachuSprite);

  // Música
  /*
    if(data.musica) {
      let config = {
        mute: false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
      };
      let music = this.sound.add('musica_portada', config);
      music.play();
    }
  */
//    this.scene.start('game');
  }

  update(time, delta) {
    
  }
}