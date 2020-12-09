class Box{ 
  constructor(x,y,width,height){ 
      var options = { 
          restitution: 0.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255; 
      World.add(world,this.body);
  }
  display(){
      if(this.body.speed<4){ 
        var pos = this.body.position;
        var angle = this.body.angle; 
        push(); 
        translate(pos.x, pos.y); 
        rectMode(CENTER);
        fill(135,206,234);
        rect(0,0,this.width,this.height);
        pop(); 
      } else{
          World.remove(world,this.body); 
          push(); 
          this.visibility = this.visibility-5;
          tint(255,this.visibility); 
          rect(0,0,this.width,this.height);
          pop();
      }
  }

  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }
}