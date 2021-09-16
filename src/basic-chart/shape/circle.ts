import { LineStyle } from "./line";
import Point from "./point";
import { Color } from "./shape";

export interface CircleStyle {
  fill: boolean;
  color: Color;
  borderWidth: number;
  borderColor: Color;
}

class Circle {
  isFill: boolean = false;
  fillColor: Color = "black";
  borderStyle: LineStyle = {
    width: 1,
    color: "black"
  };
  centerPoint: Point;
  radius: number;
  style: CircleStyle = {
    fill: true,
    color: "black",
    borderWidth: 1,
    borderColor: "black"
  };

  constructor(centerPoint: Point, radius: number) {
    this.centerPoint = centerPoint;
    this.radius = radius;
  }
}

export default Circle;
