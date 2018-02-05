


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

var my_drawers_stack = [drawer];
s_drawer = my_drawers_stack[my_drawers_stack.length-1];
var pushDrawer = function(con) {
	my_drawers_stack.push(con);
	s_drawer = my_drawers_stack[my_drawers_stack.length-1];
};
var popDrawer = function() {
	my_drawers_stack.pop();
	s_drawer = my_drawers_stack[my_drawers_stack.length-1];
};


var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var STEER_AMOUNT = 0.12;

var f;
var s;
var eating_explotions;
var combo_bar ;
var combo_bar_position;

var init_game = function() {
	f = new Food(new Vector(200,300));

	s = new Snake(new Vector(200,200), 4);
	eating_explotions = [];

	combo_bar = new ProgressBar();
	combo_bar_position = new Vector(50,550);

};
init_game();


var game_d_func = function() {
	
	background(200,200,200);

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


	if(s.touching_itself()){
		ellipse(10,10,40,40);
	}

	no_fill();
	if(keys_pressed[LEFT_KEY]) {
		s.head.velocity.rotate(-STEER_AMOUNT);
		fill(50,255,80);
	}
	arrow(directions.left, 500,height-50, 60, 30);

	no_fill();
	if(keys_pressed[RIGHT_KEY]) {
		s.head.velocity.rotate(STEER_AMOUNT);
		fill(50,255,80);
	}
	arrow(directions.right, 500,height-50, 60, 30);

};
var game_scene = new Scene(game_d_func);
var current_scene = game_scene;


var draw = function() {
	current_scene.draw();

};

const FRAME_SKIP = 30;
setInterval(draw,FRAME_SKIP);



// background(200,0,0);
// rect(0,0, 100, 100);
// var panel = new Panel(drawer, 100,100, 500,500);
// pushContext(panel);
// background(200,200,0 );
// fill(255,0,0);
// rect(-5,-5,100,100);
// pushContext(new Panel(panel, 100,100,100,100));
// background(100,100,0);

// rect(-5,-5,60,40);



// fill(50,255,50);
// ellipse(0,0,20,10);
// ellipse(10,100,20,10);
// ellipse(0,100,20,10);


//rect(100, 100, 50, 50);
//
//ellipse(200,200,50, 50);


//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//ctx.stroke();
//ctx.closePath();