var Color = function(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
};
var color = function(r,g,b){
    return new Color(r,g,b)
};
var random_color = function() {
    return color(randint(0,255), randint(0,255), randint(0,255));
};


// corner mode
var rect = function(x,y,h,w){
	ctx.beginPath();
	ctx.rect(x,y,h,w);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};

var line = function(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
};

// center mode
var ellipse = function(x,y,w,h) {
	ctx.save();
	
	ctx.scale(1,  h/w);
	ctx.beginPath();
	ctx.arc(x, y, w, 0, 2 * Math.PI);

	ctx.restore();

	ctx.fill();
	ctx.stroke();  
};



var fill = function(r,g,b) {
	if (r instanceof Color) {
		var color = r;
		ctx.fillStyle = "rgb(" +color.r+ "," +color.g+ "," +color.b+ ")";
	}
	ctx.fillStyle = "rgb(" +r+ "," +g+ "," +b+ ")";
};

var background = function(r,g,b) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	
	fill(r,g,b);
	rect(0, 0, canvas.width, canvas.height);
	
	ctx.restore();
};
