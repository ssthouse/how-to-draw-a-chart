import React, { useEffect, useMemo, useRef } from "react";
import { renderLine, renderRect } from "../../basic-chart/render/dom-render";
import RectShape from "../../basic-chart/shape/rect";
import DomShapeViewer from "./dom-shape-viewer";

const Rect: React.FC = () => {
  const domElement = useMemo(() => {
    const rect = new RectShape({
      left: 10,
      right: 20,
      top: 10,
      bottom: 20
    });
    return renderRect(rect);
  }, []);
  return <DomShapeViewer domElement={domElement} />;
};

export default Rect;
