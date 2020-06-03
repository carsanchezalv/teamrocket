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

    this.load.audio("musica_rayo", [
      "assets/music/Rayo.ogg",
      "assets/music/Rayo.mp3"
    ]);
    this.load.audio("musicaEvolucion", [
      "assets/music/Evolucion.ogg",
      "assets/music/Evolucion.mp3"
    ]);
    this.load.audio("musicaAtaque", [
      "assets/music/Ataque.ogg",
      "assets/music/Ataque.mp3"
    ]);

    this.load.audio("musicaPortal", [
      "assets/music/Portal.ogg",
      "assets/music/Portal.mp3"
    ]);
    this.load.audio("musicaDamage", [
      "assets/music/Damage.ogg",
      "assets/music/Damage.mp3"
    ]);
    this.load.audio("musicaRecuperarse", [
      "assets/music/Recuperarse.ogg",
      "assets/music/Recuperarse.mp3"
    ]);



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

  init(datos) {
    this.vida = datos.vida;
    this.puntos = datos.puntos;
  }

  create() {

    this.map = this.make.tilemap({ 
      key: 'mapElectricidad', 
      tileWidth: 4848, 
      tileHeight: 2424
    });

    let musicaMuroConfig = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    };
    this.musicaMuro = this.sound.add('musicaMuro', musicaMuroConfig);

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
    this.pikachuSprite.vida = this.vida;
    //
    this.vidaPikachu = new Estado(this);
    this.puntuacion = new Puntuacion(this)

    // Enemigo
    this.xJefe = 420;
    this.yJefe = 150;
    this.jefe = new Zapdos(this, this.xJefe, this.yJefe);
       

    // Colisiones
    this.physics.add.collider(this.pikachuSprite, this.borde, () => { if(!this.musicaMuro.isPlaying)this.musicaMuro.play()});
    this.physics.add.collider(this.jefe, this.borde);
    
    
    // Camera zoom
    const camera = this.cameras.main;
    camera.setZoom(2);
    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.startFollow(this.pikachuSprite);

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
    this.music = this.sound.add('musica_rayo', config);
    if(data.musica) {  
      this.music.play();
    }
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
        this.music.stop();
        data.jefesIslasRestantes--;
        this.scene.stop('jefeElectricidad');
        this.scene.resume('game');
        this.activarPortal = false;
      }
    }
  }
}