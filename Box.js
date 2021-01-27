class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibilty = 225;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed<5) 
      {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
      console.log(this.body.speed)
      }
      else
      {
       World.remove(world, this.body);
       push();
       this.Visibilty = this.Visibilty-5;
       pop();
      }
    }

    score()
    {
      console.log(this.Visibilty)
      if(this.Visibilty<0 && this.Visibilty>-105)
      {
      score++;
      }
    }
  };
  //submit the code 