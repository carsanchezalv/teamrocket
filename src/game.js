import Pikachu from "./pikachu.js";
import Enemy from "./enemy.js";
import Gema from "./gema.js";
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
import { data } from "./data.js";
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

     //gema
    this.load.spritesheet('gema','assets/icons/personajes/Gema/gemas.png' ,{ frameWidth: 16, frameHeight: 15 });

    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
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
    
    for(let i = 0; i < 4; i++) {
      this.gemaSprite = new Gema(this, x - z, y - z);
      this.groupGemas.add(this.gemaSprite);
      z += 30; 
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

    //FUEGO
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
    //this.fuego1Sprite = new Fuego1(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego1Sprite);

    //this.fuego2Sprite = new Fuego2(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego2Sprite);
    
    //this.fuego3Sprite = new Fuego3(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego3Sprite);

    //this.fuego4Sprite = new Fuego4(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego4Sprite);

    //this.fuego5Sprite = new Fuego5(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego5Sprite);

    //this.fuego6Sprite = new Fuego6(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego6Sprite);
   
    //this.fuego7Sprite = new Fuego7(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego7Sprite);

    //this.fuego8Sprite = new Fuego8(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego8Sprite);

    //this.fuego9Sprite = new Fuego9(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego9Sprite);
   
    //this.fuego10Sprite = new Fuego10(this, x + z, y - z);
    //z += 20;
    //this.groupEnemies.add(this.fuego10Sprite);

    //this.fuego12Sprite = new Fuego12(this, x + z, y - z);
    //7z += 20;
    //this.groupEnemies.add(this.fuego12Sprite);

    /* 
    for(let i = 0; i < 4; i++) {
      this.enemigoSprite = new Enemy(this, x + z, y + z, "enemigo"+this.numEnemy);
      this.groupEnemies.add(this.enemigoSprite);
      this.numEnemy += 1;
      z += 30; 
    }
    */
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