const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle();
      circle.setColor('red');
      const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
      expect(circle.render()).toEqual(expectedSVG);
    });
  });


  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square();
      square.setColor('green');
      const expectedSVG = '<rect x="100" y="50" width="100" height="100" fill="green" />';
      expect(square.render()).toEqual(expectedSVG);
    });
  });

  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toEqual(expectedSVG);
    });
  });
