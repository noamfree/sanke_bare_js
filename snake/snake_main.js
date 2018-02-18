var STEER_AMOUNT = 0.12;
var SNAKE_INIT_SIZE = 9;

var f;
var s;
var eating_explotions;
var combo_bar ;
var combo_bar_position;

var game_over_scene = new StaticScene(function(){
	background(100,100,100,0.3);
});
var init_game = function() {
	f = new Food(new Vector(300,200));

	s = new Snake(new Vector(200,200), SNAKE_INIT_SIZE);
	eating_explotions = [];

	combo_bar = new ProgressBar();
	combo_bar_position = new Vector(50,560);
	use_key(LEFT_KEY);
	use_key(RIGHT_KEY);
};
init_game();


var draw_left_arrow = function() {
	if(keys_pressed[LEFT_KEY]){
		fill(50,255,80);
	}
	else {no_fill();}
	arrow(directions.left, 500,height-50, 60, 30);
};
var draw_right_arrow = function() {
	if(keys_pressed[RIGHT_KEY]){
		fill(50,255,80);
	}
	else {no_fill();}
	arrow(directions.right, 500,height-50, 60, 30);
};

var game_d_func = function() {
	
	background(170);
	fill(200,200,200);
	no_stroke();
	rect(50,50,width-50*2, height-50*2);
	stroke();

	combo_bar.draw(combo_bar_position, 300);
	combo_bar.empty(1);

	s.draw();
	s.move();
	
	f.draw();

	for (var i=eating_explotions.length-1; i>=0; i--) {
		var h=eating_explotions[i];
		h.draw();
		h.move();
		if(!h.is_alive()){
			eating_explotions.splice(i, 1);
		}
	}


	if(Vector.sub(s.head.position, f.position).mag() < SNAKE_PART_SIZE + FOOD_SIZE){
		s.grow();
		f = new Food(new Vector(randint(0,500), randint(0,500)));
		eating_explotions.push(new HappyExplotion(s.head.position));
		combo_bar.fill();
	}

	if(s.touching_itself() && frame_count > 10){
		current_scene = game_over_scene;
	}

	s.head.velocity.rotate(STEER_AMOUNT * (keys_pressed[RIGHT_KEY] - keys_pressed[LEFT_KEY]));

	draw_left_arrow();
	draw_right_arrow();

};
var game_scene = new Scene(game_d_func);
var current_scene = game_scene;

var frame_count =0;
var draw = function() {
	frame_count++;
	current_scene.draw();
};

const FRAME_SKIP = 30;
setInterval(draw,FRAME_SKIP);


//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//ctx.stroke();
//ctx.closePath();