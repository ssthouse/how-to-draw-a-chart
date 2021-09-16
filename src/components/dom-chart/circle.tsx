import React, { useEffect, useRef, useMemo } from "react";
import { renderCircle } from "../../basic-chart/render/dom-render";
import CircleShape from "../../basic-chart/shape/circle";
import Point from "../../basic-chart/shape/point";
import DomShapeViewer from "./dom-shape-viewer";

const Line: React.FC = () => {
  const domElement = useMemo(() => {
    const testCircle = new CircleShape(new Point(30, 30), 20);
    return renderCircle(testCircle);
  }, []);
  return <DomShapeViewer domElement={domElement} />;
};

export default Line;
