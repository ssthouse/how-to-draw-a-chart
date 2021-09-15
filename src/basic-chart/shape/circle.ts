import Point from "./point";

class Circle {
  centerPoint: Point;
  radius: number;

  constructor(centerPoint: Point, radius: number) {
    this.centerPoint = centerPoint;
    this.radius = radius;
  }
}

export default Circle;
