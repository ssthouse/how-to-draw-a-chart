import React, { useEffect, useRef } from "react";

export interface DomShapeViewerProps {
  domElement: Element;
  containerWidth?: number;
  containerHeight?: number;
}

const DomShapeViewer: React.FC<DomShapeViewerProps> = (props) => {
  const { containerWidth = 300, containerHeight = 300, domElement } = props;
  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.replaceChildren(domElement);
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
