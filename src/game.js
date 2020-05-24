import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";

// Enemigo
import Enemy from "./enemy.js";

// Gemas
import Gema from "./gema.js";

// Trampillas
import Trampillas from './trampillas.js';

// Portales
import Portal from './portal.js';

// Fuego
import Fuego1 from "./fuego/fuego1.js";
import Fuego2 from "./fuego/fuego2.js";
import Fuego3 from "./fuego/fuego3.js";
import Fuego4 from "./fuego/fuego4.js";
import Fuego5 from "./fuego/fuego5.js";
import Fuego6 from "./fuego/fuego6.js";
import Fuego7 from "./fuego/fuego7.js";
import Fuego8 from "./fuego/fuego8.js";
import Fuego9 from "./fuego/fuego9.js";
import Fuego10 from "./fuego/fuego10.js";
import Fuego12 from "./fuego/fuego12.js";

// Agua
import Agua1 from "./agua/agua1.js";
import Agua2 from "./agua/agua2.js";
import Agua3 from "./agua/agua3.js";
import Agua4 from "./agua/agua4.js";
import Agua5 from "./agua/agua5.js";
import Agua6 from "./agua/agua6.js";
import Agua7 from "./agua/agua7.js";
import Agua8 from "./agua/agua8.js";
import Agua9 from "./agua/agua9.js";
import Agua10 from "./agua/agua10.js";
import Agua11 from "./agua/agua11.js";
import Agua12 from "./agua/agua12.js";
import Agua13 from "./agua/agua13.js";
import Agua14 from "./agua/agua14.js";
import Agua15 from "./agua/agua15.js";
import Agua16 from "./agua/agua16.js";

// Electricidad
import Electricidad1 from "./electricidad/electricidad1.js";
import Electricidad2 from "./electricidad/electricidad2.js";
import Electricidad3 from "./electricidad/electricidad3.js";
import Electricidad4 from "./electricidad/electricidad4.js";
import Electricidad5 from "./electricidad/electricidad5.js";
import Electricidad6 from "./electricidad/electricidad6.js";
import Electricidad7 from "./electricidad/electricidad7.js";
import Electricidad8 from "./electricidad/electricidad8.js";
import Electricidad9 from "./electricidad/electricidad9.js";
import Electricidad10 from "./electricidad/electricidad10.js";
import Electricidad11 from "./electricidad/electricidad11.js";

// Planta
import Planta1 from "./planta/planta1.js";
import Planta2 from "./planta/planta2.js";
import Planta3 from "./planta/planta3.js";
import Planta4 from "./planta/planta4.js";
import Planta5 from "./planta/planta5.js";
import Planta6 from "./planta/planta6.js";
import Planta7 from "./planta/planta7.js";
import Planta8 from "./planta/planta8.js";
import Planta9 from "./planta/planta9.js";
import Planta10 from "./planta/planta10.js";
import Planta11 from "./planta/planta11.js";
import Planta12 from "./planta/planta12.js";
import Planta13 from "./planta/planta13.js";
import Planta14 from "./planta/planta14.js";
import Planta15 from "./planta/planta15.js";

// Barra estado
import Estado from "./estado.js";
import Puntuacion from "./puntuacion.js";

// Jefes
import BossPlanta from "./jefePlanta.js";


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {  
    this.load.tilemapTiledJSON('tilemap', 'assets/tiles/mapa/mapa_team_rocket.json');
    
    this.load.video('intro', 'assets/video/intro.mp4');

    // Tilesets
    this.load.image('dungeon0', 'assets/tiles/dungeon-0.png');
    this.load.image('dungeon1', 'assets/tiles/dungeon-1.png');
    this.load.image('dungeon4', 'assets/tiles/dungeon-4.png');
    this.load.image('dungeon6', 'assets/tiles/dungeon-6.png');
    this.load.image('dungeon8', 'assets/tiles/dungeon-8.png');
    this.load.image('dungeon9', 'assets/tiles/dungeon-9.png');
    this.load.image('dungeon10', 'assets/tiles/dungeon-10.png');
    this.load.image('dungeon11', 'assets/tiles/dungeon-11.png');
    this.load.image('dungeon12', 'assets/tiles/dungeon-12.png');
    this.load.image('dungeon13', 'assets/tiles/dungeon-13.png');
    this.load.image('dungeon14', 'assets/tiles/dungeon-14.png');
    this.load.image('dungeon33', 'assets/tiles/dungeon-33.png');
    this.load.image('dungeon42', 'assets/tiles/dungeon-42.png');
    this.load.image('dungeon54', 'assets/tiles/dungeon-54.png');
    this.load.image('dungeon91', 'assets/tiles/dungeon-91.png');
    this.load.image('puente', 'assets/tiles/puente-1.png');

    this.load.audio("musica_portada", [
      "assets/music/portada.ogg",
      "assets/music/portada.mp3"
    ]);

    // Gema
    this.load.spritesheet('gema','assets/icons/personajes/Gema/gemas.png' ,{ frameWidth: 16, frameHeight: 15 });

    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
    
    // Fuego
    this.load.spritesheet('fuego1', 'assets/icons/personajes/Fuego/1.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('fuego2', 'assets/icons/personajes/Fuego/2.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('fuego3', 'assets/icons/personajes/Fuego/3.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('fuego4', 'assets/icons/personajes/Fuego/4.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('fuego5', 'assets/icons/personajes/Fuego/5.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('fuego6', 'assets/icons/personajes/Fuego/6.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('fuego7', 'assets/icons/personajes/Fuego/7.png',{ frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('fuego8', 'assets/icons/personajes/Fuego/8.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('fuego9', 'assets/icons/personajes/Fuego/9.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('fuego10', 'assets/icons/personajes/Fuego/10.png',{ frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('fuego12', 'assets/icons/personajes/Fuego/12.png',{ frameWidth: 48, frameHeight: 80 });
  
    // Agua
    this.load.spritesheet('agua1', 'assets/icons/personajes/Agua/1.png',{ frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('agua2', 'assets/icons/personajes/Agua/2.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua3', 'assets/icons/personajes/Agua/3.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua4', 'assets/icons/personajes/Agua/4.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua5', 'assets/icons/personajes/Agua/5.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua6', 'assets/icons/personajes/Agua/6.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua7', 'assets/icons/personajes/Agua/7.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('agua8', 'assets/icons/personajes/Agua/8.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua9', 'assets/icons/personajes/Agua/9.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua10', 'assets/icons/personajes/Agua/10.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua11', 'assets/icons/personajes/Agua/11.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua12', 'assets/icons/personajes/Agua/12.png',{ frameWidth: 96, frameHeight: 128 });
    this.load.spritesheet('agua13', 'assets/icons/personajes/Agua/13.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('agua14', 'assets/icons/personajes/Agua/14.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua15', 'assets/icons/personajes/Agua/15.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('agua16', 'assets/icons/personajes/Agua/16.png',{ frameWidth: 48, frameHeight: 48 });

    // Electricidad
    this.load.spritesheet('electricidad1', 'assets/icons/personajes/Electricidad/1.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('electricidad2', 'assets/icons/personajes/Electricidad/2.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('electricidad3', 'assets/icons/personajes/Electricidad/3.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('electricidad4', 'assets/icons/personajes/Electricidad/4.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('electricidad5', 'assets/icons/personajes/Electricidad/5.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('electricidad6', 'assets/icons/personajes/Electricidad/6.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('electricidad7', 'assets/icons/personajes/Electricidad/7.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('electricidad8', 'assets/icons/personajes/Electricidad/8.png',{ frameWidth: 48, frameHeight: 80 });
    this.load.spritesheet('electricidad9', 'assets/icons/personajes/Electricidad/9.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('electricidad10', 'assets/icons/personajes/Electricidad/10.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('electricidad11', 'assets/icons/personajes/Electricidad/11.png',{ frameWidth: 48, frameHeight: 64 });

    //Planta
    this.load.spritesheet('planta1', 'assets/icons/personajes/Planta/1.png',{ frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('planta2', 'assets/icons/personajes/Planta/2.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta3', 'assets/icons/personajes/Planta/3.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta4', 'assets/icons/personajes/Planta/4.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('planta5', 'assets/icons/personajes/Planta/5.png',{ frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('planta6', 'assets/icons/personajes/Planta/6.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('planta7', 'assets/icons/personajes/Planta/7.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta8', 'assets/icons/personajes/Planta/8.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('planta9', 'assets/icons/personajes/Planta/9.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta10', 'assets/icons/personajes/Planta/10.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('planta11', 'assets/icons/personajes/Planta/11.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('planta12', 'assets/icons/personajes/Planta/12.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta13', 'assets/icons/personajes/Planta/13.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta14', 'assets/icons/personajes/Planta/14.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('planta15', 'assets/icons/personajes/Planta/15.png',{ frameWidth: 48, frameHeight: 64 });
    // Trampillas
    this.load.spritesheet('trampilla', 'assets/tiles/dungeon-common.png',{ frameWidth: 24, frameHeight: 24 });

    // Portal
    this.load.spritesheet('portal', 'assets/tiles/portal.png',{ frameWidth: 256, frameHeight: 256 });
  
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

    // Barra puntos
    this.load.image('puntos00', 'assets/estado/Base/XP Bar Animated Yellow 9.png');
    this.load.image('puntos01', 'assets/estado/Base/XP Bar Animated Yellow 8.png');
    this.load.image('puntos02', 'assets/estado/Base/XP Bar Animated Yellow 7.png');
    this.load.image('puntos03', 'assets/estado/Base/XP Bar Animated Yellow 6.png');
    this.load.image('puntos04', 'assets/estado/Base/XP Bar Animated Yellow 5.png');
    this.load.image('puntos05', 'assets/estado/Base/XP Bar Animated Yellow 4.png');
    this.load.image('puntos06', 'assets/estado/Base/XP Bar Animated Yellow 3.png');
    this.load.image('puntos07', 'assets/estado/Base/XP Bar Animated Yellow 2.png');
    this.load.image('puntos08', 'assets/estado/Base/XP Bar Animated Yellow 1.png');
    this.load.image('puntos10', 'assets/estado/Base/XP Bar Animated Green 9.png');
    this.load.image('puntos11', 'assets/estado/Base/XP Bar Animated Green 8.png');
    this.load.image('puntos12', 'assets/estado/Base/XP Bar Animated Green 7.png');
    this.load.image('puntos13', 'assets/estado/Base/XP Bar Animated Green 6.png');
    this.load.image('puntos14', 'assets/estado/Base/XP Bar Animated Green 5.png');
    this.load.image('puntos15', 'assets/estado/Base/XP Bar Animated Green 4.png');
    this.load.image('puntos16', 'assets/estado/Base/XP Bar Animated Green 3.png');
    this.load.image('puntos17', 'assets/estado/Base/XP Bar Animated Green 2.png');
    this.load.image('puntos18', 'assets/estado/Base/XP Bar Animated Green 1.png');
    this.load.image('puntos20', 'assets/estado/Base/Power Bar Animated 9.png');
    this.load.image('puntos21', 'assets/estado/Base/Power Bar Animated 8.png');
    this.load.image('puntos22', 'assets/estado/Base/Power Bar Animated 7.png');
    this.load.image('puntos23', 'assets/estado/Base/Power Bar Animated 6.png');
    this.load.image('puntos24', 'assets/estado/Base/Power Bar Animated 5.png');
    this.load.image('puntos25', 'assets/estado/Base/Power Bar Animated 4.png');
    this.load.image('puntos26', 'assets/estado/Base/Power Bar Animated 3.png');
    this.load.image('puntos27', 'assets/estado/Base/Power Bar Animated 2.png');
    this.load.image('puntos28', 'assets/estado/Base/Power Bar Animated 1.png');
    this.load.image('puntos30', 'assets/estado/Base/Life Bar Animated 9.png');
    this.load.image('puntos31', 'assets/estado/Base/Life Bar Animated 8.png');
    this.load.image('puntos32', 'assets/estado/Base/Life Bar Animated 7.png');
    this.load.image('puntos33', 'assets/estado/Base/Life Bar Animated 6.png');
    this.load.image('puntos34', 'assets/estado/Base/Life Bar Animated 5.png');
    this.load.image('puntos35', 'assets/estado/Base/Life Bar Animated 4.png');
    this.load.image('puntos36', 'assets/estado/Base/Life Bar Animated 3.png');
    this.load.image('puntos37', 'assets/estado/Base/Life Bar Animated 2.png');
    this.load.image('puntos38', 'assets/estado/Base/Life Bar Animated 1.png');

    // Niveles
    this.load.image('level0', 'assets/estado/niveles/0.png');
    this.load.image('level1', 'assets/estado/niveles/1.png');
    this.load.image('level2', 'assets/estado/niveles/2.png');
    this.load.image('level3', 'assets/estado/niveles/3.png');
    this.load.image('level4', 'assets/estado/niveles/4.png');
    this.load.image('level5', 'assets/estado/niveles/5.png');
    this.load.image('level6', 'assets/estado/niveles/6.png');
    this.load.image('level7', 'assets/estado/niveles/7.png');
    this.load.image('level8', 'assets/estado/niveles/8.png');
    this.load.image('level9', 'assets/estado/niveles/9.png');
  }

  create() {

    this.map = this.make.tilemap({ 
      key: 'tilemap', 
      tileWidth: 6912, 
      tileHeight: 3840 
    });

    this.map.addTilesetImage('dungeon-0', 'dungeon0');
    this.map.addTilesetImage('dungeon-1', 'dungeon1');
    this.map.addTilesetImage('dungeon-4', 'dungeon4');
    this.map.addTilesetImage('dungeon-8', 'dungeon8');
    this.map.addTilesetImage('dungeon-9', 'dungeon9');
    this.map.addTilesetImage('dungeon-11', 'dungeon11');
    this.map.addTilesetImage('dungeon-12', 'dungeon12');
    this.map.addTilesetImage('dungeon-13', 'dungeon13');
    this.map.addTilesetImage('dungeon-14', 'dungeon14');
    this.map.addTilesetImage('dungeon-33', 'dungeon33');
    this.map.addTilesetImage('dungeon-42', 'dungeon42');
    this.map.addTilesetImage('dungeon-54', 'dungeon54');
    this.map.addTilesetImage('dungeon-91', 'dungeon91');
    this.map.addTilesetImage('puente-1', 'puente');

    // Capas, los nombres han de coincidir con los de las capas reales
    
    this.borde = this.map.createStaticLayer('borde', ['dungeon-0', 'dungeon-8', 'dungeon-9', 'dungeon-14','dungeon-54']);
    this.mar = this.map.createStaticLayer('mar', ['dungeon-0','dungeon-8', 'dungeon-9','dungeon-12','dungeon-14', 'dungeon-54']);
    this.rio = this.map.createStaticLayer('rio', ['dungeon-1', 'dungeon-4','dungeon-11','dungeon-13', 'dungeon-33']);
    this.suelo = this.map.createStaticLayer('suelo', ['dungeon-0', 'dungeon-1','dungeon-4','dungeon-8','dungeon-9','dungeon-11','dungeon-12','dungeon-13','dungeon-14', 'dungeon-33','dungeon-54','dungeon-91']);
    this.puente_madera = this.map.createStaticLayer('puente_madera', ['puente-1']);
    this.borde_puente = this.map.createStaticLayer('borde_puente', ['dungeon-14']);

    this.movimientoBarra = true;
    this.animacionHerido = false;
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde_puente.setCollisionBetween(0, 9999);
    this.borde.setCollisionBetween(0, 9999);
  //  this.mar.setCollisionBetween(0, 9999);
    this.rio.setCollisionBetween(0, 9999);

    this.x = 3778;
    this.y = 2067;
    
    this.numEnemy = 0;
    this.tamano_celda = 24;

    this.activarJefePlanta = false;   
    this.activarJefeAgua = false;
    this.activarJefeFinal = false;
    this.activarJefeFuego = false;
    this.activarJefeElectricidad = false;

    this.pikachuSprite = new Pikachu(this, this.x, this.y);
    
    //Gemas
    this.groupGemas = this.physics.add.group({
      classType: Gema,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
    });
    
    this.numGemas = 150;
   
    while(this.numGemas > 0)
    {
      this.xRand = Phaser.Math.Between(0, 6096/this.tamano_celda);
      this.yRand = Phaser.Math.Between(0, 3827/this.tamano_celda);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.gemaSprite = new Gema(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupGemas.add(this.gemaSprite);
        --this.numGemas;
      }   
    }
    
    // Enemigos
    this.groupEnemies = this.physics.add.group({
      classType: Enemy,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
    });

    //Fuego
    let enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego1(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego2(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego3(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego4(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego5(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }

    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego6(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego7(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }

    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego8(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego9(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }

    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego10(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.fuegoSprite = new Fuego12(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.fuegoSprite);
        enemigosMismoTipo--;
      }
    }


  // Agua
   enemigosMismoTipo = 1;
   while(enemigosMismoTipo > 0)
   {
     this.xRand = Phaser.Math.Between(0, 119);
     this.yRand = Phaser.Math.Between(95, 147);
     if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
     {
       this.aguaSprite = new Agua1(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
       this.groupEnemies.add(this.aguaSprite);
       enemigosMismoTipo--;
     }
   }
   enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua2(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua3(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua4(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua5(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua6(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua7(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua8(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua9(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua10(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua11(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      } 
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua12(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua13(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua14(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua15(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.aguaSprite = new Agua16(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.aguaSprite);
        enemigosMismoTipo--;
      }
    }

    // Electricidad
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad1(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad2(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad3(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad4(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad5(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad6(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad7(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad8(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad9(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad10(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.electricidadSprite = new Electricidad11(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.electricidadSprite);
        enemigosMismoTipo--;
      }
    }

    // GRUPO PLANTA
    this.groupPlanta = this.physics.add.group({
      classType: Enemy,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
    });


    // Planta
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta1(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta2(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta3(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta4(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta5(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta6(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta7(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta8(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta9(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta10(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta11(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta12(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta13(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta14(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    enemigosMismoTipo = 1;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta15(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        this.groupPlanta.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    
    this.groupTrampillas = this.physics.add.group({
      classType: Trampillas,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
    });

    this.numTrampillas = 50;
    while(this.numTrampillas > 0)
    {
      this.xRand = Phaser.Math.Between(0, 6096/this.tamano_celda);
      this.yRand = Phaser.Math.Between(0, 3827/this.tamano_celda);
      this.tipoTrampilla = "trampa"+Phaser.Math.Between(7, 24);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.trampillaSprite = new Trampillas(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, this.tipoTrampilla);
        this.groupTrampillas.add(this.trampillaSprite);
        --this.numTrampillas;
      }   
    }

    this.groupPortales = this.physics.add.group({
      classType: Portal,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
    });


 //   this.portal0Sprite = new Portal(this, this.pikachuSprite.x, this.pikachuSprite.y + 100, "planta");
 //   this.groupPortales.add(this.portal0Sprite);
   
    
    this.numPortal = 1;
    while(this.numPortal > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.portal1Sprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "planta");
        this.groupPortales.add(this.portal1Sprite);
        --this.numPortal;
      }   
    }
    
    this.numPortal = 1;
    while(this.numPortal > 0)
    {
      this.xRand = Phaser.Math.Between(183, 280);
      this.yRand = Phaser.Math.Between(0, 77);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.portal2Sprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "fuego");    
        this.groupPortales.add(this.portal2Sprite);
        --this.numPortal;
      }   
    }

    this.numPortal = 1;
    while(this.numPortal > 0)
    {
      this.xRand = Phaser.Math.Between(0, 119);
      this.yRand = Phaser.Math.Between(95, 147);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.portal3Sprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "agua");
        this.groupPortales.add(this.portal3Sprite);
        --this.numPortal;
      }   
    }
    
    this.numPortal = 1;
    while(this.numPortal > 0)
    {
      this.xRand = Phaser.Math.Between(188, 268);
      this.yRand = Phaser.Math.Between(102, 152);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.portal4Sprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "electricidad");
        this.groupPortales.add(this.portal4Sprite);
        --this.numPortal;
      }   
    }

    this.vidaPikachu = new Estado(this);

    this.puntuacion = new Puntuacion(this);

    
    // Colisiones
    this.physics.add.collider(this.groupGemas, this.borde);
    this.physics.add.collider(this.groupGemas, this.rio);
    this.physics.add.collider(this.groupGemas, this.borde_puente);

    this.physics.add.collider(this.pikachuSprite, this.borde);
    this.physics.add.collider(this.pikachuSprite, this.rio);
    this.physics.add.collider(this.pikachuSprite, this.borde_puente);
    
    this.physics.add.collider(this.groupEnemies, this.borde);
    this.physics.add.collider(this.groupEnemies, this.rio);
    this.physics.add.collider(this.groupEnemies, this.borde_puente);
    
    // Camera zoom
    this.camera = this.cameras.main;
    this.camera.setZoom(2);
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.camera.startFollow(this.pikachuSprite);
    
  // Música
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
  }

  update(time, delta) {
   
    this.puntuacion.updatePuntos(data.puntos);
    this.vidaPikachu.updateVida(this.pikachuSprite.vida, this.animacionHerido);

    // Aparición portal final
    if(data.jefesIslasRestantes === 0)
    {
      data.jefesIslasRestantes++;
      this.portalFinalSprite = new Portal(this, this.x, this.y, "centro");
      this.groupPortales.add(this.portalFinalSprite);
    }

    // Portal planta
    if(this.activarJefePlanta)
    {
      this.activarJefePlanta = false;
      this.pikachuSprite.x = 3264;
      this.pikachuSprite.y = 1392;
      
      this.scene.launch('jefePlanta');
      this.scene.pause('game');
    }

    // Portal Agua
    if(this.activarJefeAgua)
    {
      this.activarJefeAgua = false;
      this.scene.sleep('game');

      this.pikachuSprite.x = 2952;
      this.pikachuSprite.y = 2760;
      
      this.scene.launch('jefeAgua');
    }

    //Portal Fuego
    if(this.activarJefeFuego)
    {
      this.activarJefeFuego = false;

      this.pikachuSprite.x = 4560;
      this.pikachuSprite.y = 1392;

      this.scene.launch('jefeFuego');
      this.scene.pause('game');
    }

    // Portal Electricidad
   if(this.activarJefeElectricidad)
    {
      this.activarJefeElectricidad = false;
      this.pikachuSprite.x = 4416;
      this.pikachuSprite.y = 2760;

      this.scene.launch('jefeElectricidad');
      this.scene.pause('game');
    }

    // Portal Final
    if(this.activarJefeFinal)
    {
      this.scene.launch('jefeFinal');
      this.activarJefeFinal = false;
      
      this.scene.pause('game');
    }

  /*
    this.add.text(300, 170, `Player: ${data.nombre} \nScore: ${data.puntos}`, {
      font: "../fonts/pkmnem.ttf",
      fill: "#E60026",
      fontSize: '500px',
      padding: { x: 5, y: 3 },
      backgroundColor: "#fff88f"
    }).setScrollFactor(0);
    */
  }
}