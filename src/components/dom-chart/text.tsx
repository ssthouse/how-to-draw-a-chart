import React, { useMemo } from "react";
import DomShapeViewer from "./dom-shape-viewer";
import TextShape from "../../basic-chart/shape/text";
import { renderText } from "../../basic-chart/render/dom-render";

const Text: React.FC = () => {
  const domElement = useMemo(() => {
    const testText = new TextShape("Hello world", 20, 20);
    return renderText(testText);
  }, []);
  return <DomShapeViewer domElement={domElement} />;
};

export default Text;
