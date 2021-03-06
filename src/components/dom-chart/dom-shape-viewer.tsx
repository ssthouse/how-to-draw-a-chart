import React, { useEffect, useRef } from "react";

export interface DomShapeViewerProps {
  domElement: Element | Element[];
  containerWidth?: number;
  containerHeight?: number;
}

const DomShapeViewer: React.FC<DomShapeViewerProps> = (props) => {
  const { containerWidth = 300, containerHeight = 300, domElement } = props;
  const containerRef = useRef(null);
  useEffect(() => {
    if (Array.isArray(domElement)) {
      containerRef.current.replaceChildren(...domElement);
    } else {
      containerRef.current.replaceChildren(domElement);
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: containerWidth,
        height: containerHeight,
        position: "relative"
      }}
      ref={containerRef}
    ></div>
  );
};

export default DomShapeViewer;
