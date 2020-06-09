### Pikachu y la maldición de Mewtwo

Proyecto para la asignatura Desarrollo de Videojuegos de la Universidad Complutense de Madrid 2020.

Realizado por Joel García Aparicio y Carlos Sánchez Álvarez.

# Idea

Juego basado en Pokemon
Mundo Misterioso.

Dicho juego consiste en superar mazmorras
controlando tu personaje y
derrotando enemigos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/images/Cueva_occidental.png)

# Caracteristicas

Nuestro juego cuenta con un mapa amplio con islas de diferentes tipos de terrenos, cada una con un jefe.

Necesitamos derrotar a los jefes de las cuatro islas para acceder al jefe final.

Hay gemas y otros Pokemon enemigos. Al recoger las gemas o matar a enemigos, recibirás puntos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/images/Zapdos_first_appearance.png)

# Assets

El jugador controlará a Pikachu

Nuestros Pokemon son como los originales pero en versión shiny, ya que se trata de un mundo infectado por los poderes de Mewtwo, el jefe final, quien controla la luz a su antojo y por tanto los colores de sus habitantes.

Pikachu tiene evolución, la cual podrá utilizar hasta cinco veces de forma temporal, siempre que no esté en los mapas de los jefes.

Mapa principal amplio con difrentes tipos de terreno diferenciados por los tilesets empleados y los tipos de Pokemon que nos encontraremos en ellos.

Hay música de fondo en 8-bit y del juego original, así como efectos de sonido.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/images/1.png)

## Mapa:
El mapa principal está formado por 4 islas más la central, cada una de un elemento (planta, fuego, agua, electricidad). Los Pokemon han sufrido una maldición y han cambiado de color, en cada isla encontraras los Pokemon de cada tipo con algún añadido. En la isla central podrás encontrar el portal de Mewtwo cuando hayas derrotado a los 4 jefes de cada una de las islas periféricas.

Existe una escena y un mapa secundario para cada jefe. A los que podrás acceder a través de los portales.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/images/mapa_team_rocket.png)


## Enemigos: 
Los habitantes del mundo Pokemon están poseídos, en cada isla encontraras diferentes Pokemon contra los que enfrentarte, ten cuidado porque no son muy amigables. Cada vez que derrotes a un enemigo sumarás puntos.

Para acabar el juego debes derrotar a los 5 jefes, primero gana a los 4 jefes de cada isla para poder acceder al quinto, situado en el centro del mapa principal. Los jefes son más poderosos que los enemigos comunes. Cuando mates a Mewtwo, el último jefe, la maldición se deshará y devolverás la paz al mundo Pokemon, así como sus colores originales.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/images/EscenaJefe.JPG)

## Gemas:
Recoge cuantas puedas, te sumarán puntos, los cuales se traducen en niveles. Están situadas por todo el mapa principal.

![](https://github.com/carsanchezalv/teamrocket/blob/master/assets/icons/personajes/Gema/gemas.png)

## Trampillas:
El mapa está plagado de trampillas ocultas que solo verás cuando las pises y las actives. Algunas te beneficiarán, otras te perjudicarán y habrá otras que simplemente te asustarán y no tendrán efecto. 

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/7.png) Se duplicarán tus puntos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/8.png) Te recupera la vida.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/9.png) Las gemas durante un tiempo duplicarán su valor.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/10.png) Tu fuerza se duplicará durante un tiempo.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/11.png) No tiene efectos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/12.png) Te frenará por un tiempo hasta llegar a pararte.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/13.png) Te inmoviliza durante un tiempo.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/14.png) No tiene efectos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/15.png) No tiene efectos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/16.png) Te resta vida poco a poco durante un tiempo. 

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/17.png) Te hace menos fuerte por un tiempo.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/18.png) El ventilador absorbe tus puntos y te devuelve una cantidad aleatoria.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/19.png) Tus puntos se caerán por esta alcantarilla y los perderás.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/20.png) Nada mejor que un buen nido para ser inmune a cualquier ataque.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/21.png) Con el viaje sorpresa aparecerás en un lugar aleatorio del mapa.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/22.png) Los controles de movimiento se invierten durante un tiempo.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/23.png) No tiene efectos.

![](https://github.com/carsanchezalv/teamrocket/blob/master/slides/Hito3/24.png) Tu velocidad se reduce a la mitad.

## Portales:
Inicialmente sólo podrás acceder a 4 portales, situados cada uno de ellos en su isla periférica correspondiente del mapa principal. Cuando derrotes a los 4 jefes de dichos portales, aparecerá el quinto portal en la isla central, el cual te llevará a Mewtwo.

No siempre podrás introducirte en los portales que encuentres, ya que te pedirán un nivel mínimo de puntos para poder pasar. Dicho nivel comienza en 2 con el primer portal que encuentres y se aumenta su valor en 1 cada vez que derrotes a un jefe, por lo que el portal de Mewtwo te pedirá tener nivel 6.

![](https://github.com/carsanchezalv/teamrocket/blob/master/assets/tiles/portal.png)

## Otras acciones:
Pikachu también podrá recuperar su vida cuando quiera (salvo en las escenas de los jefes, al igual que al evolucionar), pero gastará dos niveles de puntos, por lo que se tendrá que medir inteligentemente su uso para no perder excesivos niveles que impidan pasar a través de un portal.

Se puede pausar el juego y silenciar su música cuando se quiera, así como repasar las instrucciones y reglas del mismo en plena partida.

## Mensajes:
El juego cuenta con numerosos mensajes de alerta para avisar al jugador de distintos acontecimientos durante la partida.

![](https://github.com/carsanchezalv/teamrocket/blob/master/assets/Messages/Trampilla21.png)

![](https://github.com/carsanchezalv/teamrocket/blob/master/assets/Messages/recuperar1.png)

## Controles:
Usa las flechas para moverte.

Ataca con la barra espaciadora.

Si pulsas c puedes correr, pero cuidado que consumes puntos.

Para evolucionar pulsa e, solo puedes hacerlo cinco veces en el mapa principal. 

Cuando tengas poca vida puedes recuperarla gastando dos niveles de puntos, pulsando r.

El menú de pausa se muestra pulsando p.

Puedes ver las instrucciones en cualquier momento pulsando i.

