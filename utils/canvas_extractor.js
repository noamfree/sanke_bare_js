var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

var my_drawers_stack = [drawer];
s_drawer = my_drawers_stack[my_drawers_stack.length-1];
var pushDrawer = function(con) {
	my_drawers_stack.push(con);
	s_drawer = my_drawers_stack[my_drawers_stack.length-1];
};
var popDrawer = function() {
	my_drawers_stack.pop();
	s_drawer = my_drawers_stack[my_drawers_stack.length-1];
};


