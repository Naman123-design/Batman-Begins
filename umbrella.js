class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
        "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        //animationMode(CENTER);
        animation(this.image,pos.x,pos.y-140,300,300);
    }
}