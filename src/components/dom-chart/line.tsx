import React, { useEffect, useRef } from "react";
import { renderLine } from "../../basic-chart/render/dom-render";
import LineShape from "../../basic-chart/shape/line";
import Point from "../../basic-chart/shape/point";

const Line: React.FC = () => {
  const testLine = new LineShape(new Point(10, 10), new Point(30, 20));
  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.replaceChildren(renderLine(testLine));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: 300,
        height: 300,
        position: "relative"
      }}
      ref={containerRef}
    ></div>
  );
};

export default Line;
