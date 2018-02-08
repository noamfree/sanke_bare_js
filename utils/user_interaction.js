var keys_pressed = {};
keyHandler = function(e) {
    keys_pressed[e.keyCode] = (e.type == 'keydown');
};

document.addEventListener("keydown", keyHandler, false);
document.addEventListener("keyup", keyHandler, false);

var RIGHT_KEY = 39;
var LEFT_KEY = 37;

var use_key = function(key) {
    keys_pressed[key] = 0;
}