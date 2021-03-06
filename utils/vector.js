var Vector = function(x,y) {
	this.x = x;
	this.y = y;
};
Vector.prototype.toString = function() {
	return "[" + this.x + ", " + this.y + "]" ;
};
Vector.prototype.add = function(other) {
	this.x += other.x;
	this.y += other.y;
	return this;
};
Vector.neg = function(v) {
	return new Vector(-v.x, -v.y);
};
Vector.mult = function(v, scalar) {
	return v.copy().mult(scalar);
};
Vector.sub = function(v,u) {
	return v.copy().sub(u);
}
Vector.prototype.div = function(scalar) {
	if (scalar === 0) {
		//TODO: raise some exceptioni
	}
	else {
		this.mult(1/scalar);
	}
	return this;
};
Vector.prototype.sub = function(other) {
	return this.add(Vector.neg(other));
};
Vector.prototype.mult = function(scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;

};
Vector.prototype.rotate = function(angle) {
	var x = Math.cos(angle)*this.x - Math.sin(angle) * this.y;
	var y = Math.sin(angle)*this.x + Math.cos(angle) * this.y;
	this.x=x;
	this.y=y;
	return this;
};
Vector.prototype.copy = function() {
	return new Vector(this.x, this.y);
}
Vector.prototype.mag = function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
Vector.prototype.angle = function() {
	return Math.atan2(this.y, this.x);
};



Vector.zero = function() {
	return new Vector(0,0);
};

var vector = function(x,y) {
	return new Vector(x,y);
};