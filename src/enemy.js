import { data } from "./data.js";
export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, nombre);

        this.orientation = "down";
        this.nombre = nombre;
        // Atributos
        this.vida = 100;
        this.fuerza = 1;
        this.ataque = false;
        this.esHerido = false;
        this.numEnemy = this.scene.numEnemy;
        this.velocidad = 40;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.groupEnemies);
        this.play(this.animation, true);
        this.scene.physics.world.enableBody(this);
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
        
        if(player.atacar)
        {
            this.esHerido = true;
            player.atacar = false;
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
            this.vida -= player.fuerza;
            
            if(this.vida <= 0)
            {
                this.destroy();
                data.puntos += 10;
            }
        }
        else
        {
            this.ataque = true;
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

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // Ataques y movimientos
        let player = this.scene.pikachuSprite;
        
        if(player.vida > 0 && this.vida > 0)
        {
            
            this.scene.physics.add.collider(player, this, () => this.ataques());

            if(!this.ataque && !this.esHerido)
            {
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
        else
        {
            // escena GAME OVER
        }
    }
}