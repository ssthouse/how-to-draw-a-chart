import Circle from "../shape/circle";
import Line from "../shape/line";
import Rect from "../shape/rect";
import Text from "../shape/text";

export function renderLine(ctx: CanvasRenderingContext2D, line: Line): void {
  ctx.beginPath();
  ctx.strokeStyle = line.lineStyle.color;
  ctx.lineWidth = line.lineStyle.width;
  ctx.moveTo(line.startPoint.x, line.startPoint.y);
  ctx.lineTo(line.endPoint.x, line.endPoint.y);
  ctx.stroke();
}

export function renderCircle(
  ctx: CanvasRenderingContext2D,
  circle: Circle
): void {
  ctx.beginPath();
  ctx.arc(
    circle.centerPoint.x,
    circle.centerPoint.y,
    circle.radius,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = circle.fillColor;
  ctx.strokeStyle = circle.borderStyle.color;
  ctx.lineWidth = circle.borderStyle.width;
  ctx.stroke();
  if (circle.isFill) ctx.fill();
}

export function renderRect(ctx: CanvasRenderingContext2D, rect: Rect) {
  ctx.beginPath();
  const { left, top, right, bottom, borderRadius } = rect;
  const width = Math.abs(right - left);
  const height = Math.abs(top - bottom);
  ctx.moveTo(left, top + height / 2); // 左边中点
  ctx.arcTo(left, top, right - width / 2, top, borderRadius); // 上边中点
  ctx.arcTo(right, top, right, top + height / 2, borderRadius); // 右边中点
  ctx.arcTo(right, bottom, right - width / 2, bottom, borderRadius); // 下边中点
  ctx.arcTo(left, bottom, left, bottom - height / 2, borderRadius);
  if (rect.isFill) {
    ctx.fillStyle = rect.fillColor;
    ctx.fill();
  }
  ctx.strokeStyle = rect.borderStyle.color;
  ctx.lineWidth = rect.borderStyle.width;
  ctx.stroke();
}

export function renderText(ctx: CanvasRenderingContext2D, text: Text): void {
  ctx.fillStyle = text.color;
  ctx.font = `${text.fontSize}px serif`;
  ctx.textBaseline = "top";
  ctx.fillText(text.content, text.left, text.top);
}
