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

import Mensaje from './mensajes/mensaje.js';

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

// Grafismos
import Estado from "./estado.js";
import Puntuacion from "./puntuacion.js";
import Objetivo from "./objetivos.js";
import Evoluciones from "./evoluciones.js";

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

    this.load.audio("musicaEvolucion", [
      "assets/music/Evolucion.ogg",
      "assets/music/Evolucion.mp3"
    ]);
    this.load.audio("musicaGema", [
      "assets/music/Gema.ogg",
      "assets/music/Gema.mp3"
    ]);
    this.load.audio("musicaTrampilla", [
      "assets/music/Trampilla.ogg",
      "assets/music/Trampilla.mp3"
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
    this.load.audio("musicaMuro", [
      "assets/music/Muro.ogg",
      "assets/music/Muro.mp3"
    ]);
    this.load.audio("musicaRecuperarse", [
      "assets/music/Recuperarse.ogg",
      "assets/music/Recuperarse.mp3"
    ]);

    // Gema
    this.load.spritesheet('gema','assets/icons/personajes/Gema/gemas.png' ,{ frameWidth: 16, frameHeight: 15 });

    // Pikachu
    this.load.spritesheet('protagonista', 'assets/icons/personajes/Protagonista/8/25.png',{ frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('protagonista_raichu', 'assets/icons/personajes/Protagonista/8/26.png',{ frameWidth: 64, frameHeight: 64 });
    
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

    // Objetivos
    this.load.image('snorlaxDesactivado', 'assets/Messages/snorlaxDesactivado.png');
    this.load.image('snorlaxActivado', 'assets/Messages/snorlaxActivado.png');
    this.load.image('articunoDesactivado', 'assets/Messages/articunoDesactivado.png');
    this.load.image('articunoActivado', 'assets/Messages/articunoActivado.png');
    this.load.image('zapdosDesactivado', 'assets/Messages/zapdosDesactivado.png');
    this.load.image('zapdosActivado', 'assets/Messages/zapdosActivado.png');
    this.load.image('moltresDesactivado', 'assets/Messages/moltresDesactivado.png');
    this.load.image('moltresActivado', 'assets/Messages/moltresActivado.png');
    this.load.image('mewtwoDesactivado', 'assets/Messages/mewtwoDesactivado.png');
    this.load.image('mewtwoActivado', 'assets/Messages/mewtwoActivado.png');

    // Evoluciones marcador
    this.load.image('evolucionActivado', 'assets/Messages/evolucionActivado.png');
    this.load.image('evolucionDesactivado', 'assets/Messages/evolucionDesactivado.png');
    
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

    // Mensajes
    this.load.image('mensajeTrampa7', 'assets/Messages/Trampilla7.png');
    this.load.image('mensajeTrampa8', 'assets/Messages/Trampilla8.png');
    this.load.image('mensajeTrampa9', 'assets/Messages/Trampilla9.png');
    this.load.image('mensajeTrampa10', 'assets/Messages/Trampilla10.png');
    this.load.image('mensajeTrampa12', 'assets/Messages/Trampilla12.png');
    this.load.image('mensajeTrampa13', 'assets/Messages/Trampilla13.png');
    this.load.image('mensajeTrampa16', 'assets/Messages/Trampilla16.png');
    this.load.image('mensajeTrampa17', 'assets/Messages/Trampilla17.png');
    this.load.image('mensajeTrampa18', 'assets/Messages/Trampilla18.png');
    this.load.image('mensajeTrampa19', 'assets/Messages/Trampilla19.png');
    this.load.image('mensajeTrampa20', 'assets/Messages/Trampilla20.png');
    this.load.image('mensajeTrampa21', 'assets/Messages/Trampilla21.png');
    this.load.image('mensajeTrampa22', 'assets/Messages/Trampilla22.png');
    this.load.image('mensajeTrampa24', 'assets/Messages/Trampilla24.png');
    this.load.image('mensajeNada', 'assets/Messages/TrampillaNada.png');
    this.load.image('evolucionar1','assets/Messages/evolucionar1.png');
    this.load.image('evolucionar2','assets/Messages/evolucionar2.png');
    this.load.image('evolucionar3','assets/Messages/evolucionar3.png');
    this.load.image('evolucionar4','assets/Messages/evolucionar4.png');
    this.load.image('recuperar0','assets/Messages/recuperar0.png');
    this.load.image('recuperar1','assets/Messages/recuperar1.png');
    this.load.image('recuperar2','assets/Messages/recuperar2.png');
    this.load.image('nivel2','assets/Messages/nivel2.png');
    this.load.image('nivel3','assets/Messages/nivel3.png');
    this.load.image('nivel4','assets/Messages/nivel4.png');
    this.load.image('nivel5','assets/Messages/nivel5.png');
    this.load.image('nivel6','assets/Messages/nivel6.png');
    this.load.image('tutorial','assets/Messages/tutorial.png');
  }

  init(datos) {
    if(datos.pikachuData == null)
      this.datosInit = null;
    else
      this.datosInit = datos;
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

    this.animacionHerido = false;

   // Para que colisionen los personajes que tengan un rango de ID concreto
    this.borde_puente.setCollisionBetween(0, 9999);
    this.borde.setCollisionBetween(0, 9999);
    this.rio.setCollisionBetween(0, 9999);

    this.x = 3778;
    this.y = 2067;
    
    this.numEnemy = 0;
    this.tamano_celda = 24;

    this.haVuelto = false;
    this.mensajeActivo = false;
    this.tutorial = true;

    this.activarJefePlanta = false;   
    this.activarJefeAgua = false;
    this.activarJefeFinal = false;
    this.activarJefeFuego = false;
    this.activarJefeElectricidad = false;

    // Pikachu
    if(this.datosInit == null)
      this.pikachuSprite = new Pikachu(this, this.x, this.y);
    else
    {
      this.pikachuSprite = new Pikachu(this, this.datosInit.pikachuData.x, this.datosInit.pikachuData.y);
      this.pikachuSprite.vida = this.datosInit.pikachuData.vida;
      this.pikachuSprite.evoluciones = this.datosInit.pikachuData.evoluciones;
      this.pikachuSprite.puntuacion = this.datosInit.pikachuData.puntuacion;
      this.pikachuSprite.jefesIslasRestantes = this.datosInit.pikachuData.jefesIslasRestantes;
      this.pikachuSprite.snorlax = this.datosInit.pikachuData.snorlax;
      this.pikachuSprite.articuno = this.datosInit.pikachuData.articuno;
      this.pikachuSprite.zapdos = this.datosInit.pikachuData.zapdos;
      this.pikachuSprite.moltres = this.datosInit.pikachuData.moltres;
      this.pikachuSprite.mewtwo = this.datosInit.pikachuData.mewtwo;
      this.pikachuSprite.nivelRequerido = this.datosInit.pikachuData.nivelRequerido;
    }
    
    this.cursor = this.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space',
      pause:'p',
      c:'c',
      r:'r',
      e:'e',
      i: 'i'
    });


    // Gemas
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

    if(this.datosInit == null)
    {
      this.numGemas = 150;
    
      while(this.numGemas > 0)
      {
        this.xRand = Phaser.Math.Between(0, 6096/this.tamano_celda);
        this.yRand = Phaser.Math.Between(0, 3827/this.tamano_celda);
        if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) != null)
        {
          this.gemaSprite = new Gema(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda);
          this.groupGemas.add(this.gemaSprite);
          --this.numGemas;
        }   
      }
    }
    else
    {
      let numGemas = this.datosInit.groupGemas.length;
    
      for(let i = 0; i < numGemas; ++i)
      {
        this.gemaAux = this.datosInit.groupGemas[i];
        this.gemaNueva = new Gema(this, this.gemaAux.x, this.gemaAux.y);
        this.groupGemas.add(this.gemaNueva);
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

    if(this.datosInit == null)
    {
      // Fuego
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
          enemigosMismoTipo--;
        }
      }
    }
    else
    {
      let numEnemigos = this.datosInit.groupEnemies.length;
    
      for(let i = 0; i < numEnemigos; ++i)
      {
        this.enemigoAux = this.datosInit.groupEnemies[i];

        // Fuego
        if(this.enemigoAux.nombre === 'fuego1')
          this.enemigoNuevo = new Fuego1(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego2') 
          this.enemigoNuevo = new Fuego2(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego3') 
          this.enemigoNuevo = new Fuego3(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego4') 
          this.enemigoNuevo = new Fuego4(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego5') 
          this.enemigoNuevo = new Fuego5(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego6') 
          this.enemigoNuevo = new Fuego6(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego7') 
          this.enemigoNuevo = new Fuego7(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego8') 
          this.enemigoNuevo = new Fuego8(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego9') 
          this.enemigoNuevo = new Fuego9(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego10') 
          this.enemigoNuevo = new Fuego10(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'fuego11') 
          this.enemigoNuevo = new Fuego11(this, this.enemigoAux.x, this.enemigoAux.y);

        // Agua
        else if(this.enemigoAux.nombre === 'agua1') 
          this.enemigoNuevo = new Agua1(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua2') 
          this.enemigoNuevo = new Agua2(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua3') 
          this.enemigoNuevo = new Agua3(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua4') 
          this.enemigoNuevo = new Agua4(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua5') 
          this.enemigoNuevo = new Agua5(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua6') 
          this.enemigoNuevo = new Agua6(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua7') 
          this.enemigoNuevo = new Agua7(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua8') 
          this.enemigoNuevo = new Agua8(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua9') 
          this.enemigoNuevo = new Agua9(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua10') 
          this.enemigoNuevo = new Agua10(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua11') 
          this.enemigoNuevo = new Agua11(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua12') 
          this.enemigoNuevo = new Agua12(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua13') 
          this.enemigoNuevo = new Agua13(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua14') 
          this.enemigoNuevo = new Agua14(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua15') 
          this.enemigoNuevo = new Agua15(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'agua16') 
          this.enemigoNuevo = new Agua16(this, this.enemigoAux.x, this.enemigoAux.y);

        // Planta
        else if(this.enemigoAux.nombre === 'planta1') 
          this.enemigoNuevo = new Planta1(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta2') 
          this.enemigoNuevo = new Planta2(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta3') 
          this.enemigoNuevo = new Planta3(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre ===  'planta4') 
          this.enemigoNuevo = new Planta4(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta5') 
          this.enemigoNuevo = new Planta5(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta6') 
          this.enemigoNuevo = new Planta6(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta7') 
          this.enemigoNuevo = new Planta7(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta8') 
          this.enemigoNuevo = new Planta8(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta9') 
          this.enemigoNuevo = new Planta9(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta10') 
          this.enemigoNuevo = new Planta10(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta11') 
          this.enemigoNuevo = new Planta11(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta12') 
          this.enemigoNuevo = new Planta12(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta13') 
          this.enemigoNuevo = new Planta13(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta14') 
          this.enemigoNuevo = new Planta14(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'planta15') 
          this.enemigoNuevo = new Planta15(this, this.enemigoAux.x, this.enemigoAux.y);

        // Electricidad
        else if(this.enemigoAux.nombre === 'electricidad1') 
          this.enemigoNuevo = new Electricidad1(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad2') 
          this.enemigoNuevo = new Electricidad2(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad3') 
          this.enemigoNuevo = new Electricidad3(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre ===  'electricidad4') 
          this.enemigoNuevo = new Electricidad4(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad5') 
          this.enemigoNuevo = new Electricidad5(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad6') 
          this.enemigoNuevo = new Electricidad6(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad7') 
          this.enemigoNuevo = new Electricidad7(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad8') 
          this.enemigoNuevo = new Electricidad8(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad9') 
          this.enemigoNuevo = new Electricidad9(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad10') 
          this.enemigoNuevo = new Electricidad10(this, this.enemigoAux.x, this.enemigoAux.y);
        else if(this.enemigoAux.nombre === 'electricidad11') 
          this.enemigoNuevo = new Electricidad11(this, this.enemigoAux.x, this.enemigoAux.y);

        this.enemigoNuevo.vida = this.enemigoAux.vida;
        this.groupEnemies.add(this.enemigoNuevo);
      }

    }

    // Trampillas
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
    if(this.datosInit == null)
    {
      this.numTrampillas = 50;
      while(this.numTrampillas > 0)
      {
        this.xRand = Phaser.Math.Between(0, 6096/this.tamano_celda);
        this.yRand = Phaser.Math.Between(0, 3827/this.tamano_celda);
        this.tipoTrampilla = "trampa"+Phaser.Math.Between(7, 24);
        if(this.map.getTileAt(this.xRand, this.yRand, false, this.suelo) != null)
        {
          this.trampillaSprite = new Trampillas(this, this.xRand * this.tamano_celda, this.yRand * this.tamano_celda, this.tipoTrampilla);
          this.groupTrampillas.add(this.trampillaSprite);
          --this.numTrampillas;
        }   
      }
    }
    else
    {
      let numTrampillas = this.datosInit.groupTrampillas.length;
    
      for(let i = 0; i < numTrampillas; ++i)
      {
        this.trampillaAux = this.datosInit.groupTrampillas[i];
        this.trampillaNueva = new Trampillas(this, this.trampillaAux.x, this.trampillaAux.y, this.trampillaAux.animation);

        this.trampillaNueva.activo = this.trampillaAux.activo;
        this.trampillaNueva.pisada = this.trampillaAux.pisada;

        if(!this.trampillaNueva.activo)
          this.trampillaNueva.setVisible(true);

        this.groupTrampillas.add(this.trampillaNueva);
      }
    }

    // Portales
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
    if(this.datosInit == null)
    {
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
    }
    else
    {
      let numPortales = this.datosInit.groupPortales.length;
    
      for(let i = 0; i < numPortales; ++i)
      {
        this.portalAux = this.datosInit.groupPortales[i];
        this.portalNuevo = new Portal(this, this.portalAux.x, this.portalAux.y, this.portalAux.isla);

        this.groupPortales.add(this.portalNuevo);
      }
    }

    this.vidaPikachu = new Estado(this);
    this.puntuacion = new Puntuacion(this);
    this.objetivo = new Objetivo(this);
    this.marcadorEvoluciones = new Evoluciones(this);
    
    // Colisiones
    this.physics.add.collider(this.groupGemas, this.borde);
    this.physics.add.collider(this.groupGemas, this.rio);
    this.physics.add.collider(this.groupGemas, this.borde_puente);

    this.physics.add.collider(this.pikachuSprite, this.borde, () => { if(!this.musicaMuro.isPlaying)this.musicaMuro.play()});
    this.physics.add.collider(this.pikachuSprite, this.rio, () => {if(!this.musicaMuro.isPlaying) this.musicaMuro.play()});
    this.physics.add.collider(this.pikachuSprite, this.borde_puente, () => {if(!this.musicaMuro.isPlaying) this.musicaMuro.play()});
    
    this.physics.add.collider(this.groupEnemies, this.borde);
    this.physics.add.collider(this.groupEnemies, this.rio);
    this.physics.add.collider(this.groupEnemies, this.borde_puente);
    
    // Camera zoom
    this.camera = this.cameras.main;
    this.camera.setZoom(2);
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.camera.startFollow(this.pikachuSprite);
    
  // Música  
    let config = {
      mute: false,
      volume: 0.05,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    this.music = this.sound.add('musica_portada', config);
    if(data.musica) {
      this.music.play();
    }

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
  }

  update(time, delta) {
   
    this.puntuacion.updatePuntos(this.pikachuSprite.puntuacion);
    this.vidaPikachu.updateVida(this.pikachuSprite.vida, this.animacionHerido);
    this.objetivo.updateObjetivo(this.pikachuSprite.snorlax, this.pikachuSprite.articuno, this.pikachuSprite.zapdos, this.pikachuSprite.moltres, this.pikachuSprite.mewtwo);
    this.marcadorEvoluciones.updateEvoluciones(this.pikachuSprite.evoluciones);

    if(this.tutorial)
    {
      this.tutorial = false;
      if(!this.mensajeActivo)
      { 
        this.mensajeActivo = true; 
        this.mensaje = new Mensaje(this, "tutorial");
        this.timer = this.time.addEvent({
            delay: 4500,
            callback: () => {
              this.mensaje.alerta.destroy();
              this.mensajeActivo = false;
            },
            loop: false
        });
      }
    }
    // Aparición portal final
    if(this.pikachuSprite.jefesIslasRestantes === 0)
    {
      this.pikachuSprite.jefesIslasRestantes++;
      this.portalFinalSprite = new Portal(this, this.x, this.y, "centro");
      this.groupPortales.add(this.portalFinalSprite);
    }

    // Portal planta
    if(this.activarJefePlanta)
    {
      this.activarJefePlanta = false;
      
      this.music.stop();

      let pikachuData = this.pikachuSprite;

      let grupoGemas = this.groupGemas.getChildren();
      let arrayGemas = [];
      for(let i = 0; i < grupoGemas.length; ++i)
      {
        arrayGemas.push(grupoGemas[i]);
      }

      let grupoEnemigos = this.groupEnemies.getChildren();
      let arrayEnemigos = [];
      for(let i = 0; i < grupoEnemigos.length; ++i)
      {
        arrayEnemigos.push(grupoEnemigos[i]);
      }

      let grupoTrampillas = this.groupTrampillas.getChildren();
      let arrayTrampillas = [];
      for(let i = 0; i < grupoTrampillas.length; ++i)
      {
        arrayTrampillas.push(grupoTrampillas[i]);
      }

      let grupoPortales = this.groupPortales.getChildren();
      let arrayPortales = [];
      for(let i = 0; i < grupoPortales.length; ++i)
      {
        arrayPortales.push(grupoPortales[i]);
      }
      
      this.scene.start('jefePlanta', {pikachuData: pikachuData, groupGemas: arrayGemas, groupEnemies: arrayEnemigos,
                                    groupTrampillas: arrayTrampillas, groupPortales: arrayPortales});
      this.scene.stop('game');
      this.pikachuSprite.reiniciarTeclas();
    }

    // Portal Agua
    if(this.activarJefeAgua)
    {
      this.music.stop();
      this.activarJefeAgua = false;

      let pikachuData = this.pikachuSprite;

      let grupoGemas = this.groupGemas.getChildren();
      let arrayGemas = [];
      for(let i = 0; i < grupoGemas.length; ++i)
      {
        arrayGemas.push(grupoGemas[i]);
      }

      let grupoEnemigos = this.groupEnemies.getChildren();
      let arrayEnemigos = [];
      for(let i = 0; i < grupoEnemigos.length; ++i)
      {
        arrayEnemigos.push(grupoEnemigos[i]);
      }

      let grupoTrampillas = this.groupTrampillas.getChildren();
      let arrayTrampillas = [];
      for(let i = 0; i < grupoTrampillas.length; ++i)
      {
        arrayTrampillas.push(grupoTrampillas[i]);
      }

      let grupoPortales = this.groupPortales.getChildren();
      let arrayPortales = [];
      for(let i = 0; i < grupoPortales.length; ++i)
      {
        arrayPortales.push(grupoPortales[i]);
      }
      
      this.scene.start('jefeAgua', {pikachuData: pikachuData, groupGemas: arrayGemas, groupEnemies: arrayEnemigos,
                                    groupTrampillas: arrayTrampillas, groupPortales: arrayPortales});
      this.scene.stop('game');
      this.pikachuSprite.reiniciarTeclas();
    }

    //Portal Fuego
    if(this.activarJefeFuego)
    {
      this.activarJefeFuego = false;
      this.music.stop();

      let pikachuData = this.pikachuSprite;

      let grupoGemas = this.groupGemas.getChildren();
      let arrayGemas = [];
      for(let i = 0; i < grupoGemas.length; ++i)
      {
        arrayGemas.push(grupoGemas[i]);
      }

      let grupoEnemigos = this.groupEnemies.getChildren();
      let arrayEnemigos = [];
      for(let i = 0; i < grupoEnemigos.length; ++i)
      {
        arrayEnemigos.push(grupoEnemigos[i]);
      }

      let grupoTrampillas = this.groupTrampillas.getChildren();
      let arrayTrampillas = [];
      for(let i = 0; i < grupoTrampillas.length; ++i)
      {
        arrayTrampillas.push(grupoTrampillas[i]);
      }

      let grupoPortales = this.groupPortales.getChildren();
      let arrayPortales = [];
      for(let i = 0; i < grupoPortales.length; ++i)
      {
        arrayPortales.push(grupoPortales[i]);
      }
      
      this.scene.start('jefeFuego', {pikachuData: pikachuData, groupGemas: arrayGemas, groupEnemies: arrayEnemigos,
                                    groupTrampillas: arrayTrampillas, groupPortales: arrayPortales});
      this.scene.stop('game');

      this.pikachuSprite.reiniciarTeclas();
    }

    // Portal Electricidad
    if(this.activarJefeElectricidad)
    {
      this.activarJefeElectricidad = false;
      this.music.stop();

      let pikachuData = this.pikachuSprite;

      let grupoGemas = this.groupGemas.getChildren();
      let arrayGemas = [];
      for(let i = 0; i < grupoGemas.length; ++i)
      {
        arrayGemas.push(grupoGemas[i]);
      }

      let grupoEnemigos = this.groupEnemies.getChildren();
      let arrayEnemigos = [];
      for(let i = 0; i < grupoEnemigos.length; ++i)
      {
        arrayEnemigos.push(grupoEnemigos[i]);
      }

      let grupoTrampillas = this.groupTrampillas.getChildren();
      let arrayTrampillas = [];
      for(let i = 0; i < grupoTrampillas.length; ++i)
      {
        arrayTrampillas.push(grupoTrampillas[i]);
      }

      let grupoPortales = this.groupPortales.getChildren();
      let arrayPortales = [];
      for(let i = 0; i < grupoPortales.length; ++i)
      {
        arrayPortales.push(grupoPortales[i]);
      }
      
      this.scene.start('jefeElectricidad', {pikachuData: pikachuData, groupGemas: arrayGemas, groupEnemies: arrayEnemigos,
                                    groupTrampillas: arrayTrampillas, groupPortales: arrayPortales});
      this.scene.stop('game');

      this.pikachuSprite.reiniciarTeclas();
    }

    // Portal Final
    if(this.activarJefeFinal)
    {
      this.music.stop();
      this.activarJefeFinal = false;

      let pikachuData = this.pikachuSprite;

      let grupoGemas = this.groupGemas.getChildren();
      let arrayGemas = [];
      for(let i = 0; i < grupoGemas.length; ++i)
      {
        arrayGemas.push(grupoGemas[i]);
      }

      let grupoEnemigos = this.groupEnemies.getChildren();
      let arrayEnemigos = [];
      for(let i = 0; i < grupoEnemigos.length; ++i)
      {
        arrayEnemigos.push(grupoEnemigos[i]);
      }

      let grupoTrampillas = this.groupTrampillas.getChildren();
      let arrayTrampillas = [];
      for(let i = 0; i < grupoTrampillas.length; ++i)
      {
        arrayTrampillas.push(grupoTrampillas[i]);
      }

      let grupoPortales = this.groupPortales.getChildren();
      let arrayPortales = [];
      for(let i = 0; i < grupoPortales.length; ++i)
      {
        arrayPortales.push(grupoPortales[i]);
      }

      this.scene.start('jefeFinal', {pikachuData: pikachuData, groupGemas: arrayGemas, groupEnemies: arrayEnemigos,
        groupTrampillas: arrayTrampillas, groupPortales: arrayPortales});
      this.activarJefeFinal = false;
      
      this.scene.pause('game');
      this.pikachuSprite.reiniciarTeclas();
    }
  }
}