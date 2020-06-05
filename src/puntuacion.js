export default class Puntuacion extends Phaser.Scene {
    constructor(scene) {
        super({ key: 'Puntuacion' });

        this.level = scene.add.sprite(310, 150, 'puntos00');
        this.level.setDepth(60);
        this.level.setTexture('level0');
        this.level.setScrollFactor(0);
        this.level.setScale(0.07);

        this.score0 = scene.add.sprite(390, 150, 'puntos00');
        this.score0.setDepth(60);
        this.score0.setTexture('puntos00');
        this.score0.setScrollFactor(0);
        this.score0.setScale(1.5);

        this.score1 = scene.add.sprite(486, 150, 'puntos10');
        this.score1.setDepth(60);
        this.score1.setTexture('puntos10');
        this.score1.setScrollFactor(0);
        this.score1.setScale(1.5);

        this.score2 = scene.add.sprite(582, 150, 'puntos20');
        this.score2.setDepth(60);
        this.score2.setTexture('puntos20');
        this.score2.setScrollFactor(0);
        this.score2.setScale(1.5);

        this.score3 = scene.add.sprite(678, 150, 'puntos20');
        this.score3.setDepth(60);
        this.score3.setTexture('puntos20');
        this.score3.setScrollFactor(0);
        this.score3.setScale(1.5);
    }

    updatePuntos(puntos) {
        
        this.nivel = Math.trunc(puntos/330);
        this.puntosNivel = puntos - this.nivel*330;

        if(this.nivel < 10)
            this.level.setTexture("level"+this.nivel);
        else
            this.level.setTexture("level"+9);
            
        if(this.nivel < 10)
        {    
            if(this.puntosNivel < 10)
            {
                this.score0.setTexture("puntos00");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 10 && this.puntosNivel < 20) {
                this.score0.setTexture("puntos01");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 20 && this.puntosNivel < 30) {
                this.score0.setTexture("puntos02");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 30 && this.puntosNivel < 40) {
                this.score0.setTexture("puntos03");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 40 && this.puntosNivel < 50) {
                this.score0.setTexture("puntos04");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 50 && this.puntosNivel < 60) {
                this.score0.setTexture("puntos05");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 60 && this.puntosNivel < 70) {
                this.score0.setTexture("puntos06");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 70 && this.puntosNivel < 80) {
                this.score0.setTexture("puntos07");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 80 && this.puntosNivel < 90) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos10");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 90 && this.puntosNivel < 100) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos11");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 100 && this.puntosNivel < 110) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos12");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 110 && this.puntosNivel < 120) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos13");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 120 && this.puntosNivel < 130) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos14");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 130 && this.puntosNivel < 140) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos15");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 140 && this.puntosNivel < 150) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos16");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 150 && this.puntosNivel < 160) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos17");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 160 && this.puntosNivel < 170) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos20");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 170 && this.puntosNivel < 180) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos21");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 180 && this.puntosNivel < 190) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos22");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 190 && this.puntosNivel < 200) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos23");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 200 && this.puntosNivel < 210) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos24");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 210 && this.puntosNivel < 220) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos25");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 220 && this.puntosNivel < 230) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos26");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 230 && this.puntosNivel < 240) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos27");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 240 && this.puntosNivel < 250) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos30");
            }
            else if (this.puntosNivel >= 250 && this.puntosNivel < 260) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos31");
            }
            else if (this.puntosNivel >= 260 && this.puntosNivel < 270) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos32");
            }
            else if (this.puntosNivel >= 270 && this.puntosNivel < 280) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos33");
            }
            else if (this.puntosNivel >= 280 && this.puntosNivel < 290) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos34");
            }
            else if (this.puntosNivel >= 290 && this.puntosNivel < 300) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos35");
            }
            else if (this.puntosNivel >= 300 && this.puntosNivel < 310) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos36");
            }
            else if (this.puntosNivel >= 310 && this.puntosNivel < 320) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos37");
            }
            else if (this.puntosNivel > 320) {
                this.score0.setTexture("puntos08");
                this.score1.setTexture("puntos18");
                this.score2.setTexture("puntos28");
                this.score3.setTexture("puntos38");
            }
        }
        else
        {
            this.score0.setTexture("puntos08");
            this.score1.setTexture("puntos18");
            this.score2.setTexture("puntos28");
            this.score3.setTexture("puntos38");
        }
    }
}