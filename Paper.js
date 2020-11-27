class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.3
      }
      this.body = Bodies.rectangle(x, y, 50, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rect(pos.x, pos.y, 50, this.height);

    }
};
