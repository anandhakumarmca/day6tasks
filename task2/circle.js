//Convert the UML diagram to JavaScript class
class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

 get radius() {
    return this._radius;
  }
  
 set radius(newRadius) {
    this._radius = newRadius;
  }
  
 get color(){
     return this._color;
 }
 
 set color(newColor) {
    this._color = newColor;
  }
  
  get area(){
     return Math.PI * this.radius * this.radius; 
  }
  
  get circumference(){
       return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle ('1.0', "Red");
console.log("Before set Radius and Color\n")
console.log("Radius : "+myCircle.radius+"\nColor : "+myCircle.color+"\nArea : "+myCircle.area+"\nCircumference : "+myCircle.circumference+"\n");
myCircle.radius = '5.2';
myCircle.color = "Green";
console.log("After set Radius and Color\n")
console.log("Radius : "+myCircle.radius+"\nColor : "+myCircle.color+"\nArea : "+myCircle.area+"\nCircumference : "+myCircle.circumference);
