import React, { useEffect, useMemo, useRef } from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import {
  renderCircle,
  renderLine,
  renderRect,
  renderText
} from "../../basic-chart/render/canvas-render";
import Circle from "../../basic-chart/shape/circle";
import Line from "../../basic-chart/shape/line";
import Point from "../../basic-chart/shape/point";
import Rect from "../../basic-chart/shape/rect";
import TextShape from "../../basic-chart/shape/text";

interface BasicCanvasShapeProps {
  shape: Line | Circle | Rect | TextShape;
}
const BasicCanvasShapeViewer: React.FC<BasicCanvasShapeProps> = ({ shape }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (shape instanceof Line) {
      renderLine(ctx, shape as Line);
      return;
    }
    if (shape instanceof Circle) {
      renderCircle(ctx, shape);
      return;
    }
    if (shape instanceof Rect) {
      renderRect(ctx, shape);
      return;
    }
    if (shape instanceof TextShape) {
      renderText(ctx, shape);
    }
  }, [shape]);
  return (
    <canvas
      style={{ backgroundColor: "white" }}
      ref={canvasRef}
      width="300"
      height="300"
    ></canvas>
  );
};

const LineShapeViewer: React.FC = () => {
  const line = useMemo(() => {
    const line = new Line(new Point(10, 10), new Point(20, 20));
    return line;
  }, []);
  return <BasicCanvasShapeViewer shape={line} />;
};

const CircleShapeViewer: React.FC = () => {
  const circle = useMemo(() => {
    const circle = new Circle(new Point(100, 100), 20);
    return circle;
  }, []);
  return <BasicCanvasShapeViewer shape={circle} />;
};

const RectShapeViewer: React.FC = () => {
  const rect = useMemo(() => {
    const rect = new Rect({
      left: 100,
      top: 100,
      right: 120,
      bottom: 130
    });
    return rect;
  }, []);
  return <BasicCanvasShapeViewer shape={rect} />;
};

const TextShapeViewer: React.FC = () => {
  const text = useMemo(() => {
    const text = new TextShape("Hello world", 120, 120);
    text.fontSize = 100;
    return text;
  }, []);
  return <BasicCanvasShapeViewer shape={text} />;
};

const CanvasChart: React.FC = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/line`}>Line</Link>
        </li>
        <li>
          <Link to={`${url}/circle`}>Circle</Link>
        </li>
        <li>
          <Link to={`${url}/rect`}>Rect</Link>
        </li>
        <li>
          <Link to={`${url}/text`}>Text</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/line`}>
          <LineShapeViewer />
        </Route>
        <Route path={`${path}/circle`}>
          <CircleShapeViewer />
        </Route>
        <Route path={`${path}/rect`}>
          <RectShapeViewer />
        </Route>
        <Route path={`${path}/text`}>
          <TextShapeViewer />
        </Route>
      </Switch>
    </div>
  );
};

export default CanvasChart;
