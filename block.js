class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.9,
       'friction':0.9,
       // 'density':1.
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed < 6){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(0, 0, this.width, this.height);
     pop();
}
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }

};
