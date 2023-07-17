class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }
  }
  
  class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    draw() {
      console.log(`Drawing a triangle with base ${this.base} and height ${this.height}`);
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    draw() {
      console.log(`Drawing a square with side ${this.side}`);
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  