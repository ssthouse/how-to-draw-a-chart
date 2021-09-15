import Point from "./point";

export interface LineStyle {
  width: number;
  fillStyle: "solid" | "dashed";
  color: "black" | "white" | "red" | "blue" | "yellow";
}

class Line {
  public startPoint: Point;
  public endPoint: Point;
  public lineStyle: LineStyle;

  constructor(startPoint: Point, endPoint: Point) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }
}

export default Line;
