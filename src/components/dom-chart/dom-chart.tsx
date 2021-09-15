import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Line from "./line";

const DomChart: React.FC = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/line`}>Line</Link>
        </li>
        <li>
          <Link to="/svg-chart">Circle</Link>
        </li>
        <li>
          <Link to="/canvas-chart">Text</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/line`}>
          <Line />
        </Route>
        <Route path="/svg-chart">
          <Line />
        </Route>
        <Route path="/canvas-chart">
          <Line />
        </Route>
      </Switch>
    </div>
  );
};

export default DomChart;
