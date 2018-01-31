


var HappyParticle = function(position, color){
    Mover.call(this, position);
    this.color = color;
};
HappyParticle.prototype = Object.create(Mover.prototype);
HappyParticle.prototype.draw = function() {
    fill(this.color);
    ellipse(this.position.x, this.position.y,3,3);
};


var HappyExplotion = function(position){
    this.particles = [];
    this.max_life = 100;
    this.life = this.max_life;
    this.speed = 3;

    var num_of_particles = 20;
    for (var i=0; i<num_of_particles; i++) {
        var particle = new HappyParticle(position, random_color());
        particle.velocity = new Vector(this.speed,0).rotate(2*Math.PI * i / num_of_particles);
        this.particles.push(particle);
    }
};
HappyExplotion.prototype.draw = function() {
    ctx.save();
    ctx.lineWidth = 0.001;
    for (var i=0; i< this.particles.length; i++) {
        ctx.globalAlpha =  this.life / this.max_life;
        this.particles[i].draw();
    }
    ctx.restore();
};
HappyExplotion.prototype.move = function() {
    for (var i=0; i< this.particles.length; i++) {
        this.particles[i].move();
    }
    this.life--;
};
HappyExplotion.prototype.is_alive = function() {
    return this.life > 0;
}