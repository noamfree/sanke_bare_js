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


const line_mode_options = ["END_POINTS", "RADIUS"]
var LINE_MODE = "END_POINTS";
var line_mode = function(mode){
	// TODO: raise exception if mode not in modes.
	LINE_MODE = mode;
};
var line = function(x1, y1, x2, y2) {
	if (LINE_MODE === "END_POINTS"){
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	}
	else if (LINE_MODE === "RADIUS"){
		var line = new Vector(y2, 0);
		line.rotate(x2);
		x2 = x1 + line.x;
		y2 = y1 + line.y;

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}
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

var color_to_text = function(r,g,b) {
	if (r instanceof Color) {
		var color = r;
		r=color.r; g=color.g; b=color.b;
	}
	return "rgb(" +r+ "," +g+ "," +b+ ")";
};

var fill = function(r,g,b) {
	ctx.fillStyle = color_to_text(r,g,b);
};

var stroke = function(r,g,b) {
	ctx.strokeStyle = color_to_text(r,g,b);
};

var background = function(r,g,b) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	
	fill(r,g,b);
	rect(0, 0, canvas.width, canvas.height);
	
	ctx.restore();
};
