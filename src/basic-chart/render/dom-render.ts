import Line from "../shape/line";
import Circle from "../shape/circle";
import Rect from "../shape/rect";
import TextShape from "../shape/text";
import { Shape } from "../shape/shape";
import Point from "../shape/point";

type RenderFunc = (shape: Shape) => Element;

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
    transform-origin: 0 50%;
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

export function renderShapes(shapes: Shape[]): Element[] {
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
    if (shape instanceof TextShape) {
      return renderText(shape);
    }
    return null;
  });
}

const CHART_WIDTH = 400,
  CHART_HEIGHT = 300;
const CHART_PADDING = 10;

const mockChartData = {
  xRow: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  dataList: [150, 232, 201, 154, 190, 330, 410]
};

export function generateChartShapes(): Shape[] {
  // axis group
  const chartCenterPoint = new Point(
    CHART_PADDING,
    CHART_HEIGHT - CHART_PADDING
  );
  const xAxisLength = CHART_WIDTH - 2 * CHART_PADDING;
  const yAxisLength = CHART_HEIGHT - 2 * CHART_PADDING;
  const xAxisLine = new Line(
    chartCenterPoint,
    new Point(chartCenterPoint.x + xAxisLength, chartCenterPoint.y)
  );
  const yAxisLine = new Line(
    chartCenterPoint,
    new Point(chartCenterPoint.x, chartCenterPoint.y - yAxisLength)
  );
  const arrowOffset = 5;
  const xAxisArrowLines = [
    new Line(
      xAxisLine.endPoint,
      new Point(
        xAxisLine.endPoint.x - arrowOffset,
        xAxisLine.endPoint.y - arrowOffset
      )
    ),
    new Line(
      xAxisLine.endPoint,
      new Point(
        xAxisLine.endPoint.x - arrowOffset,
        xAxisLine.endPoint.y + arrowOffset
      )
    )
  ];
  const yAxisArrowLines = [
    new Line(
      yAxisLine.endPoint,
      new Point(
        yAxisLine.endPoint.x - arrowOffset,
        yAxisLine.endPoint.y + arrowOffset
      )
    ),
    new Line(
      yAxisLine.endPoint,
      new Point(
        yAxisLine.endPoint.x + arrowOffset,
        yAxisLine.endPoint.y + arrowOffset
      )
    )
  ];
  const tickSize = 2;
  const tickCount = mockChartData.xRow.length;
  const xTickWidth = xAxisLength / tickCount;
  const xAxisTickLines = mockChartData.xRow.map((value, index) => {
    return new Line(
      new Point(chartCenterPoint.x + index * xTickWidth, chartCenterPoint.y),
      new Point(
        chartCenterPoint.x + index * xTickWidth,
        chartCenterPoint.y + tickSize
      )
    );
  });
  const maxValue = mockChartData.dataList.sort((a, b) => b - a)[0];
  const yTickCount = 10;
  const yAxisTickHeight = yAxisLength / yTickCount;
  const yAxisTickLines = [];
  for (let i = 0; i < yTickCount; i++) {
    yAxisTickLines.push(
      new Line(
        new Point(chartCenterPoint.x, chartCenterPoint.y - i * yAxisTickHeight),
        new Point(
          chartCenterPoint.x - tickSize,
          chartCenterPoint.y - i * yAxisTickHeight
        )
      )
    );
  }

  const axisShapes = [
    xAxisLine,
    yAxisLine,
    ...xAxisArrowLines,
    ...yAxisArrowLines,
    ...xAxisTickLines,
    ...yAxisTickLines
  ];

  // data group
  // tooltip group

  return axisShapes;
}
