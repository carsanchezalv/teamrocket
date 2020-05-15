import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";

// Enemigo


export default class JefePlanta extends Phaser.Scene {
  constructor() {
    super({ key: 'jefePlanta' });
  }

  preload() {  
 //   this.load.tilemapTiledJSON('tilemap', 'assets/tiles/mapa/mapa_team_rocket.json');

    // Tilesets
    this.load.image('dungeon0', 'assets/tiles/dungeon-0.png');
    

    this.load.audio("musica", [
 //     "assets/music/portada.ogg",
 //     "assets/music/portada.mp3"
    ]);


    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
    
    
  }

  create() {

    this.map = this.make.tilemap({ 
      key: 'tilemap', 
      tileWidth: 6912, 
      tileHeight: 3840 
    });

    this.map.addTilesetImage('dungeon-0', 'dungeon0');

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['dungeon-0', 'dungeon-8', 'dungeon-9', 'dungeon-14','dungeon-54']);
    
    
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);


    this.xPikachu = 3778;
    this.yPikachu = 2067;

    this.pikachuSprite = new Pikachu(this, x, y);

    
    // Enemigo
  //  this.xJefe =
 //   this.yJefe = 
    this.jefe = new JefePlanta(this, this.xJefe, this.yJefe);
       

    // Colisiones
    this.physics.add.collider(this.pikachuSprite, this.borde);
    
    this.physics.add.collider(this.jefe, this.borde);
    
    
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
  }

  update(time, delta) {
    
  }
}