// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(a, n, d, t){
      this.a = a;
      this.k = n/d;
      this.theta = t;
      this.theta_vel = 0.025 * Math.random(1,3);
      this.theta_acc = 0;
      this.x = 0;
      this.y = 0;
      this.counter = 0;
      this.radius = 5;
      this.createParticle();
    }
  
  // creation of a particle.
    createParticle() {
      noStroke();
      fill('rgba(255,255,255,0.5)');
      circle(this.x,this.y,this.radius);
      //console.log("particle drawn");
    }
  
  // setting the particle in motion.
    
    update() {
      this.n += 0.001;
      this.d += 0.001;
      //this.theta_acc = -0.0005*sin(this.counter/this.k);
      //this.theta_vel += this.theta_acc;
      this.theta += this.theta_vel;
      this.x = this.a * cos(this.theta * this.k) * cos(this.theta);
      this.y = this.a * cos(this.theta * this.k) * sin(this.theta);
      this.createParticle();
    }
  
  }
  
  class ParticleFlower {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      // flower variables
      this.amplitude = 300;
      this.n = 5;
      this.d = 3;
      // Angle and angular velocity, accleration
      this.theta = 0;
      this.theta_offset = 0.003 * (this.d * this.n);
      this.x = 0;
      this.y = 0;
      this.rot = 0;
      this.rotv = 0.01;
      this.particles = [];
      this.createTrail();
    }
    
    createTrail(){
      for(var i = 0; i < 200; i++){
        let newTheta = this.theta + this.theta_offset*i;
        this.particles.push(new Particle(this.amplitude, this.n, this.d, newTheta));
      }
      //console.log("particles created");
    }
    
    update(){
      //console.log("trail updated");
      this.rot += this.rotv;
      rotate(this.rot);
      for(let i = 0; i<this.particles.length; i++) {
        this.particles[i].update();
      }
    }
    changeK(n,d){
      for(let i = 0; i<this.particles.length; i++) {
        this.particles[i].k = n/d;
      }
    }
  }
  
  let flower;
  function setup() {
    createCanvas(600, 400);
    flower = new ParticleFlower();
  }
  
  function draw() {
    background('#0f0f0f');
    translate(width / 2, height / 2);
    flower.update();
  }
  
  function mousePressed() {
    flower.rotv = 0.001* (Math.random() * 30 - 15)
    
    let n = Math.floor(Math.random() * 10) + 1;
    let d;
    do{
      d = Math.floor(Math.random() * 10) + 1;
    }while(d == n)
    flower.changeK(n,d);
  }