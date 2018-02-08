var FOOD_SIZE = 5;
var FOOD_COLOR = color(255, 50, 50);

var Food = function (position) {
    this.position = position;
};

Food.prototype.draw = function () {
    ctx.save();
    fill(FOOD_COLOR);
    ellipse(this.position.x, this.position.y, FOOD_SIZE, FOOD_SIZE);
    ctx.restore()
};