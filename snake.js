

var SNAKE_PART_SIZE = 10;
var SNAKE_VELOCITY = 3;

var SnakeHead = function(position) {
	Mover.call(this, position);
	this.velocity = new Vector(1,0).mult(SNAKE_VELOCITY);
};
SnakeHead.prototype = Object.create(Mover.prototype);
SnakeHead.prototype.draw = function(){
	ctx.save();
	fill(50,255,50);
	ellipse(this.position.x, this.position.y, SNAKE_PART_SIZE, SNAKE_PART_SIZE);
	ctx.restore();
};






var SnakePart = function(part_to_follow){
	this.lead = part_to_follow;
	Mover.call(this, this.lead.position);
};
SnakePart.prototype = Object.create(Mover.prototype);
SnakePart.prototype.draw = function() {
	ctx.save();
	fill(50,255,50);
	ellipse(this.position.x, this.position.y, SNAKE_PART_SIZE, SNAKE_PART_SIZE);
	ctx.restore();
};
SnakePart.prototype.move = function() {
	this.pull_to(this.lead.position, DAMPING/2*SNAKE_VELOCITY/SNAKE_PART_SIZE);
	Mover.prototype.move.call(this);
};




var Snake = function(position, length){
	this.head = new SnakeHead(position);
	this.tail = this.head;
	this.parts = [this.head];

	for (var i=1;i< length; i++) {
		this.grow();
	}
};
Snake.prototype.grow = function() {
	var part = new SnakePart(this.tail);
	this.parts.push(part);
	this.tail = part;
};
Snake.prototype.draw = function() {
	for (var i=this.parts.length -1; i >=0; i--)
	{
		this.parts[i].draw();
	}
};
Snake.prototype.move = function() {
	for (var i=this.parts.length -1; i >=0; i--)
	{
		this.parts[i].move();
	}
};
Snake.prototype.touching_itself = function() {
	for (var i=4; i< this.parts.length; i++) {
		if (Vector.sub(this.head.position, this.parts[i].position).mag() < 2*SNAKE_PART_SIZE) {return true;}
	}
	return false;
};