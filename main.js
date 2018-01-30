var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keys_pressed = {};
keyHandler = function(e) {
    keys_pressed[e.keyCode] = (e.type == 'keydown');

};
document.addEventListener("keydown", keyHandler, false);
document.addEventListener("keyup", keyHandler, false);


var s = new Snake(new Vector(200,200), 5);
var draw = function() {
	background(200,200,200);
	s.draw();
	s.move();

	if(keys_pressed[37]) {
		s.velocity.rotate(0.1);
	}
};
const frame_skip = 30;
setInterval(draw,frame_skip);


//rect(100, 100, 50, 50);
//
//ellipse(200,200,50, 50);

//ctx.beginPath();
//ctx.arc(240, 160, 20, 0, Math.PI*1.5, false);
//ctx.fillStyle = "green";
//ctx.fill();
//ctx.closePath();
//
//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//ctx.stroke();
//ctx.closePath();