import Pikachu from "./pikachu.js";
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {  
   //   this.load.image("logo", "assets/favicon.png")

    this.load.tilemapTiledJSON('tilemap', 'assets/tiles/mapa/mapa_team_rocket.json');
      
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
  

 //   this.load.image("fondo", "assets/textures/mapaportada.png")

    this.load.audio("musica_portada", [
      "assets/music/portada.ogg",
      "assets/music/portada.mp3"
    ]);
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
  }

  create() {
    this.map = this.make.tilemap({ 
      key: 'tilemap', 
      tileWidth: 64, 
      tileHeight: 64 
    });

    this.map.addTilesetImage('dungeon-0', 'dungeon0');
    this.map.addTilesetImage('dungeon-1', 'dungeon1');
    this.map.addTilesetImage('dungeon-4', 'dungeon4');
    this.map.addTilesetImage('dungeon-6', 'dungeon6');
    this.map.addTilesetImage('dungeon-8', 'dungeon8');
    this.map.addTilesetImage('dungeon-9', 'dungeon9');
    this.map.addTilesetImage('dungeon-10', 'dungeon10');
    this.map.addTilesetImage('dungeon-11', 'dungeon11');
    this.map.addTilesetImage('dungeon-12', 'dungeon12');
    this.map.addTilesetImage('dungeon-13', 'dungeon13');
    this.map.addTilesetImage('dungeon-14', 'dungeon14');
    this.map.addTilesetImage('dungeon-33', 'dungeon33');
    this.map.addTilesetImage('dungeon-42', 'dungeon42');
    this.map.addTilesetImage('dungeon-54', 'dungeon54');

    // Capas, los nombres han de coincidir con los de las capas reales
    this.borde = this.map.createStaticLayer('borde', ['dungeon-0', 'dungeon-8', 'dungeon-9', 'dungeon-14','dungeon-54']);
    this.mar = this.map.createStaticLayer('mar', ['dungeon-0','dungeon-8', 'dungeon-9','dungeon-12','dungeon-14', 'dungeon-54']);
    this.rio = this.map.createStaticLayer('rio', ['dungeon-1', 'dungeon-4','dungeon-11','dungeon-13', 'dungeon-33']);
    this.suelo = this.map.createStaticLayer('suelo', ['dungeon-0', 'dungeon-1','dungeon-4','dungeon-8','dungeon-9','dungeon-11','dungeon-12','dungeon-13','dungeon-14', 'dungeon-33']);

    
    // Físicas según capa
    this.borde.setCollisionByProperty( true );
    this.mar.setCollisionByProperty( true );
    this.rio.setCollisionByProperty( true );
    
    let x = 270;
    let y = 430;
    this.pikachuSprite = new Pikachu(this, x, y);

    this.physics.add.collider(this.pikachuSprite, this.borde);
    this.physics.add.collider(this.pikachuSprite, this.mar);
    this.physics.add.collider(this.pikachuSprite, this.rio);

  // Para que colisionen los personajes que tengan un rango de ID concreto
  /*
    this.borde.setCollisionBetween(0, 999);
    this.mar.setCollisionBetween(0, 999);
    this.rio.setCollisionBetween(0, 999);
  */
 
    // Música
    let config = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    let music = this.sound.add('musica_portada', config);
    music.play();
    
    /*
    this.add
    .text(16, 16, `Derrota a los guardianes de cada territorio.\nTerritorio actual: ${this.territorio}.\nGuardianes restantes: ${this.guardianes}`, {
        font: "18px Press Start 2P",
        fill: "#E60026",
        padding: { x: 20, y: 20 },
        backgroundColor: "#fff88f"
    })     
    .setScrollFactor(0);
    */
  }

  update(time, delta) {
    this.pikachuSprite.preUpdate(time, delta);
  }
}