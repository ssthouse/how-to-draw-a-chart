import { Color } from "./shape";

export default class Text {
  content: string = "";
  color: Color = "black";
  fontSize: number = 12;
  left: number;
  top: number;
  maxWidth: number = Number.MAX_SAFE_INTEGER;

  constructor(content: string, left: number, top: number) {
    this.content = content;
    this.left = left;
    this.top = top;
  }
}
