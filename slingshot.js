class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
       
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
       var point1 = this.sling.bodyA.position;
       var point2 = this.pointB;
        line(point1.x,point1.y,point2.x,point2.y)
        console.log(point1.x);
        }
    }
}
