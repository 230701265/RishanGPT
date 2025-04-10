import { Icon } from "@iconify/react";
import React, { useState } from "react";
import mermaid from "mermaid";
import Link from "next/link";

const Nav = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const copyMermaidCode = async () => {
    try {
      const chart = document.querySelector('.mermaid')?.textContent || '';
      await navigator.clipboard.writeText(chart);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const exportSvg = async () => {
    try {
      setIsExporting(true);
      const chart = document.querySelector('.mermaid')?.textContent || '';
      if (!chart) {
        setIsExporting(false);
        return;
      }
      
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
      setIsExporting(false);
    } catch (err) {
      console.error("Failed to export: ", err);
      setIsExporting(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full">
        <nav className="bg-[#102E50] shadow-lg p-3 text-white flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Icon icon="fluent:diagram-24-filled" className="text-3xl text-teal-400" />
              <div>
                <span className="text-xl font-bold tracking-wide">RishanGPT</span>
                <div className="badge badge-xs badge-accent ml-1">alpha</div>
              </div>
            </Link>
            
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-sm bg-teal-600 hover:bg-teal-700 border-0 text-white">
                <Icon icon="heroicons:arrow-down-tray" className="mr-1" />
                Export
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-[#193c5f] border border-gray-700 rounded-lg w-56 text-white"
              >
                <li className="hover:bg-[#102E50] rounded-md">
                  <button onClick={copyMermaidCode} className="flex items-center">
                    <Icon icon="heroicons:clipboard-document" className="mr-2" />
                    Copy Mermaid Code
                  </button>
                </li>
                <li className="hover:bg-[#102E50] rounded-md">
                  <button onClick={exportSvg} className="flex items-center">
                    <Icon icon="heroicons:document-arrow-down" className="mr-2" />
                    {isExporting ? 'Exporting...' : 'Download as SVG'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link href="/about" className="btn btn-sm btn-outline border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#102E50]">
              <Icon icon="heroicons:information-circle" className="mr-1" />
              About
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Toast notification */}
      <div className={`toast toast-top toast-end z-50 transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="alert alert-success">
          <Icon icon="heroicons:check-circle" />
          <span>Mermaid code copied!</span>
        </div>
      </div>
    </>
  );
};

export default Nav;
