import { data } from "./data.js";

// Pikachu
import Pikachu from "./pikachu.js";

// Enemigo
import Enemy from "./enemy.js";

// Gemas
import Gema from "./gema.js";

// Fuego
import Fuego1 from "./fuego/fuego1.js";
import Fuego2 from "./fuego/fuego2.js";
import Fuego3 from "./fuego/fuego3.js";

// Agua
import Agua1 from "./agua/agua1.js";
import Agua2 from "./agua/agua2.js";
import Agua3 from "./agua/agua3.js";
// import Agua4 from "./agua/agua4.js";
// import Agua5 from "./agua/agua5.js";
// import Agua6 from "./agua/agua6.js";
// import Agua7 from "./agua/agua7.js";
// import Agua8 from "./agua/agua8.js";
// import Agua9 from "./agua/agua9.js";
// import Agua10 from "./agua/agua10.js";
// import Agua11 from "./agua/agua11.js";
// import Agua12 from "./agua/agua12.js";
// import Agua13 from "./agua/agua13.js";
// import Agua14 from "./agua/agua14.js";
// import Agua15 from "./agua/agua15.js";

// Electricidad

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
  
    // Agua
    this.load.spritesheet('agua1', 'assets/icons/personajes/Agua/1.png',{ frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('agua2', 'assets/icons/personajes/Agua/2.png',{ frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('agua3', 'assets/icons/personajes/Agua/3.png',{ frameWidth: 48, frameHeight: 48 });
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
    this.tamano_celda = 24;
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

  // Fuego
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