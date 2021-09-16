import { LineStyle } from "./line";
import { Color } from "./shape";

class Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  borderRadius = 0;
  borderStyle: LineStyle = {
    color: "black",
    width: 1
  };
  isFill: boolean = false;
  fillColor: Color = "transparent";

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
