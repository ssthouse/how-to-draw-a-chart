import React, { useEffect, useRef } from "react";

export interface SvgShapeViewerProps {
  svgElement: SVGElement;
  containerWidth?: number;
  containerHeight?: number;
}

const SvgShapeViewer: React.FC<SvgShapeViewerProps> = (props) => {
  const { containerWidth = 300, containerHeight = 300, svgElement } = props;
  const containerRef = useRef(null);
  useEffect(() => {
    if (!svgElement) return;
    containerRef.current.replaceChildren(svgElement);
  }, []);
  return (
    <svg
      width={containerWidth}
      height={containerHeight}
      style={{
        backgroundColor: "white"
      }}
      ref={containerRef}
    ></svg>
  );
};

export default SvgShapeViewer;
