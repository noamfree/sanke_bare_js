

// should maybe be square panel
var Panel = function(parent_drawer,x,y,w,h) {

    this.parent_drawer = parent_drawer;

    this.x = x;
    this.y = y
    this.w = w;
    this. h = h;
};
Panel.prototype.pre_shape = function() {
    // clear any existing path, o clip only the rect
    this.parent_drawer.pre_shape();
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.beginPath();
    ctx.rect(0, 0, this.w, this.h)
    ctx.clip();
    // ctx.beginPath() so the clipping path ends.
    ctx.beginPath();    

};
Panel.prototype.post_shape = function() {
    ctx.restore();
    this.parent_drawer.post_shape();
};