class sling{
    constructor(BodyA, pointB){
        var options ={
            bodyA : BodyA ,
            pointB : pointB ,
            stiffness : 0.04 ,
            length : 50
        }
            this.pointB = pointB ;
            this.sling = Constraint.create(options);
            World.add(world,this.sling);
    }
        fly(){
            this.sling.bodyA = null ;  
    }
       /* attach(){
            this.sling.bodyA = this.polygon ;
        }*/
        display(){
            if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position ;
         var pointB = this.pointB ;
         strokeWeight(2);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
