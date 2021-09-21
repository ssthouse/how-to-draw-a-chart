import React, { useMemo } from "react";
import {
  generateChartShapes,
  renderShapes
} from "../../basic-chart/render/dom-render";
import DomShapeViewer from "./dom-shape-viewer";

const Chart: React.FC = () => {
  const elements = useMemo(() => {
    const shapes = generateChartShapes();
    const elements = renderShapes(shapes);
    return elements;
  }, []);

  return (
    <DomShapeViewer
      domElement={elements}
      containerWidth={400}
      containerHeight={300}
    />
  );
};

export default Chart;
