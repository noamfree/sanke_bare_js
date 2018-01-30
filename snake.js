var Mover = function(position) {
	this.position = position.copy();
	this.velocity = new Vector(0,0);
	this.acceleration = new Vector(0,0);
};
Mover.prototype.move = function() {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	this.acceleration.mult(0);
};
Mover.prototype.apply_force = function(force){
	this.acceleration.add(force.copy());
};
Mover.prototype.pull_to = function(position){
	var DAMPING = 1.2;
	var f = position.copy().sub(this.position).div(10);
	f.sub(Vector.mult(this.velocity, DAMPING));
	this.apply_force(f)
};
Mover.prototype.toString = function() {
	return "Position: " + this.position + " ,Velocity:" + this.velocity + " ,Acceleration: " + this.acceleration;
};


var SnakeHead = function(position) {
	Mover.call(this, position);
	this.velocity = new Vector(1,0);
};
SnakeHead.prototype = Object.create(Mover.prototype);
SnakeHead.prototype.draw = function(){
	ctx.save();
	fill(255,50,50);
	ellipse(this.position.x, this.position.y, 20,20);
	ctx.restore();
};



var SnakePart = function(part_to_follow){
	this.lead = part_to_follow;
	Mover.call(this, this.lead.position);
};
SnakePart.prototype = Object.create(Mover.prototype);
SnakePart.prototype.draw = function() {
	ctx.save();
	fill(255,50,50);
	ellipse(this.position.x, this.position.y, 20,20);
	ctx.restore();
};
SnakePart.prototype.move = function() {
	this.pull_to(this.lead.position);
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