import Mensaje from './mensajes/mensaje.js';

export default class Portal extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, isla) {
        super(scene, x, y, 'portal');
        this.escena = scene;
        this.isla = isla;
        this.animation = "estatico";
        this.visible = true;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'estatico',
            frames: this.scene.anims.generateFrameNumbers('portal', { start: 1, end: 7 }),
            frameRate: 5,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'teletransporte',
            frames: this.scene.anims.generateFrameNumbers('portal', { start: 10, end: 15 }),
            frameRate: 5,
            repeat: 0
        });
    
       this.scene.add.existing(this);
       this.scene.physics.add.existing(this);

       let musicaPortalConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
      }
      this.musicaPortal = this.scene.sound.add("musicaPortal", musicaPortalConfig);

       this.anims.play(this.animation, true);
       this.scene.physics.world.enableBody(this);
       this.scene.physics.add.overlap(this, this.scene.pikachuSprite, () => this.entrarEnPortal());

       this.body.setSize(130, 130);
       this.body.offset.x = 62;
       this.body.offset.y = 60;
    }

    entrarEnPortal()
    {
        this.animation = "teletransporte";
        this.anims.play(this.animation, true);
        this.musicaPortal.play();

        // Escena jefes dependiendo de la isla
        if(this.isla === "planta")
        {
            if(this.scene.puntuacion.nivel >= this.scene.pikachuSprite.nivelRequerido)
            {    
                this.scene.pikachuSprite.nivelRequerido++;
                this.scene.activarJefePlanta = true;
                this.destroy();
            }
            else
            {
                if(!this.scene.mensajeActivo)
                {
                    this.scene.mensajeActivo = true;
                    
                    this.scene.mensaje = new Mensaje(this.scene, "portalNivel"+this.scene.pikachuSprite.nivelRequerido);
                    this.timer = this.scene.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            this.scene.mensaje.alerta.destroy();
                            this.scene.mensajeActivo = false;
                        },
                        loop: false
                    });
                }
            }
        }
        else if(this.isla === "finalPlanta")
        {
            this.scene.activarPortal = true;
            this.destroy();
        }
        else if(this.isla === "agua")
        {
            if(this.scene.puntuacion.nivel >= this.scene.pikachuSprite.nivelRequerido)
            {    
                this.scene.pikachuSprite.nivelRequerido++;
                this.scene.activarJefeAgua = true;
                this.destroy();  
            }
            else
            {
                if(!this.scene.mensajeActivo)
                {
                    this.scene.mensajeActivo = true; 
                    
                    this.scene.mensaje = new Mensaje(this.scene, "portalNivel"+this.scene.pikachuSprite.nivelRequerido);
                    this.timer = this.scene.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            this.scene.mensaje.alerta.destroy();
                            this.scene.mensajeActivo = false;
                        },
                        loop: false
                    });
                }
            }
        }
        else if(this.isla === "finalAgua")
        {
            this.scene.activarPortal = true;
            this.destroy();
        }
        else if(this.isla === "fuego")
        {
            if(this.scene.puntuacion.nivel >= this.scene.pikachuSprite.nivelRequerido)
            {   
                this.scene.pikachuSprite.nivelRequerido++;
                this.scene.activarJefeFuego = true;
                this.destroy();      
            }
            else
            {
                if(!this.scene.mensajeActivo)
                {
                    this.scene.mensajeActivo = true; 
                    this.scene.mensaje = new Mensaje(this.scene, "portalNivel"+this.scene.pikachuSprite.nivelRequerido);
                    this.timer = this.scene.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            this.scene.mensaje.alerta.destroy();
                            this.scene.mensajeActivo = false;
                        },
                        loop: false
                    });
                }
            }
        }
        else if(this.isla === "finalFuego")
        {
            this.scene.activarPortal = true;
            this.destroy();
        }
        else if(this.isla === "electricidad")
        {
            if(this.scene.puntuacion.nivel >= this.scene.pikachuSprite.nivelRequerido)
            {    
                this.scene.pikachuSprite.nivelRequerido++;
                this.scene.activarJefeElectricidad = true;
                this.destroy();
            }
            else
            {
                if(!this.scene.mensajeActivo)
                {
                    this.scene.mensajeActivo = true; 
                    this.scene.mensaje = new Mensaje(this.scene, "portalNivel"+this.scene.pikachuSprite.nivelRequerido);
                    this.timer = this.scene.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            this.scene.mensaje.alerta.destroy();
                            this.scene.mensajeActivo = false;
                        },
                        loop: false
                    });
                }
            }
        }
        else if(this.isla === "finalElectricidad")
        {
            this.scene.activarPortal = true;
            this.destroy();
        }
        else if(this.isla === "centro")
        {
            if(this.scene.puntuacion.nivel >= this.scene.pikachuSprite.nivelRequerido)
            {    
                this.scene.pikachuSprite.nivelRequerido++;
                this.scene.activarJefeFinal = true;
                this.destroy();
            }
            else
            {
                if(!this.scene.mensajeActivo)
                {
                    this.scene.mensajeActivo = true; 
                    this.scene.mensaje = new Mensaje(this.scene, "portalNivel"+this.scene.pikachuSprite.nivelRequerido);
                    this.timer = this.scene.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            if(this.scene.mensaje.alerta != null)
                            {
                                this.scene.mensaje.alerta.destroy();
                            }
                            this.scene.mensajeActivo = false;
                        },
                        loop: false
                    });
                }
            }
        }
        else if(this.isla === "finalJuego")
        {
            this.scene.activarPortal = true;
            this.destroy();
        }
        
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.anims.play(this.animation, true);
    }
}