import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";
import Estado from "./estado.js";
import Puntuacion from "./puntuacion.js";

// Enemigo
import Moltres from './jefes/moltres.js';

// Portal
import Portal from './portal.js';



export default class JefeFuego extends Phaser.Scene {
  constructor() {
    super({ key: 'jefeFuego' });
  }

  preload() {  
    this.load.tilemapTiledJSON('mapFuego', 'assets/tiles/mapa/mapa_jefe-fuego.json');

    // Tilesets
    this.load.image('zonaFuego', 'assets/tiles/crater.png');
    
    // Portal
    this.load.spritesheet('portal', 'assets/tiles/portal.png',{ frameWidth: 256, frameHeight: 256 });

 //   this.load.audio("musica", [
 //     "assets/music/portada.ogg",
 //     "assets/music/portada.mp3"
 //   ]); 


    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });

    // Enemigo
    this.load.spritesheet('moltres', 'assets/icons/personajes/Boss/boss_fuego.png',{ frameWidth: 96, frameHeight: 112 });

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
      key: 'mapFuego', 
      tileWidth: 591, 
      tileHeight: 572
    });

    this.map.addTilesetImage('crater', 'zonaFuego');

    this.activarPortal = false;
    this.portalExiste = false;

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['crater']);
    this.suelo = this.map.createStaticLayer('suelo', ['crater']);
    
    
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);

    this.xPikachu = 350;
    this.yPikachu = 570;

    this.pikachuSprite = new Pikachu(this, this.xPikachu, this.yPikachu);
  
    this.vidaPikachu = new Estado(this);
    this.puntuacion = new Puntuacion(this)

    // Enemigo
    this.xJefe = 350;
    this.yJefe = 280;
    this.jefe = new Moltres(this, this.xJefe, this.yJefe);
       

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
//    this.scene.start('game');
  }

  update(time, delta) {
    
    this.puntuacion.updatePuntos(data.puntos);
    this.vidaPikachu.updateVida(this.pikachuSprite.vida, this.animacionHerido);

    if(this.jefe.vida <= 0)
    {
      if(!this.portalExiste)
      {  
        this.portalVuelta = new Portal(this, 350, 500, "finalFuego");
        this.portalExiste = true;
      }
      else if(this.activarPortal)
      {
        data.jefesIslasRestantes--;
        this.scene.stop('jefeFuego');
        this.scene.resume('game');
        this.activarPortal = false;
      }
    }
  }
}