

use_key(RIGHT_KEY);
use_key(LEFT_KEY);
//flipper
var flipper_x = width/2;

var ball = new Mover(new Vector(200,200));
ball.size = 20;
ball.velocity = new Vector(3,3);
ball.draw = function() {
    ellipse(this.position.x, this.position.y, this.size, this.size);
	line_mode("RADIUS");
	line(this.position.x, this.position.y, Vector.neg(this.velocity).angle(), 50);
}

var FLIPPER_SPEED = 3;
var flipper_y = height-60;
var flipper_length = 150;


var current_scene;
var game_over_func = function() {fill(0,0,0);text("Game Over!",100,100);};
var game_over_scene = new StaticScene(game_over_func);

var game_drawing_func = function() {
    background(200,200,200);

    fill(200,200,100);
    rect(flipper_x, flipper_y, flipper_length,10);

    ball.draw();
    ball.move();

	
	//collition detection
	
	//with flipper
	if (ball.position.y <= flipper_y - ball.size && ball.position.y + ball.velocity.y>= flipper_y - ball.size
		&& ball.position.x >= flipper_x && ball.position.x <= flipper_x + flipper_length) {
		ball.velocity.y = -Math.abs(ball.velocity.y);
	}
	
	// with walls
	if (ball.position.x >= width - ball.size) {
		ball.velocity.x = -Math.abs(ball.velocity.x);
	}
	if (ball.position.x <= 0 + ball.size) {
		ball.velocity.x = Math.abs(ball.velocity.x);
	}
	
	// with cieling
	if (ball.position.y <= 0 + ball.size) {
		ball.velocity.y = Math.abs(ball.velocity.x);
	}
	
	// ball falls
	if (ball.position.y >= height) {
		current_scene = game_over_scene;
	}
	
	
	// user interaction
    flipper_x += FLIPPER_SPEED * (keys_pressed[RIGHT_KEY] - keys_pressed[LEFT_KEY]);
	flipper_x = constraint(flipper_x, 0, width - flipper_length);
	// key arrows
	// TODO: add mouse interaction for flipper
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


var game_scene = new Scene(game_drawing_func);
current_scene = game_scene;
const FRAME_SKIP = 30;

var draw = function () {
	current_scene.draw();
};
setInterval(draw,FRAME_SKIP);
