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
};
Vector.prototype.rotate = function(angle) {
	var x = Math.cos(angle)*this.x - Math.sin(angle) * this.y;
	var y = Math.sin(angle)*this.x + Math.cos(angle) * this.y;
	this.x=x;
	this.y=y;
};