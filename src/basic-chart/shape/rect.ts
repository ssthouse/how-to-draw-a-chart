import { LineStyle } from "./line";

class Rect {
  public left: number;
  public top: number;
  public right: number;
  public bottom: number;
  public borderRadius = 0;
  public borderStyle: LineStyle;

  constructor({
    left,
    top,
    right,
    bottom
  }: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}

export default Rect;
