export default class Entity extends Phaser.GameObject.Sprite {
    
}


let game = (function(){
    let player,
        evil,
        evilBoss,
        palyerLife = 7, //inicial, pero se podria ir incrementando 
        enemyLife = 5,
        bossLife = 10,
        hurtPlayer = 2,
        hurEnemy = 1,
        hurtBoss = 3,
        youLoose = false, //booleano que controla cuando matan al protagonista
        congratulations = false; //booleano que controla si has ganado la partida y muestra mensaje
        

})