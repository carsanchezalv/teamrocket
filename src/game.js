
import Pikachu from "./pikachu.js";
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {  
   //   this.load.image("logo", "assets/favicon.png")
    this.load.image("fondo", "assets/textures/mapaportada.png")
  //     this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
  //     this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
    this.load.audio("musica_portada", [
      "assets/music/portada.ogg",
      "assets/music/portada.mp3"
    ]);
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
  }

  create() {
   
    // Portada
    this.add.image(700, 400, "fondo"); //////

/*  
    this.load.tilemapTiledJSON('tilemap', 'tilemap.json');
    this.load.image('patronesTilemap', 'images/patrones.png');

    this.map = this.make.tilemap({ 
      key: 'tilemap', 
      tileWidth: 64, 
      tileHeight: 64 
    });

    this.map.addTilesetImage('patrones', 'patronesTilemap');

    // Capas
    this.backgroundLayer = this.map.createStaticLayer('BackgroundLayer', [tileset1, tileset2]);
    this.groundLayer = this.map.createStaticLayer('GroundLayer', [tileset1, tileset2]);
    this.foreground = this.map.createStaticLayer('Foreground', [tileset1, tileset2]);

    // Físicas según capa
    suelo.setCollisionByProperty({ colisiona: true });

    // Para que colisionen los personajes que tengan un rango de ID concreto
    suelo.foreground.setCollisionBetween(0, 999);

    // colision por exclusion (?)
    layer.setCollisionByExclusion([93, 94, 95, 96], true);
*/

    let x = 500;
    let y = 200;
    this.pikachuSprite = new Pikachu(this, x, y);
 //   this.add.existing(this.pikachuSprite);

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