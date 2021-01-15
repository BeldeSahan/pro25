class Paper {
    constructor(x,y,r) {
    var options = {
      isStatic:false,
      restitution:0.00000000000001,
      friction:100000000000,
      density:0.5
      
    }
this.image=loadImage("paperimage.png");
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);
      }
      
    display(){
        var paperpos=this.body.position;
       // var angle = this.body.angle;
    push()
    translate(paperpos.x,paperpos.y);
    
   // rotate(angle);
    rectMode(CENTER)
    //ellipse(0,0,this.r,this.r);
   
    image(this.image,-5,-5,this.r/1.5,this.r/1.5);
    pop()

    }
    }
  
  