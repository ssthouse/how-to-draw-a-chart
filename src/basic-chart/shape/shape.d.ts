import Circle from "./circle";
import Line from "./line";
import Rect from "./rect";
import Text from "./text";

export type Color =
  | "black"
  | "white"
  | "red"
  | "blue"
  | "yellow"
  | "transparent";

export type Shape = Line | Circle | Rect | Text;
