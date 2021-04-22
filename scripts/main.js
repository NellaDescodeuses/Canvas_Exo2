var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//haut de la voiture
ctx.fillStyle = 'rgb(42, 88, 135)';
ctx.strokeStyle = 'black';
ctx.fillRect(195,75,125,65);
//bas de la voiture
ctx.fillRect(150,130,300,55);

//fenêtres
ctx.fillStyle = 'rgb(161, 176, 184)';
ctx.fillRect(200,82,57,40);
ctx.fillRect(270,82,40,40);

ctx.fill();
//roue gauche
ctx.fillStyle = 'rgb(161, 176, 184)';
//je commence à dessiner
ctx.beginPath();
/*
-point de départ x horizontalemental
-point de départ y verticalement
-rayon
-angle de départ
-Math.PI donne un demi-cercle
-true or false, sens de dessin du cercle.
*/
ctx.arc(188,210,40,0, Math.PI*2, false);
ctx.stroke();
ctx.fill();

//roue droite
ctx.beginPath();
ctx.arc(410,210,40,0, Math.PI*2, false);
ctx.stroke();
ctx.fill();

//intérieur des roues
ctx.beginPath();
ctx.fillStyle = 'rgb(36, 46, 45)';
//gauche
ctx.arc(189,210,25,0, Math.PI*2, false);
//droite
ctx.arc(411,210,25,0, Math.PI*2, false);
ctx.fill();

// //pasteques
// ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.arc(350,100,25,40, Math.PI*2, false);
// ctx.fill();
