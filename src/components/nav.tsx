import { Icon } from "@iconify/react";
import React from "react";
import mermaid from "mermaid";
import Link from "next/link";

const Nav = () => {
  const copyMermaidCode = async () => {
    try {
      const chart = document.querySelector('.mermaid')?.textContent || '';
      await navigator.clipboard.writeText(chart);
      alert("Mermaid Code copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const exportSvg = async () => {
    try {
      const chart = document.querySelector('.mermaid')?.textContent || '';
      if (!chart) return;
      
      const svgData = await mermaid.render("text1", chart);
      const svgBlob = new Blob([svgData.svg], {
        type: "image/svg+xml;charset=utf-8",
      });
      
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = `flowchart.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (err) {
      console.error("Failed to export: ", err);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="footer items-center p-1 text-neutral-content">
        <div className="items-center grid-flow-col flex">
          <a
            className="btn btn-ghost"
            href="/"
            rel="noreferrer"
          >
            <span className="text-xl font-bold">RishanGPT</span>
            <div className="badge badge-sm self-end">alpha</div>
          </a>
          
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="btn btn-success btn-sm">
              Export
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-gray-700 rounded-box w-52"
            >
              <li>
                <button onClick={copyMermaidCode}>Copy Mermaid Code</button>
              </li>
              <li>
                <button onClick={exportSvg}>SVG</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end mr-4 font-serif flex items-center">
          <Link href="/about" passHref>
            <button className="btn btn-primary btn-sm mr-4">About Project</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
