export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
   //   this.load.image("logo", "../assets/favicon.png")
        this.load.image("fondo", "assets/web/portada.png")
   //     this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
   //     this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
   //     this.load.audio("musica_inicio", [
  //          "assets/audio/bgm/menu_background.ogg",
   //         "assets/audio/bgm/menu_background.mp3"
   //     ]);
  }

  create() {
     menu(this)

        function menu(game) {

            
            let key = "Menu";
            let autoStart = true;
            let sceneConfig = {
                key: 'Menu',
                
            };
            let newScene = game.scene.add(key, sceneConfig, autoStart);

            //Fondo
            newScene.fondo = newScene.add.image(newScene.game.config.width, newScene.game.config.height, "fondo");
            newScene.fondo.displayHeight = 956;
            newScene.fondo.displayWidth = 1433;
       }
  }
  update(time, delta) {    
  }
}
