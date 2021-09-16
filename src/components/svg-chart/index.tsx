import React, { useMemo } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import SvgShapeViewer from "./svg-shape-viewer";
import LineShape from "../../basic-chart/shape/line";
import CircleShape from "../../basic-chart/shape/circle";
import RectShape from "../../basic-chart/shape/rect";
import TextShape from "../../basic-chart/shape/text";
import Point from "../../basic-chart/shape/point";
import {
  renderCircle,
  renderLine,
  renderRect,
  renderText
} from "../../basic-chart/render/svg-render";

const LineExample: React.FC = () => {
  const svgElement = useMemo(() => {
    const testLine = new LineShape(new Point(10, 10), new Point(20, 20));
    return renderLine(testLine);
  }, []);
  return <SvgShapeViewer svgElement={svgElement} />;
};

const CircleExample: React.FC = () => {
  const svgElement = useMemo(() => {
    const testCircle = new CircleShape(new Point(10, 10), 10);
    return renderCircle(testCircle);
  }, []);
  return <SvgShapeViewer svgElement={svgElement} />;
};

const RectExample: React.FC = () => {
  const svgElement = useMemo(() => {
    const testRect = new RectShape({
      left: 10,
      top: 10,
      right: 30,
      bottom: 40
    });
    testRect.isFill = false;
    return renderRect(testRect);
  }, []);
  return <SvgShapeViewer svgElement={svgElement} />;
};

const TextExample: React.FC = () => {
  const svgElement = useMemo(() => {
    const testText = new TextShape("Hello world", 20, 40);
    testText.color = "red";
    return renderText(testText);
  }, []);
  return <SvgShapeViewer svgElement={svgElement} />;
};

const DomChart: React.FC = () => {
  let { path, url } = useRouteMatch();
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
          <LineExample />
        </Route>
        <Route path={`${path}/circle`}>
          <CircleExample />
        </Route>
        <Route path={`${path}/rect`}>
          <RectExample />
        </Route>
        <Route path={`${path}/text`}>
          <TextExample />
        </Route>
      </Switch>
    </div>
  );
};

export default DomChart;
