import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";
import Estado from "./estado.js";
import Puntuacion from "./puntuacion.js";

// Enemigo
import Articuno from './jefes/articuno.js';

// Portal
import Portal from './portal.js';


export default class JefeAgua extends Phaser.Scene {
  constructor() {
    super({ key: 'jefeAgua' });
  }

  preload() {  
    this.load.tilemapTiledJSON('mapAgua', 'assets/tiles/mapa/mapa_jefe_hielo.json');

    // Tilesets
    this.load.image('zonaAgua', 'assets/tiles/frigidcavern.png');
    
    // Portal
    this.load.spritesheet('portal', 'assets/tiles/portal.png',{ frameWidth: 256, frameHeight: 256 });

    this.load.audio("musica_agua", [
      "assets/music/Hielo.ogg",
      "assets/music/Hielo.mp3"
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
    this.load.spritesheet('articuno', 'assets/icons/personajes/Boss/boss_agua.png',{ frameWidth: 96, frameHeight: 112 });

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
    this.datosInit = datos;
    this.protagonista = this.datosInit.pikachuData;
  }

  create() {

    this.map = this.make.tilemap({ 
      key: 'mapAgua', 
      tileWidth: 4776, 
      tileHeight: 2688
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

    this.map.addTilesetImage('frigidcavern', 'zonaAgua');

    this.activarPortal = false;
    this.portalExiste = false;

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['frigidcavern']);
    this.suelo = this.map.createStaticLayer('suelo', ['frigidcavern']);

   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);

    this.xPikachu = 525;
    this.yPikachu = 600;

    this.pikachuSprite = new Pikachu(this, this.xPikachu, this.yPikachu);
    this.pikachuSprite.vida = this.protagonista.vida;
    this.pikachuSprite.evoluciones = this.protagonista.evoluciones;

    this.cursor = this.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space',
      pause:'p',
      c:'c',
      r:'r',
      e:'e'
    });


    this.vidaPikachu = new Estado(this);
    this.puntuacion = new Puntuacion(this)

    // Enemigo
    this.xJefe = 525;
    this.yJefe = 480;
    this.jefe = new Articuno(this, this.xJefe, this.yJefe);
      
    // Colisiones
    this.physics.add.collider(this.pikachuSprite, this.borde, () => { if(!this.musicaMuro.isPlaying) this.musicaMuro.play()});
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
    this.music = this.sound.add('musica_agua', config);
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
        this.portalVuelta = new Portal(this, 525, 610, "finalAgua");
        this.portalExiste = true;
      }
      else if(this.activarPortal)
      {
        data.jefesIslasRestantes--;
        this.pikachuSprite.x = 2952;
        this.pikachuSprite.y = 2760;
        this.scene.start('game', {pikachuData: this.pikachuSprite, groupGemas: this.datosInit.groupGemas,
                                      groupEnemies: this.datosInit.groupEnemies, groupTrampillas: this.datosInit.groupTrampillas,
                                      groupPortales: this.datosInit.groupPortales});
        this.scene.stop('jefeAgua');
        this.music.stop();    
        this.activarPortal = false;
      }
    }
  }
}