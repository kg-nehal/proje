class chain2 {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 7,
            stiffness: 0.5
        }
        this.chain2 = Constraint.create(options);
        World.add(world, this.chain2);
    }
    display(){
        var pointA = this.chain2.bodyA.position;
        var pointB = this.chain2.bodyB.position;
        strokeWeight(2);
        line(pointA.x, pointA.y,pointB.x, pointB.y);
    }
}