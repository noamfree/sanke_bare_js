var Color = function(){};

var HSLColor = function(h,s,l) {
    this.h = h;
    this.s = s;
    this.l = l;
};
HSLColor.prototype = Object.create(Color);
HSLColor.prototype.complement = function() {
    return new HSLColor((this.h + 0.5) %  1.0, this.s, this.l);
};

HSLColor.prototype.toString = function() {
    return "hsl(" +  this.h*360 +"," + this.s*100 +"%," +this.l*100 +"%)";
};

var RGBColor = function(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
};
RGBColor.prototype = Object.create(Color);
RGBColor.prototype.toString = function() {
    return "rgb(" +  this.r +"," + this.g +"," +this.b +")";
};
RGBColor.prototype.copy = function() {
	return new RGBColor(this.r, this.g, this.b);
};

var color = function(r,g,b){
	if (r.prototype === Color.prototype) {return r;}
    return new RGBColor(r,g,b)
};
var random_color = function() {
    return color(randint(0,255), randint(0,255), randint(0,255));
};



/**
 * 
 * @param {float} h - from 0 to 1 
 * @param {*} s 
 * @param {*} l 
 */
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return new RGBColor(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}
HSLColor.prototype.to_rgb = function() {
    return hslToRgb(this.h, this.s, this.l);
};

var strong_hue_color = function(h) {
    return new HSLColor(h,1,0.5);
};


var color_to_text = function(r,g,b) {
	if (r.prototype === Color.prototype) {
		return r.toString();
	}
	return "rgb(" +r+ "," +g+ "," +b+ ")";
};