class Base {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width - 20;
      this.height = height - 20;
      this.image = loadImage("dustbin.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
    //   translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CORNERS);
      image(this.image, 600, 365, 800, 170);
      pop();
    }
  }