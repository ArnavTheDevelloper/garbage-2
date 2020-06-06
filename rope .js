class Rope{

constructor ( BodyA , pointB ){

var options = {

BodyA : BodyA,
pointB : pointB,
stifness : 0.6,
length : 10

}

this.sling = Matter.Constraint.create(options);
this.pointB =pointB
World.add(world, this.sling);

}

fly(){   

    this.sling.bodyA = null;

  }
 
  display(){

        if(this.sling.bodyA!==null){
        var pointA = this.sling.bodyA.position;``
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);


        }

  }




}