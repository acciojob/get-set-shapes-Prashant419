class Rectangle {
 constructor(width, height) {
   if (width <= 0 || height <= 0) {
     throw new Error("Width and height must be positive integers.");
   }
   this._width = width;
   this._height = height;
 }

 get width() {
   return this._width;
 }

 get height() {
   return this._height;
 }

 getArea() {
   return this._width * this._height;
 }
}

class Square extends Rectangle {
 constructor(side) {
   super(side, side); // Call the Rectangle constructor with side as both width and height
 }

 getPerimeter() {
   return 4 * this._width; // Access the inherited width property
 }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;