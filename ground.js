class Ground{
    constructor(x,y,width,height){
        var body_opption={
         isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,body_opption);
        this.width=width
        this.height=height
      World.add(world,this.body)


    }

   display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  
   }

}