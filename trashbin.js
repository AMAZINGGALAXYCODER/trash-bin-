class bin  {

    constructor(x,y) {
        var options = {
          isStatic : true
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        rectMode(CENTER);
        fill(255,0,0);
        rect(0,0,this.width,this.height);
        pop();
      }
    }  
