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
          <Line />
        </Route>
        <Route path={`${path}/circle`}>
          <Circle />
        </Route>
        <Route path={`${path}/rect`}>
          <Rect />
        </Route>
        <Route path={`${path}/text`}>
          <Text />
        </Route>
      </Switch>
    </div>
  );
};

export default DomChart;
