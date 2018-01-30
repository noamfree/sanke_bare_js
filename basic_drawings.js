// corner mode
var rect = function(x,y,h,w){
	ctx.beginPath();
	ctx.rect(x,y,h,w);
	ctx.closePath();
	ctx.fill();
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
	ctx.fillStyle = "rgb(" +r+ "," +g+ "," +b+ ")";
};

var background = function(r,g,b) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	
	fill(r,g,b);
	rect(0, 0, canvas.width, canvas.height);
	
	ctx.restore();
};