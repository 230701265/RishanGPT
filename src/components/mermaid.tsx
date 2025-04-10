import React, { FC, useEffect } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  themeCSS: `
  .node rect, .node circle, .node ellipse, .node polygon, .node path {
    fill: #193c5f;
    stroke: #85b3e0;
    stroke-width: 1px;
  }
  .edgePath .path {
    stroke: #85b3e0;
    stroke-width: 1.5px;
  }
  .label {
    color: white;
  }
  .edgeLabel {
    background-color: #193c5f;
    color: white;
  }
  `,
  fontFamily: "Fira Code",
});

interface IMermaid {
  chart: string;
  name: string;
}

export const Mermaid: FC<IMermaid> = ({ chart, name }) => {
  useEffect(() => {
    if (chart) mermaid.contentLoaded();
  }, [chart]);

  const exportSvg = async () => {
    const svgData = await mermaid.render("text1", chart);

    const svgBlob = new Blob([svgData.svg], {
      type: "image/svg+xml;charset=utf-8",
    });

    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${name}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const copyMermaidCode = async () => {
    await navigator.clipboard.writeText(chart);
    alert("Mermaid Code" + chart);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute top-2 left-2 z-10 flex gap-2">
              <button 
                onClick={() => zoomIn()} 
                className="btn btn-sm btn-circle bg-gray-700 hover:bg-gray-600 border-0"
                title="Zoom In"
              >
                +
              </button>
              <button 
                onClick={() => zoomOut()} 
                className="btn btn-sm btn-circle bg-gray-700 hover:bg-gray-600 border-0"
                title="Zoom Out"
              >
                -
              </button>
              <button 
                onClick={() => resetTransform()} 
                className="btn btn-sm btn-circle bg-gray-700 hover:bg-gray-600 border-0"
                title="Reset Zoom"
              >
                ↺
              </button>
            </div>
            <TransformComponent contentClass="w-full" wrapperClass="w-full h-full">
              <div className="mermaid w-full p-4">{chart}</div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};
