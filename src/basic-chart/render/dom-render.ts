import Line from "../shape/line";
import Circle from "../shape/circle";
import Rect from "../shape/rect";
import TextShape from "../shape/text";

function renderDomStringToElement(domString: string): Element {
  if (!domString) return null;
  const container = document.createElement("div");
  container.innerHTML = domString;
  return container.children[0];
}

export function renderLine(line: Line): Element {
  const style = `
    position: absolute; 
    left: ${line.startPoint.x}px;
    top: ${line.startPoint.y}px;
    width: ${line.getLength()}px;
    height: ${line.lineStyle?.width || 1}px;
    transform-origin: top left;
    transform: rotate(${line.getRotateDegree()}deg);
    background-color: ${line.lineStyle?.color || "black"}
  `;

  return renderDomStringToElement(`
    <div style='${style}'>
    </div>
  `);
}

export function renderCircle(circle: Circle): Element {
  const style = `
    position: absolute;
    left: ${circle.centerPoint.x}px;
    top: ${circle.centerPoint.y}px;
    transform: translate(-50%, -50%);
    width: ${circle.radius * 2}px;
    height: ${circle.radius * 2}px;
    border-radius: 50%;
    border: ${circle.style.borderWidth}px solid ${circle.style.borderColor};
    backgdound-color: ${circle.style.color};
  `;
  return renderDomStringToElement(`
    <div style='${style}'>
    </div>
  `);
}

export function renderRect(rect: Rect): Element {
  const width = Math.abs(rect.left - rect.right);
  const height = Math.abs(rect.bottom - rect.top);
  const style = `
    position: absolute;
    left: ${rect.left}px;
    top: ${rect.top}px;
    width: ${width}px;
    height: ${height}px;
    border: ${rect.borderStyle.width}px solid ${rect.borderStyle.color};
    border-radius: ${rect.borderRadius}px
    background-color: ${rect.fillColor}
  `;
  return renderDomStringToElement(`
    <div style='${style}'></div>
   `);
}

export function renderText(text: TextShape): Element {
  const style = `
    position: absolute;
    left: ${text.left}px;
    top: ${text.top}px;
    color: ${text.color};
    font-size: ${text.fontSize}px;
    max-width: ${text.maxWidth}px;
  `;
  // TODO: 文本过长自动换行
  return renderDomStringToElement(`
    <span style='${style}'>${text.content}</span>
  `);
}
