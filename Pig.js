class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,150,80);
    this.image = loadImage("sprites/pig2.png.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 150, 80);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};