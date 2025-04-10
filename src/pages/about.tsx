import React from "react";
import Nav from "@/components/nav";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Nav />
      
      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-success">About RishanGPT</h1>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Project Purpose</h2>
            <p className="mb-4">
              RishanGPT was created to simplify the process of generating flowcharts and diagrams 
              using artificial intelligence. This project leverages the power of Llama 3.2's
              models to transform text descriptions into visually appealing flowcharts.
            </p>
            <p>
              The main goal was to make diagramming accessible to everyone, regardless of their 
              technical expertise or familiarity with diagramming tools. Simply describe what you 
              need, and let AI do the heavy lifting.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span>RR</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Rishan Ruskin</h3>
                  <p className="text-sm">Lead Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span>AI</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Rohit</h3>
                  <p className="text-sm">Co-Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Software development: Create flowcharts for algorithms and processes</li>
              <li>Business analysis: Map out business processes and workflows</li>
              <li>Education: Generate visual aids for teaching complex concepts</li>
              <li>Project management: Visualize project workflows and dependencies</li>
              <li>Decision making: Create decision trees to evaluate options</li>
              <li>Data visualization: Transform data descriptions into structured diagrams</li>
            </ul>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Technologies Used & Their Purpose</h2>
            <div className="mt-4 space-y-3">
              <div>
                <span className="badge badge-lg mr-2">Next.js</span>
                <span>Framework for building the web application with server-side rendering and routing</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">React</span>
                <span>Component-based UI library for building interactive interfaces</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">TypeScript</span>
                <span>Adds static typing to JavaScript for improved code quality and development experience</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">Ollama</span>
                <span>Run local large language models for generating flowcharts without relying on external APIs</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">LangChain</span>
                <span>Framework for developing applications powered by language models with improved context handling</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">Mermaid.js</span>
                <span>Library that generates diagrams and flowcharts from text using a markdown-inspired syntax</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">TailwindCSS</span>
                <span>Utility-first CSS framework for rapid UI development</span>
              </div>
              <div>
                <span className="badge badge-lg mr-2">DaisyUI</span>
                <span>Component library for Tailwind CSS providing pre-styled elements and themes</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">User Journey</h2>
            <div className="mt-4">
              <ol className="list-decimal list-inside space-y-6">
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Discovery & Arrival</h3>
                  <p>User discovers RishanGPT through search or recommendation and lands on the homepage, where they see a clean interface with a prominent input field and examples of flowcharts.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Input Description</h3>
                  <p>User enters a description of the flowchart they need, such as "Process for handling customer returns in an e-commerce store" in the input field.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Template Selection</h3>
                  <p>User selects from available templates to determine the style and structure of their flowchart.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Generation & Processing</h3>
                  <p>After clicking "Generate Flowchart," the system processes the input using Llama 3.2 and LangChain to create appropriate Mermaid syntax, showing a loading indicator.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Results Presentation</h3>
                  <p>The generated flowchart appears on screen, rendered by Mermaid.js with interactive features like zooming and panning.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Refinement (Optional)</h3>
                  <p>If needed, the user can adjust their input and regenerate the flowchart until satisfied with the results.</p>
                </li>
                <li className="p-3 bg-base-300 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Export & Usage</h3>
                  <p>User exports the flowchart as an SVG file or copies the Mermaid code for use in their own documents, presentations, or applications.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 