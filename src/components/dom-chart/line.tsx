import React, { useEffect, useMemo, useRef } from "react";
import { renderLine } from "../../basic-chart/render/dom-render";
import LineShape from "../../basic-chart/shape/line";
import Point from "../../basic-chart/shape/point";
import DomShapeViewer from "./dom-shape-viewer";

const Line: React.FC = () => {
  const domElement = useMemo(() => {
    const testLine = new LineShape(new Point(10, 10), new Point(30, 20));
    return renderLine(testLine);
  }, []);
  return <DomShapeViewer domElement={domElement} />;
};

export default Line;
