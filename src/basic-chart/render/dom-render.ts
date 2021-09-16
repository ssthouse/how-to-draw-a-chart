import Line from "../shape/line";

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
  const container = document.createElement("div");
  container.innerHTML = `
      <div style='${style}'>
      </div>
    `;
  return container.children[0];
}
