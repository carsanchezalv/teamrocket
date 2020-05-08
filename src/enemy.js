export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, nombre);

        let orientation = "down";
        this.animation = "move_down_enemy"+nombre;
        this.nombre = nombre;
        // Atributos
        this.vida = 20;
        this.fuerza = 1;
        this.ataque = false;
        this.esHerido = false;
        this.numEnemy = this.scene.numEnemy;
        this.velocidad = 40;

 //       let ancho = this.frameWidth;
 //       let alto = this.frameHeight;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'move_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 1, end: 2 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_right_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 7, end: 8 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 13, end: 14 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 10, end: 11 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_downright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 4, end: 5 }),
            frameRate: 4,
            repeat: 0
        });

        // Animacion ataque
        this.scene.anims.create({
            key: 'attack_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 32, end: 34 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_right_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 40, end: 42 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 48, end: 50 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 44, end: 46 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_downright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 36, end: 38 }),
            frameRate: 4,
            repeat: 0
        });

        // Animacion evolucion 
        this.scene.anims.create({
            key: 'evolve_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 52, end: 54 }),
            frameRate: 4,
            repeat: 0
        });

        // Animaciones daño
        this.scene.anims.create({
            key: 'damage_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 17, end: 17 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_downright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 18, end: 18 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_right_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 19, end: 19 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 20, end: 20 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 21, end: 21 }),
            frameRate: 4,
            repeat: 0
        });

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

   //     this.body.setSize(this.body.offset.x/3.40, this.body.offset.y/6.40);
   //     this.body.offset.x = this.body.offset.x/3.00;
   //     this.body.offset.y = this.body.offset.y/2.30;
        this.body.setSize(14, 10);
        this.body.offset.x = 16;
        this.body.offset.y = 27;

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
            
  //          if(this.scene.physics.collider(player, this) && (!player.atacar))
    //            this.atacar();
            

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
    }
}