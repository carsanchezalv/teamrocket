export default class Objetivo extends Phaser.Scene {
    constructor(scene) {
        
        super('Objetivo');
        this.scene = scene;

        this.snorlax = scene.add.sprite(300, 200, 'snorlaxDesactivado');
        this.snorlax.setTexture('snorlaxDesactivado');
        this.snorlax.setScale(0.2);
        this.snorlax.setDepth(60);
        this.snorlax.setScrollFactor(0);
/*
        this.articuno = scene.add.sprite(100, 120, 'articunoDesactivado');
        this.articuno.setTexture('articunoDesactivado');
    //    this.snorlax.setScale(0.2);
        this.articuno.setDepth(60);
        this.articuno.setScrollFactor(0);
        */
    }

    updateObjetivo(snorlax, articuno, zapdos, moltres, mewtwo) {
        if(snorlax)
        {

        }
        else
        {

        }
        if(articuno)
        {

        }
        else
        {

        }
        if(zapdos)
        {

        }
        else
        {

        }
        if(moltres)
        {

        }
        else
        {
            
        }
        if(mewtwo)
        {

        }
        else
        {

        }
    }
}