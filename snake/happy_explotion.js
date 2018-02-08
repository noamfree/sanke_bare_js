var ExplotionParticle = function(position,  color){
    Mover.call(this, position);
    this.c = color;
};
ExplotionParticle.prototype = Object.create(Mover.prototype);
ExplotionParticle.prototype.draw = function(length) {

    stroke(this.c);
    line(this.position.x, this.position.y, this.velocity.angle() , length*this.velocity.mag());
};

var EXPLOTION_LIFE_TIME = 100;
var EXPLOTION_PARTICEL_NUM = 50;

var HappyExplotion = function(position, life_time){
    var num_of_particles = EXPLOTION_PARTICEL_NUM;
    if  (life_time === undefined) {life_time = EXPLOTION_LIFE_TIME }
    this.max_life_time = life_time;
    this.life = this.max_life_time;

    var c = strong_hue_color(Math.random());
    this.particles = [];
    for (var i=0; i<num_of_particles; i++) {
        var particle = new ExplotionParticle(position, c/*RGBColor.mix(color, random_color())*/);
        // 0.5 is th minimal speed. otherwise, gravity pulls most particles down.
        var speed = Math.random() * (1 + 0.5) + 0.5;
        var angle = Math.random() * (Math.PI * 2);
        particle.velocity = new Vector(speed,0).rotate(angle);
        this.particles.push(particle);
    }
};
HappyExplotion.prototype.draw = function() {
    ctx.save();
    ctx.lineWidth = 3;
    line_mode("RADIUS");
    for (var i=0; i< this.particles.length; i++) {
        ctx.globalAlpha =  this.life / this.max_life_time;
        this.particles[i].draw((this.max_life_time - this.life)/4);
    }
    ctx.restore();
};
HappyExplotion.prototype.move = function() {
    for (var i=0; i< this.particles.length; i++) {
        this.particles[i].apply_force(new Vector(0,0.015));
        this.particles[i].move();
    }
    this.life--;
};
HappyExplotion.prototype.is_alive = function() {
    return this.life > 0;
};