import { data } from "./data.js";
export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, nombre);

        this.orientation = "down";
        this.nombre = nombre;
        // Atributos
        this.vida = 50;
        this.fuerza = 1;
        this.ataque = false;
        this.esHerido = false;
        this.numEnemy = this.scene.numEnemy;
        this.velocidad = 40;
        this.puedeActuar = true;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.groupEnemies);
        this.play(this.animation, true);
        this.scene.physics.world.enableBody(this);
        this.puedeAtacar = true;
    }

    atacar() {
        if(!this.esHerido)
        {
            this.ataque = true;
            let player = this.scene.pikachuSprite;
            switch(this.orientation)
            {
                case "up":
                    this.flipX = false;
                    this.animation = 'attack_up_enemy'+this.nombre;
                    break;
                case "upright":
                    this.flipX = false;
                    this.animation = 'attack_upright_enemy'+this.nombre;
                    break;
                case "upleft":
                    this.flipX = true;
                    this.animation = 'attack_upright_enemy'+this.nombre;
                    break;
                case "down":
                    this.flipX = false;
                    this.animation = 'attack_down_enemy'+this.nombre;
                    break;
                case "downright":
                    this.flipX = false;
                    this.animation = 'attack_downright_enemy'+this.nombre;
                    break;
                case "downleft":
                    this.flipX = true;
                    this.animation = 'attack_downright_enemy'+this.nombre;
                    break;
                case "right":
                    this.flipX = false;
                    this.animation = 'attack_right_enemy'+this.nombre;
                    break;
                case "left":
                    this.flipX = true;
                    this.animation = 'attack_right_enemy'+this.nombre;
                    break;
            }
            player.vida -= this.fuerza;
            player.esHerido = true;
            if(player.vida < 0)
            {
                player.vida = 0;
            }
        }
    }
    
    ataques() {

        let player = this.scene.pikachuSprite;
        
        if(player.atacar && this.puedeActuar)
        {
            this.puedeActuar = false;
            this.esHerido = true;
            player.atacar = false;
            this.puedeAtacar = false;
            switch(this.orientation)
            {
                case "up":
                    this.flipX = false;
                    this.animation = 'damage_up_enemy'+this.nombre;
                    break;
                case "upright":
                    this.flipX = false;
                    this.animation = 'damage_upright_enemy'+this.nombre;
                    break;
                case "upleft":
                    this.flipX = true;
                    this.animation = 'damage_upright_enemy'+this.nombre;
                    break;
                case "down":
                    this.flipX = false;
                    this.animation = 'damage_down_enemy'+this.nombre;
                    break;
                case "downright":
                    this.flipX = false;
                    this.animation = 'damage_downright_enemy'+this.nombre;
                    break;
                case "downleft":
                    this.flipX = true;
                    this.animation = 'damage_downright_enemy'+this.nombre;
                    break;
                case "right":
                    this.flipX = false;
                    this.animation = 'damage_right_enemy'+this.nombre;
                    break;
                case "left":
                    this.flipX = true;
                    this.animation = 'damage_right_enemy'+this.nombre;
                    break;
            }
            this.scene.time.addEvent({
                delay: 500,
                callback: () => {
                    this.puedeActuar = true;
                    this.puedeAtacar = true;
                },
                loop: false
            });
            this.anims.play(this.animation, true);
            this.vida -= player.fuerza;
            
            if(this.vida <= 0)
            {
                this.destroy();
                data.puntos += 50;
            }
        }
        else if (player.puedeActuar && this.puedeActuar && this.puedeAtacar)
        {
            this.ataque = true;
            this.puedeActuar = false;
            switch(this.orientation)
            {
                case "up":
                    this.flipX = false;
                    this.animation = 'attack_up_enemy'+this.nombre;
                    break;
                case "upright":
                    this.flipX = false;
                    this.animation = 'attack_upright_enemy'+this.nombre;
                    break;
                case "upleft":
                    this.flipX = true;
                    this.animation = 'attack_upright_enemy'+this.nombre;
                    break;
                case "down":
                    this.flipX = false;
                    this.animation = 'attack_down_enemy'+this.nombre;
                    break;
                case "downright":
                    this.flipX = false;
                    this.animation = 'attack_downright_enemy'+this.nombre;
                    break;
                case "downleft":
                    this.flipX = true;
                    this.animation = 'attack_downright_enemy'+this.nombre;
                    break;
                case "right":
                    this.flipX = false;
                    this.animation = 'attack_right_enemy'+this.nombre;
                    break;
                case "left":
                    this.flipX = true;
                    this.animation = 'attack_right_enemy'+this.nombre;
                    break;
            }
            this.scene.time.addEvent({
                delay: 500,
                callback: () => {
                    this.puedeActuar = true;
                },
                loop: false
            });
            this.anims.play(this.animation, true);
            if(!player.inmune)
            {
                player.vida -= this.fuerza;
                player.esHerido = true;
                if(player.vida < 0)
                {
                    player.vida = 0;
                }
            }
        }
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // Ataques y movimientos
        let player = this.scene.pikachuSprite;
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);

        if(this.puedeActuar)
        {
            let distancia = Phaser.Math.Distance.Chebyshev(this.scene.pikachuSprite.x, this.scene.pikachuSprite.y, this.x, this.y);
            if(player.vida > 0 && this.vida > 0)
            {  
                this.scene.physics.add.collider(player, this, () => this.ataques());

                if(!this.ataque && !this.esHerido && this.puedeActuar)
                {
                    if(distancia > 6*24) // Se mueve libremente
                    {
                //     let frecuencia = Phaser.Math.Between(-1, 1)
                        let velX = Phaser.Math.Between(-1, 1) * this.velocidad;
                        let velY = Phaser.Math.Between(-1, 1) * this.velocidad;
                        this.body.setVelocityX(velX);
                        this.body.setVelocityY(velY);
                    }
                    else // Se mueve hacia el jugador
                        this.scene.physics.moveTo(this, player.x, player.y, this.velocidad);

                    // Animaciones           
                    if((this.body.velocity.x >= this.velocidad/2) && (this.body.velocity.y >= this.velocidad/2))
                    {
                        this.flipX = false;
                        this.animation = 'move_downright_enemy'+this.nombre;
                        this.orientation = "downright";
                    }
                    else if((this.body.velocity.x >= this.velocidad/2) && (this.body.velocity.y <= -this.velocidad/2))
                    {
                        this.flipX = false;
                        this.animation = 'move_upright_enemy'+this.nombre;
                        this.orientation = "upright";
                    }
                    else if((this.body.velocity.x <= -this.velocidad/2) && (this.body.velocity.y >= this.velocidad/2))
                    {
                        this.flipX = true;
                        this.animation = 'move_downright_enemy'+this.nombre;
                        this.orientation = "downleft";
                    }
                    else if((this.body.velocity.x <= -this.velocidad/2) && (this.body.velocity.y <= -this.velocidad/2))
                    {
                        this.flipX = true;
                        this.animation = 'move_upright_enemy'+this.nombre;
                        this.orientation = "upleft";
                    }
                    else if(this.body.velocity.y > this.velocidad/2)
                    {
                        this.flipX = false;
                        this.animation = 'move_down_enemy'+this.nombre;
                        this.orientation = "down";
                    }
                    else if(this.body.velocity.y < -this.velocidad/2)
                    {
                        this.flipX = false;
                        this.animation = 'move_up_enemy'+this.nombre;
                        this.orientation = "up";
                    }
                    else if(this.body.velocity.x > this.velocidad/2)
                    {
                        this.flipX = false;
                        this.animation = 'move_right_enemy'+this.nombre;
                        this.orientation = "right";
                    }
                    else if(this.body.velocity.x < -this.velocidad/2)
                    {
                        this.flipX = true;
                        this.animation = 'move_right_enemy'+this.nombre;
                        this.orientation = "left";
                    }
                }
                this.anims.play(this.animation, true);
                this.ataque = false;
                this.esHerido = false;
            }
        }
        else if(player.vida === 0)
        {
            // escena GAME OVER
        }
    }
}