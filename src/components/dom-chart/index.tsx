import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Line from "./line";
import Circle from "./circle";
import Rect from "./rect";
import Text from "./text";
import { Shape } from "../../basic-chart/shape/shape";
import LineShape from "../../basic-chart/shape/line";
import CircleShape from "../../basic-chart/shape/circle";
import Point from "../../basic-chart/shape/point";
import Chart from "./chart";

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
        <li>
          <Link to={`${url}/chart`}>DOM Chart</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/line`}>
          <Line />
        </Route>
        <Route path={`${path}/circle`}>
          <Circle />
        </Route>
        <Route path={`${path}/rect`}>
          <Rect />
        </Route>
        <Route path={`${path}/chart`}>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
};

export default DomChart;
