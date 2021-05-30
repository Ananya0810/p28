class Paper{
    constructor(){

var options={
   restitution:0.3,
    friction:0.5,
    density:1.2
    }

this.body=bodies.circle(50.650,20,options)
World.add(world,this.body)




    }

     display()
    {
      push ()
      translate (this.body.position.x,this.body.position.y)
      rotate (this.body.angle)
        fill("pink")
     
        circle(0,0,40,40)
        pop ()
    }
}
