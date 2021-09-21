import Circle from "../shape/circle";
import Line from "../shape/line";
import Rect from "../shape/rect";
import { Shape } from "../shape/shape";
import Text from "../shape/text";

function renderSvgStringToElement(svgString: string): SVGElement {
  const container = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  container.innerHTML = svgString;
  return container.children[0] as SVGElement;
}

export function renderLine(line: Line): SVGElement {
  const svgString = `
  <line 
   x1="${line.startPoint.x}" y1="${line.startPoint.y}"
   x2="${line.endPoint.x}" y2="${line.endPoint.y}" 
   stroke="${line.lineStyle.color}" ></line>
  `;
  return renderSvgStringToElement(svgString);
}

export function renderCircle(circle: Circle): SVGElement {
  const style = `
    fill: ${circle.isFill ? circle.fillColor : "transparent"};
    stroke: ${circle.borderStyle.color};
    stroke-width: ${circle.borderStyle.width}px
  `;
  const svgString = `
    <circle cx="${circle.centerPoint.x}" cy="${circle.centerPoint.y}" r="${circle.radius}"
      style='${style}'
    />
  `;
  return renderSvgStringToElement(svgString);
}

export function renderRect(rect: Rect): SVGElement {
  const style = `
    fill: ${rect.isFill ? rect.fillColor : "transparent"};
    stroke: ${rect.borderStyle.color};
    stroke-width: ${rect.borderStyle.width}px
  `;
  const svgString = `
    <rect x="${rect.left}" y="${rect.top}" 
      style="${style}"
      width="${Math.abs(rect.right - rect.left)}"
      height="${Math.abs(rect.bottom - rect.top)}" 
      rx="${rect.borderRadius}" />
  `;
  return renderSvgStringToElement(svgString);
}

export function renderText(text: Text): SVGElement {
  const style = `fill: ${text.color}`;
  const svgString = `
    <text x="${text.left}" y="${text.top}" style="${style}">Grumpy!</text>
  `;
  return renderSvgStringToElement(svgString);
}

export function renderShapes(shapes: Shape[]): SVGElement[] {
  return shapes.map((shape) => {
    if (shape instanceof Line) {
      return renderLine(shape);
    }
    if (shape instanceof Circle) {
      return renderCircle(shape);
    }
    if (shape instanceof Rect) {
      return renderRect(shape);
    }
    if (shape instanceof Text) {
      return renderText(shape);
    }
    return null;
  });
}
