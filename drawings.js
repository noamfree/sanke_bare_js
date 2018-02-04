const directions = {right:1, left:-1};

// directioin - 1:right, -1:left
var arrow = function(direction, start_x , center_y, length, width) {
    var direction;
    var tail_length = length * 2 / 3;
    var head_length = length * 1 / 3 ;

    var centerx = start_x + tail_length*direction;
    var endx = centerx + head_length*direction;

    var tail_width = width / 2;
    var head_width = width ;

    polygon([
            vector(start_x,  center_y - tail_width/2),
            vector(centerx, center_y - tail_width/2),
            vector(centerx, center_y - head_width/2),
            vector(endx,    center_y),
            vector(centerx, center_y + head_width/2),
            vector(centerx, center_y + tail_width/2),
            vector(start_x,  center_y + tail_width/2)
            ]);
};