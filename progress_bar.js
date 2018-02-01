var ProgressBar = function() {
    this.max_fill = 300;
    this.cur_fill = 100;
};
ProgressBar.prototype.draw = function(position, length) {
    fill(0,0,0);
    rect(position.x, position.y, length, 30, 10);
    fill(255,0,0);
    var padding = 3;
    rect(position.x + padding, position.y + padding,
         length * this.cur_fill / this.max_fill- (2*padding), 30 - (2*padding), 
         8);
};
ProgressBar.prototype.fill = function(amount) {
    if (amount === undefined) {amount = this.max_fill;}
    this.cur_fill += amount;
    this.cur_fill = constraint(this.cur_fill, 0, this.max_fill);
};
ProgressBar.prototype.empty = function(amount) {
    this.fill(-amount);
};
