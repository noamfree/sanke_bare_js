var SnakeHead = function(position) {
	this.position = position;
	this.velocity = new Vector(1,0);
};
SnakeHead.prototype.draw = function(){
	ctx.save();
	fill(255,50,50);
	ellipse(this.position.x, this.position.y, 20,20);
	ctx.restore();
};
SnakeHead.prototype.move = function(){
	this.position.add(this.velocity);
};