export default class Objetivo extends Phaser.Scene {
    constructor(scene) {
        
        super('Objetivo');
        this.scene = scene;

        this.snorlax = scene.add.sprite(300, 195, 'snorlaxDesactivado');
        this.snorlax.setTexture('snorlaxDesactivado');
        this.snorlax.setScale(0.14);
        this.snorlax.setDepth(60);
        this.snorlax.setScrollFactor(0);

        this.articuno = scene.add.sprite(300, 235, 'articunoDesactivado');
        this.articuno.setTexture('articunoDesactivado');
        this.articuno.setScale(0.14);
        this.articuno.setDepth(60);
        this.articuno.setScrollFactor(0);
        
        this.zapdos = scene.add.sprite(300, 275, 'zapdosDesactivado');
        this.zapdos.setTexture('zapdosDesactivado');
        this.zapdos.setScale(0.14);
        this.zapdos.setDepth(60);
        this.zapdos.setScrollFactor(0);

        this.moltres = scene.add.sprite(300, 315, 'moltresDesactivado');
        this.moltres.setTexture('moltresDesactivado');
        this.moltres.setScale(0.14);
        this.moltres.setDepth(60);
        this.moltres.setScrollFactor(0);

        this.mewtwo = scene.add.sprite(300, 355, 'mewtwoDesactivado');
        this.mewtwo.setTexture('mewtwoDesactivado');
        this.mewtwo.setScale(0.14);
        this.mewtwo.setDepth(60);
        this.mewtwo.setScrollFactor(0);
    }

    updateObjetivo(snorlax, articuno, zapdos, moltres, mewtwo) {
        if(snorlax)
            this.snorlax.setTexture('snorlaxActivado');
        
        else
            this.snorlax.setTexture('snorlaxDesactivado');
        
        if(articuno)
            this.articuno.setTexture('articunoActivado');
        
        else
            this.articuno.setTexture('articunoDesactivado');

        if(zapdos)
            this.zapdos.setTexture('zapdosActivado');

        else
            this.zapdos.setTexture('zapdosDesactivado');

        if(moltres)
            this.moltres.setTexture('moltresActivado');
        
        else
            this.moltres.setTexture('moltresDesactivado');
            
        if(mewtwo)
            this.mewtwo.setTexture('mewtwoActivado');
        
        else
            this.mewtwo.setTexture('mewtwoDesactivado');
    }
}