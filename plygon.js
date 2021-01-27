class Polygon{
    constructor(x, y, r) {
       
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r);
        this.pImage = loadImage("polygon.png")
        
        World.add(world, this.body);
      }
      display(){
       
        var angle = this.body.angle;
         push();
          translate(this.body.position.x, this.body.position.y);
           rotate(angle);
            image(this.pImage,0,0,this.r,this.r);
            pop();
      }
}