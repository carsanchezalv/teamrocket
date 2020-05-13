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

    // Trampillas
    this.load.spritesheet('trampilla', 'assets/tiles/dungeon-common.png',{ frameWidth: 24, frameHeight: 24 });

    // Portal
    this.load.spritesheet('portal', 'assets/tiles/portal.png',{ frameWidth: 256, frameHeight: 256 });
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

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['dungeon-0', 'dungeon-8', 'dungeon-9', 'dungeon-14','dungeon-54']);
    this.mar = this.map.createStaticLayer('mar', ['dungeon-0','dungeon-8', 'dungeon-9','dungeon-12','dungeon-14', 'dungeon-54']);
    this.rio = this.map.createStaticLayer('rio', ['dungeon-1', 'dungeon-4','dungeon-11','dungeon-13', 'dungeon-33']);
    this.suelo = this.map.createStaticLayer('suelo', ['dungeon-0', 'dungeon-1','dungeon-4','dungeon-8','dungeon-9','dungeon-11','dungeon-12','dungeon-13','dungeon-14', 'dungeon-33','dungeon-54','dungeon-91']);

    
   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde.setCollisionBetween(0, 9999);
    this.mar.setCollisionBetween(0, 9999);
    this.rio.setCollisionBetween(0, 9999);

    let x = 3778;
    let y = 2067;
    let z = 20;
    this.numEnemy = 0;
    this.tamano_celda = 24;

    this.pikachuSprite = new Pikachu(this, x, y);
    
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
    
    this.numGemas = 250;
   
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
    z = 50;
    
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
    let enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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

    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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

    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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

    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
   enemigosMismoTipo = 3;
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
   enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
    enemigosMismoTipo = 3;
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
/*
    // Planta
    enemigosMismoTipo = 3;
    while(enemigosMismoTipo > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.plantaSprite = new Planta1(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
        this.groupEnemies.add(this.plantaSprite);
        enemigosMismoTipo--;
      }
    }
    
    this.plantaSprite = new Planta1(this, x + 20, y - 20);
    this.groupEnemies.add(this.plantaSprite);
*/

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
      this.tipoTrampilla = "trampa"+Phaser.Math.Between(1, 24);
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


    this.portalSprite = new Portal(this, x+20, y-20, "planta");
    this.groupPortales.add(this.portalSprite);

    this.numPortal = 1;
    while(this.numPortal > 0)
    {
      this.xRand = Phaser.Math.Between(0, 112);
      this.yRand = Phaser.Math.Between(0, 69);
      if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) !== null)
      {
        this.portalSprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "planta");
        this.groupPortales.add(this.portalSprite);
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
        this.portalSprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "fuego");
        this.groupPortales.add(this.portalSprite);
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
        this.portalSprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "agua");
        this.groupPortales.add(this.portalSprite);
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
        this.portalSprite = new Portal(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, "electricidad");
        this.groupPortales.add(this.portalSprite);
        --this.numPortal;
      }   
    }

    // Colisiones
    this.physics.add.collider(this.groupGemas, this.borde);
    this.physics.add.collider(this.groupGemas, this.mar);
    this.physics.add.collider(this.groupGemas, this.rio);

    this.physics.add.collider(this.pikachuSprite, this.borde);
    this.physics.add.collider(this.pikachuSprite, this.mar);
    this.physics.add.collider(this.pikachuSprite, this.rio);
    
    this.physics.add.collider(this.groupEnemies, this.borde);
    this.physics.add.collider(this.groupEnemies, this.mar);
    this.physics.add.collider(this.groupEnemies, this.rio);
    
    // Camera zoom
    const camera = this.cameras.main;
    camera.setZoom(2);
    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.startFollow(this.pikachuSprite);

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
    
    this.add.text(220, 117, `Player: ${data.nombre} \nScore: ${data.puntos} `, {
      font: "20px Press Start 2P",
      fill: "#E60026",
      padding: { x: 5, y: 3 },
      backgroundColor: "#fff88f"
    }).setScrollFactor(0);
  }
}