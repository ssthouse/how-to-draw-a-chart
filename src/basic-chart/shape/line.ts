import Point from "./point";
import { Color } from "./shape";

export interface LineStyle {
  width?: number;
  fillStyle?: "solid" | "dashed";
  color?: Color;
}

class Line {
  public startPoint: Point;
  public endPoint: Point;
  public lineStyle: LineStyle = {
    color: "black",
    fillStyle: "solid",
    width: 1
  };

  constructor(startPoint: Point, endPoint: Point) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  getLength(): number {
    const horizontalSize = this.endPoint.x - this.startPoint.x;
    const verticalSize = this.endPoint.y - this.startPoint.y;
    const length = Math.sqrt(
      Math.pow(horizontalSize, 2) + Math.pow(verticalSize, 2)
    );
    return length;
  }

  /**
   * 顺时针旋转角度
   */
  getRotateDegree(): number {
    const horizontalSize = this.endPoint.x - this.startPoint.x;
    const verticalSize = this.endPoint.y - this.startPoint.y;

    const theta = Math.atan2(verticalSize, horizontalSize); // [0, Ⲡ] then [-Ⲡ, 0]; clockwise; 0° = east
    const degree = (theta * 180) / Math.PI; // [0, 180] then [-180, 0]; clockwise; 0° = east
    return degree < 0 ? degree + 360 : degree;
  }
}

export default Line;
