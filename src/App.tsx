import "./styles.less";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DomChart from "./components/dom-chart/dom-chart";
import SvgChart from "./components/svg-chart/svg-chart";
import CanvasChart from "./components/canvas-chart/canvas-chart";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dom-chart">DOM</Link>
            </li>
            <li>
              <Link to="/svg-chart">SVG</Link>
            </li>
            <li>
              <Link to="/canvas-chart">CANVAS</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dom-chart">
            <DomChart />
          </Route>
          <Route path="/svg-chart">
            <SvgChart />
          </Route>
          <Route path="/canvas-chart">
            <CanvasChart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
