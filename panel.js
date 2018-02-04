

// should maybe be square panel
var Panel = function(context,x,y,w,h) {
    this.context = context;
    this.x = x;
    this.y = y
    this.w = w;
    this. h = h;
};
Panel.prototype.beginPath = function() {
    // clear any existing path, o clip only the rext
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.w, this.h)
    this.context.clip();
    this.context.translate(this.x, this.y);
    this.context.beginPath();
};