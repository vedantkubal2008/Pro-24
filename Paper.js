 class Paper{
     constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
     
       this.body = Bodies.circle(x,y,23,options);
       World.add(world,this.body)
      

   }

       display()   {
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("violet");
        ellipseMode(CENTER);
        ellipse(0,0,23);
        pop();
       }
       
     }
 
