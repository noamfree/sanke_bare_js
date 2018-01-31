var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");






var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var STEER_AMOUNT = 0.12;

var f = new Food(new Vector(200,300));

var s = new Snake(new Vector(200,200), 5);
var draw = function() {
	background(200,200,200);
	s.draw();
	s.move();
	
	f.draw();


	if(Vector.sub(s.head.position, f.position).mag() < SNAKE_PART_SIZE + FOOD_SIZE){
		s.grow();
		f = new Food(new Vector(randint(0,500), randint(0,500)));
	}


	if(s.touching_itself()){
		ellipse(10,10,40,40);
	}


	if(keys_pressed[LEFT_KEY]) {
		s.head.velocity.rotate(-STEER_AMOUNT);
	}
	if(keys_pressed[RIGHT_KEY]) {
		s.head.velocity.rotate(STEER_AMOUNT);
	}
	

};
const FRAME_SKIP = 30;
setInterval(draw,FRAME_SKIP);


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