class SlingShot{
    constructor(bodyA, pointB){  // bodyA=bird.body   pointB= {x:200,y:50}
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null; // bodyA=no more bird (null = nothing)
    }
atach(body){   //body=bird.body
    this.sling.bodyA=body;       // bodyA=bird.body
}
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            if(pointA.x<220)
            {
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+35, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-20,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+35, pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-20,15,30);

            }
        }
    }
    
}