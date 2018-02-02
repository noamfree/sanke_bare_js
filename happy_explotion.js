


var ExplotionParticle = function(position,  color){
    Mover.call(this, position);
    this.color = color;
};
ExplotionParticle.prototype = Object.create(Mover.prototype);
ExplotionParticle.prototype.draw = function(length) {
    stroke(this.color);
    line(this.position.x, this.position.y, this.velocity.angle() , length*this.velocity.mag()/2);
};


var HappyExplotion = function(position){

    this.max_life = 100;
    this.life = this.max_life;

    var num_of_particles = 60;

    var color = strong_hue(Math.random());
    this.particles = [];
    for (var i=0; i<num_of_particles; i++) {
        var speed = Math.random() * 1.5 + 0.5;
        var angle = Math.random() * Math.PI * 2;
        var particle = new ExplotionParticle(position, color/*RGBColor.mix(color, random_color())*/);
        particle.velocity = new Vector(speed,0).rotate(angle);
        this.particles.push(particle);
    }
    // for (var i=0; i<num_of_particles; i++) {
    //     var particle = new ExplotionParticle(position, random_color());
    //     particle.velocity = new Vector(this.speed/2,0).rotate(2*Math.PI * i / num_of_particles);
    //     this.particles.push(particle);
    // }
};
HappyExplotion.prototype.draw = function() {
    ctx.save();
    ctx.lineWidth = 3;
    line_mode("RADIUS");
    for (var i=0; i< this.particles.length; i++) {
        ctx.globalAlpha =  this.life / this.max_life;
        this.particles[i].draw((this.max_life - this.life)/2);
    }
    ctx.restore();
};
HappyExplotion.prototype.move = function() {
    for (var i=0; i< this.particles.length; i++) {
        this.particles[i].apply_force(new Vector(0,0.01));
        this.particles[i].move();
    }
    this.life--;
};
HappyExplotion.prototype.is_alive = function() {
    return this.life > 0;
};