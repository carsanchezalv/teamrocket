export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, nombre) {
        super(scene, x, y, nombre);

        let orientation = "down";
        this.animation = "move_down_enemy"+nombre;
        this.nombre = nombre;
        // Atributos
        this.vida = 2;
        this.fuerza = 1;
        this.atacar = false;
        this.esHerido = false;
        this.numEnemy = this.scene.numEnemy;
        this.velocidad = 40;

        // Animacion movimientos
        this.scene.anims.create({
            key: 'move_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 1, end: 2 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_right_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 7, end: 8 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 13, end: 14 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 10, end: 11 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'move_downright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 4, end: 5 }),
            frameRate: 2,
            repeat: 0
        });

        // Animacion ataque
        this.scene.anims.create({
            key: 'attack_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 32, end: 34 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_right_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 40, end: 42 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 48, end: 50 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 44, end: 46 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'attack_downright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 36, end: 38 }),
            frameRate: 2,
            repeat: 0
        });

        // Animacion evolucion 
        this.scene.anims.create({
            key: 'evolve_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 52, end: 54 }),
            frameRate: 2,
            repeat: 0
        });

        // Animaciones daño
        this.scene.anims.create({
            key: 'damage_down_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 17, end: 17 }),
            frameRate: 2,
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
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_upright_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 20, end: 20 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'damage_up_enemy'+nombre,
            frames: this.scene.anims.generateFrameNumbers('enemigo'+this.numEnemy, { start: 21, end: 21 }),
            frameRate: 2,
            repeat: 0
        });

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setSize(14, 10);
        this.body.offset.x = 16;
        this.body.offset.y = 27;

        this.play(this.animation, true);
        this.scene.physics.world.enableBody(this);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // Ataques y movimientos
        let player = this.scene.pikachuSprite;
        
        if(this.vida > 0)
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

            this.anims.play(this.animation, true);
        }
    }
}