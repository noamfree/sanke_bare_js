var ProgressBar = function() {
    this.max_fill = 300;
    this.cur_fill = 100;
};
ProgressBar.prototype.draw = function(position, length) {
    fill(0,0,0);
    var height = 30;
    rect(position.x, position.y, length, height, 15);
    fill(255,0,0);
    var padding = 4;
    rect(position.x + padding, position.y + padding,
         (length-2*padding) * this.cur_fill / this.max_fill, height - (2*padding)
        ,12);
};
ProgressBar.prototype.fill = function(amount) {
    if (amount === undefined) {amount = this.max_fill;}
    this.cur_fill += amount;
    this.cur_fill = constraint(this.cur_fill, 0, this.max_fill);
};
ProgressBar.prototype.empty = function(amount) {
    if (amount === undefined) {amount = this.max_fill;} 
    this.fill(-amount);
};
ProgressBar.prototype.toString = function() {
    return "Progress Bar: " + this.cur_fill + "/" + this.max_fill; 
};
