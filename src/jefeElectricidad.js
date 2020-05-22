import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";
import Estado from "./estado.js";
import Puntuacion from "./puntuacion.js";

// Enemigo
import Zapdos from './jefes/zapdos.js';

// Portal
import Portal from './portal.js';


export default class JefeElectricidad extends Phaser.Scene {
  constructor() {
    super({ key: 'jefeElectricidad' });
  }

  preload() {  
    this.load.tilemapTiledJSON('mapElectricidad', 'assets/tiles/mapa/mapa_jefe_electricidad.json');

    // Tilesets
    this.load.image('zonaElectricidad', 'assets/tiles/thundermeadow.png');
    
    // Portal
    this.load.spritesheet('portal', 'assets/tiles/portal.png',{ frameWidth: 256, frameHeight: 256 });

 //   this.load.audio("musica", [
 //     "assets/music/portada.ogg",
 //     "assets/music/portada.mp3"
 //   ]);


    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });

    // Enemigo
    this.load.spritesheet('zapdos', 'assets/icons/personajes/Boss/boss_electricidad.png',{ frameWidth: 80, frameHeight: 112 });

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
      key: 'mapElectricidad', 
      tileWidth: 4848, 
      tileHeight: 2424
    });

    this.map.addTilesetImage('thundermeadow', 'zonaElectricidad');

    this.activarPortal = false;
    this.portalExiste = false;

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['thundermeadow']);
    this.suelo = this.map.createStaticLayer('suelo', ['thundermeadow']);
    
    
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);

    this.xPikachu = 420;
    this.yPikachu = 310;

    this.pikachuSprite = new Pikachu(this, this.xPikachu, this.yPikachu);
    this.vidaPikachu = new Estado(this);
    this.puntuacion = new Puntuacion(this)

    // Enemigo
    this.xJefe = 420;
    this.yJefe = 150;
    this.jefe = new Zapdos(this, this.xJefe, this.yJefe);
       

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
        this.portalVuelta = new Portal(this, 420, 300, "finalElectricidad");
        this.portalExiste = true;
      }
      else if(this.activarPortal)
      {
        data.jefesIslasRestantes--;
        this.scene.stop('jefeElectricidad');
        this.scene.resume('game');
        this.activarPortal = false;
      }
    }
  }
}