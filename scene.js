var Scene = function(d_func) {
	this.d_func = d_func;
};
Scene.prototype.draw = function() {
	this.d_func();
};