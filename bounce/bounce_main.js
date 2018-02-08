

use_key(RIGHT_KEY);
use_key(LEFT_KEY);
//flipper
var flipper_x = width/2;

var ball = new Mover(new Vector(200,200));
ball.velocity = new Vector(3,3);
ball.draw = function() {
    ellipse(this.position.x, this.position.y, 20,20);
}

var FLIPPER_SPEED = 3;

var draw = function() {
    background(200,200,200);

    fill(200,200,100);
    rect(flipper_x, height-60,150,10);

    ball.draw();
    ball.move();

    flipper_x += FLIPPER_SPEED * (keys_pressed[RIGHT_KEY] - keys_pressed[LEFT_KEY]);
    no_fill();
    if(keys_pressed[LEFT_KEY]) {
		fill(50,255,80);
	}
	arrow(directions.left, 500,height-50, 60, 30);

	no_fill();
	if(keys_pressed[RIGHT_KEY]) {   
		fill(50,255,80);
    }
    arrow(directions.right, 500,height-50, 60, 30);

};

const FRAME_SKIP = 30;
setInterval(draw,FRAME_SKIP);
