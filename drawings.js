
// an arrow to the right
var arrow = function(direction) {
    var direction;
    var tail_length = 40;
    var head_length = 20; 
    var startx = 150;
    var centerx = startx + tail_length*direction;
    var endx = centerx + head_length*direction;

    var topy = 150;
    var tail_width = 30;
    var head_width = 60;
    var tipy = topy - tail_width / 2;
    polygon([
            vector(startx,  topy),
            vector(centerx, topy),
            vector(centerx, topy + (head_width - tail_width)/2),
            vector(endx,    tipy),
            vector(centerx, topy - tail_width - (head_width - tail_width)/2),
            vector(centerx, topy - tail_width),
            vector(startx,  topy - tail_width)
            ]);
};