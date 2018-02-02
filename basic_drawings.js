


// corner mode
var rect = function(x,y,w,h,r){
	if (r === undefined) {
		ctx.beginPath();
		ctx.rect(x,y,w,h);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	else
	{
		// althogh this makes some interesting shapes (try rect(400,400,100,100,100);!!), we should'nt use this with r > min(h,w)/2

		// first approach is to set r = Math.min(w,h)/2. does problems when w || h <=0

		//if the rect is to small for such a radius, draw a bigger one, and scale it.
		var sx = Math.min(w/(2*r), 1);
		var sy = Math.min(h/(2*r), 1);
		// we can refactor, if 2r<w, &&2r<h or if r<0, use ellipse. 

		h = h/sy;
		w = w/sx;
		x = x/sx;
		y = y/sy;

		ctx.save();
		ctx.scale(sx, sy);
		var rad = Math.abs(r);

		ctx.beginPath();
		ctx.moveTo(x+r, y);
		ctx.lineTo(x+w-r,y);
		ctx.arc(x+w-r,y+r,r,Math.PI*1.5,Math.PI*2);
		ctx.lineTo(x+w,y+h-r);
		ctx.arc(x+w-r,y+h-r,r,0,Math.PI/2);
		ctx.lineTo(x+r, y+h);
		ctx.arc(x+r,y+h-r,r,Math.PI*0.5,Math.PI);
		ctx.lineTo(x, y+r);
		ctx.arc(x+r,y+r,r,Math.PI,Math.PI*1.5);


		ctx.restore();
		ctx.fill();
		ctx.stroke();
	}
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
	ctx.arc(x, y/(h/w), w, 0, 2 * Math.PI);

	ctx.restore();

	ctx.fill();
	ctx.stroke();  
};

var polygon = function(point_list) {
	ctx.beginPath();
	ctx.moveTo(point_list[0].x, point_list[0].y);
	for (var i=1; i< point_list.length; i++) {
		var p = point_list[i];
		ctx.lineTo(p.x, p.y);
	}
	ctx.closePath();

	ctx.fill();
	ctx.stroke();  
};



var fill = function(r,g,b) {
	ctx.fillStyle = color_to_text(r,g,b);
};

var stroke = function(r,g,b) {
	ctx.strokeStyle = color_to_text(r,g,b);
};

var background_color=color(255,255,255);
var background = function(r,g,b) {
	background_color = color(r,g,b);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	fill(background_color);
	rect(0, 0, canvas.width, canvas.height);
	
	ctx.restore();
};

