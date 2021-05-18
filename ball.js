class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
    
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
  