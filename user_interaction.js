var keys_pressed = {};
keyHandler = function(e) {
    keys_pressed[e.keyCode] = (e.type == 'keydown');
};

document.addEventListener("keydown", keyHandler, false);
document.addEventListener("keyup", keyHandler, false);