class Dustbin {
  constructor(x,y) {
  var options = {
  isStatic:true
  }
  
   this.image=loadImage("dustbinimage.png");
    }
    
  display(){
  image(this.image,900,550,300,200);
  }
  }

