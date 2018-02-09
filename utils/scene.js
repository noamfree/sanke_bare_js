var Scene = function(d_func) {
	this.d_func = d_func;
};
Scene.prototype.draw = function() {
	this.d_func();
};




var StaticScene = function(d_func) {
	Scene.call(this, d_func);
	this.reset();
};
StaticScene.parent = Scene;
StaticScene.prototype = Object.create(StaticScene.parent.prototype);
StaticScene.prototype.draw = function() {
	if (! this.drawen) {
		StaticScene.parent.prototype.draw.call(this);
		this.drawen = true;
	}
};
StaticScene.prototype.reset = function() {
	this.drawen = false;
};

