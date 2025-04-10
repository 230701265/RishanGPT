import React from "react";
import Nav from "@/components/nav";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gray-900">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">About <span className="text-teal-400">RishanGPT</span></h1>
          <div className="h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="card bg-[#102E50] shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-gray-800">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white flex items-center">
              <Icon icon="heroicons:light-bulb" className="text-teal-400 mr-2" />
              Project Purpose
            </h2>
            <p className="mb-4 text-gray-300">
              RishanGPT was created to simplify the process of generating flowcharts and diagrams 
              using artificial intelligence. This project leverages the power of Llama 3.2's
              models to transform text descriptions into visually appealing flowcharts.
            </p>
            <p className="text-gray-300">
              The main goal was to make diagramming accessible to everyone, regardless of their 
              technical expertise or familiarity with diagramming tools. Simply describe what you 
              need, and let AI do the heavy lifting.
            </p>
          </div>
        </div>
        
        <div className="card bg-[#102E50] shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-gray-800">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white flex items-center">
              <Icon icon="heroicons:users" className="text-teal-400 mr-2" />
              Team Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex items-center space-x-4 bg-[#193c5f] p-4 rounded-lg">
                <div className="avatar">
                  <div className="bg-teal-400 text-[#102E50] rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                    RR
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white">Rishan Ruskin</h3>
                  <p className="text-gray-300">Lead Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-[#193c5f] p-4 rounded-lg">
                <div className="avatar">
                  <div className="bg-teal-400 text-[#102E50] rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                    R
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white">Rohit</h3>
                  <p className="text-gray-300">Co-Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-[#102E50] shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-gray-800">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white flex items-center">
              <Icon icon="heroicons:puzzle-piece" className="text-teal-400 mr-2" />
              Use Cases
            </h2>
            <ul className="list-none space-y-2 mt-4">
              {[
                { icon: "heroicons:code-bracket", text: "Software development: Create flowcharts for algorithms and processes" },
                { icon: "heroicons:briefcase", text: "Business analysis: Map out business processes and workflows" },
                { icon: "heroicons:academic-cap", text: "Education: Generate visual aids for teaching complex concepts" },
                { icon: "heroicons:clipboard-document-list", text: "Project management: Visualize project workflows and dependencies" },
                { icon: "heroicons:bars-arrow-down", text: "Decision making: Create decision trees to evaluate options" },
                { icon: "heroicons:chart-pie", text: "Data visualization: Transform data descriptions into structured diagrams" }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 p-2 hover:bg-[#193c5f] rounded-lg transition-colors">
                  <Icon icon={item.icon} className="text-teal-400 text-xl mt-1" />
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="card bg-[#102E50] shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-gray-800">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white flex items-center">
              <Icon icon="heroicons:cog-8-tooth" className="text-teal-400 mr-2" />
              Technologies Used & Their Purpose
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { name: "Next.js", desc: "Framework for building the web application with server-side rendering and routing", icon: "simple-icons:nextdotjs" },
                { name: "React", desc: "Component-based UI library for building interactive interfaces", icon: "simple-icons:react" },
                { name: "TypeScript", desc: "Adds static typing to JavaScript for improved code quality and development experience", icon: "simple-icons:typescript" },
                { name: "Ollama", desc: "Run local large language models for generating flowcharts without relying on external APIs", icon: "ri:ai-generate" },
                { name: "LangChain", desc: "Framework for developing applications powered by language models with improved context handling", icon: "tabler:chain" },
                { name: "Mermaid.js", desc: "Library that generates diagrams and flowcharts from text using a markdown-inspired syntax", icon: "simple-icons:mermaid" },
                { name: "TailwindCSS", desc: "Utility-first CSS framework for rapid UI development", icon: "simple-icons:tailwindcss" },
                { name: "DaisyUI", desc: "Component library for Tailwind CSS providing pre-styled elements and themes", icon: "tabler:flower" }
              ].map((tech, index) => (
                <div key={index} className="flex p-3 hover:bg-[#193c5f] rounded-lg transition-colors">
                  <Icon icon={tech.icon} className="text-teal-400 text-xl mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-white">{tech.name}</div>
                    <div className="text-sm text-gray-300">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card bg-[#102E50] shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 border border-gray-800">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white flex items-center">
              <Icon icon="heroicons:user" className="text-teal-400 mr-2" />
              User Journey
            </h2>
            <div className="mt-4">
              <ol className="relative border-l border-teal-400 space-y-6 ml-3">
                {[
                  { title: "Discovery & Arrival", desc: "User discovers RishanGPT through search or recommendation and lands on the homepage, where they see a clean interface with a prominent input field and examples of flowcharts." },
                  { title: "Input Description", desc: "User enters a description of the flowchart they need, such as \"Process for handling customer returns in an e-commerce store\" in the input field." },
                  { title: "Template Selection", desc: "User selects from available templates to determine the style and structure of their flowchart." },
                  { title: "Generation & Processing", desc: "After clicking \"Generate Flowchart,\" the system processes the input using Llama 3.2 and LangChain to create appropriate Mermaid syntax, showing a loading indicator." },
                  { title: "Results Presentation", desc: "The generated flowchart appears on screen, rendered by Mermaid.js with interactive features like zooming and panning." },
                  { title: "Refinement (Optional)", desc: "If needed, the user can adjust their input and regenerate the flowchart until satisfied with the results." },
                  { title: "Export & Usage", desc: "User exports the flowchart as an SVG file or copies the Mermaid code for use in their own documents, presentations, or applications." }
                ].map((step, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-teal-400 text-[#102E50] font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-lg mb-1 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 