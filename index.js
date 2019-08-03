// Add your Circle class here
class Circle {

  constructor(radius) {
    this.radius = radius

  }

  get diameter() {
    this._diameter = this.radius * 2
    return this._diameter;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(n) {
    this.
  }




}
