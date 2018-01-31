var DAMPING = 0.4;


var Mover = function(position) {
	this.position = position.copy();
	this.velocity = Vector.zero();
	this.acceleration = Vector.zero();
};
Mover.prototype.move = function() {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	this.acceleration.mult(0);
};
Mover.prototype.apply_force = function(force){
	this.acceleration.add(force.copy());
};
Mover.prototype.pull_to = function(position, k){
	var f = position.copy().sub(this.position).mult(k);
	f.sub(Vector.mult(this.velocity, DAMPING));
	this.apply_force(f)
};
Mover.prototype.toString = function() {
	return "Position: " + this.position + " ,Velocity:" + this.velocity + " ,Acceleration: " + this.acceleration;
};
