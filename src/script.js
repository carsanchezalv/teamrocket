var interval = null;
$(document).ready(function (){
    'use strict'
    //situar personaje


    //detectar tecla pulsada
    $(document).keydown(function(e){
        if(e.which == 40 || e.which == 83){ //down
            var key = 40;
            mover(key);
        } 
        if(e.which == 39 || e.which == 68){ //right
            var key = 39;
            mover(key);
        } 
        if(e.which == 37 || e.which == 65){ //left
            var key = 37;
            mover(key);
        } 
        if(e.which == 38 || e.which == 87){ //up
            var key = 38;
            mover(key);
        } 
    })

    function mover(key){
        if(key == 39){
           var num = 1;
            interval = setInterval(function(){
                $("#personaje").attr("src"+"/Users/Joel/Documents/GitHub/Videogame/assets/icons/personajes/Separados/1/MovimientoDerecha" + num + ".png");
                num += 1;
                if(num == 3) num = 1;
             },150)
        }
    }
})