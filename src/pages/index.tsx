import React, { useState } from "react";
import axios from "axios";
import { Mermaid } from "@/components/mermaid";
import SelectTemplate from "@/components/select-template";
import { TemplateEnum } from "@/lib/prompt-by-template";
import Nav from "@/components/nav";

const Index = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>(
    TemplateEnum.FLOWCHART
  );

  const name = input ? input.replace(/\s/g, "-").toLowerCase() : "";

  const [chart, setChart] = useState("");

  const handleFlow = async (e: any) => {
    e.preventDefault();
    if (!input && !loading) return;
    setLoading(true);

    try {
      const res = await axios.post("/api/ask", {
        input,
        selectedTemplate,
      });

      if (res.data.text) {
        setChart(res.data.text);
      } else {
        setError("Sorry! a small issue occurred");
      }
    } catch (e) {
      console.log(e);
      setError("Sorry! a small issue occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end items-center flex-col min-h-screen bg-gray-900">
      <Nav />

      <div className="flex-1 flex justify-center w-full mb-4 p-4 overflow-auto render-area mx-4 md:mx-8 mt-16">
        {loading ? (
          <div className="flex flex-col justify-center items-center animate-pulse">
            <div className="w-24 h-24 border-t-4 border-b-4 border-teal-500 rounded-full animate-spin mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Creating your flowchart...</h1>
          </div>
        ) : (
          <>
            {!!chart ? (
              <Mermaid chart={chart} name={name} />
            ) : (
              <div className="flex flex-col justify-center items-center text-white text-center p-8">
                <h1 className="text-5xl md:text-7xl font-black mb-4">Generate</h1>
                <h3 className="text-6xl md:text-8xl font-black text-success mb-4">Flowcharts</h3>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">with AI</h2>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Enter a description below and watch RishanGPT transform your words into professional diagrams in seconds.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex w-full max-w-4xl px-4 mb-8">
        <form onSubmit={handleFlow} className="form-control w-full">
          <div className="input-group shadow-lg">
            <input
              className="input input-lg bg-gray-800 border-gray-700 text-white w-full focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Describe your flowchart (e.g., User login process)"
              autoFocus={true}
            />
            <button
              type="submit"
              className={`btn btn-grad btn-lg px-8 ${loading ? "loading" : ""}`}
            >
              {error ? "Retry" : "Generate"}
            </button>
          </div>
          <div className="mt-4">
            <SelectTemplate
              onChange={(e) => setSelectedTemplate(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
