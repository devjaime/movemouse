var robot = require("robotjs");

// Obtén el tamaño de la pantalla.
var screenSize = robot.getScreenSize();
var height = screenSize.height;
var width = screenSize.width;

// Mueve el cursor a una posición aleatoria cada 50 segundos.
setInterval(function(){
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    robot.moveMouse(x, y);
    console.log("Moviendo el cursor a: " + x + ", " + y);
}, 50000); 
