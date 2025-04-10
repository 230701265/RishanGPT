# RishanGPT - AI-Powered Flowchart Generator

<div align="center">
  <img src="public/brand/logo.png" alt="RishanGPT Logo" width="200" />
  <p><em>Transform text descriptions into beautiful flowcharts with AI</em></p>
</div>

## 🚀 About

RishanGPT was created to simplify the process of generating flowcharts and diagrams using artificial intelligence. This project leverages the power of Llama 3.2's models to transform text descriptions into visually appealing flowcharts.

The main goal is to make diagramming accessible to everyone, regardless of their technical expertise or familiarity with diagramming tools. Simply describe what you need, and let AI do the heavy lifting.

## ✨ Features

- **AI-Powered Generation**: Describe your flowchart in plain English and let the AI create it
- **Multiple Diagram Types**: Support for various flowchart styles and templates
- **Interactive Diagrams**: Zoom, pan, and explore your generated diagrams
- **Easy Export Options**: Export as SVG or copy the Mermaid code directly
- **User-Friendly Interface**: Clean, intuitive design for a seamless experience

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js | Framework for building the web application with server-side rendering and routing |
| React | Component-based UI library for building interactive interfaces |
| TypeScript | Adds static typing to JavaScript for improved code quality and development experience |
| Ollama | Run local large language models for generating flowcharts without relying on external APIs |
| LangChain | Framework for developing applications powered by language models with improved context handling |
| Mermaid.js | Library that generates diagrams and flowcharts from text using a markdown-inspired syntax |
| TailwindCSS | Utility-first CSS framework for rapid UI development |
| DaisyUI | Component library for Tailwind CSS providing pre-styled elements and themes |

## 🔍 Use Cases

- **Software Development**: Create flowcharts for algorithms and processes
- **Business Analysis**: Map out business processes and workflows
- **Education**: Generate visual aids for teaching complex concepts
- **Project Management**: Visualize project workflows and dependencies
- **Decision Making**: Create decision trees to evaluate options
- **Data Visualization**: Transform data descriptions into structured diagrams

## 👨‍💻 User Journey

1. **Discovery & Arrival**: User discovers RishanGPT and lands on the homepage with a clean interface and input field.
2. **Input Description**: User enters a description of the flowchart they need (e.g., "Process for handling customer returns in an e-commerce store").
3. **Template Selection**: User selects from available templates to determine the style and structure of their flowchart.
4. **Generation & Processing**: After clicking "Generate Flowchart," the system processes the input using Llama 3.2 and LangChain.
5. **Results Presentation**: The generated flowchart appears on screen, rendered by Mermaid.js with interactive features.
6. **Refinement (Optional)**: User can adjust their input and regenerate until satisfied with the results.
7. **Export & Usage**: User exports the flowchart as an SVG file or copies the Mermaid code for use elsewhere.

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rishanruskin24/rishangpt.git
   cd rishangpt
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 👥 Team

- **Rishan Ruskin** - Lead Developer
- **Rohit** - Co-Developer


![Copy of update flowgpt - 14 Apr 23](https://user-images.githubusercontent.com/32486682/232072495-9445eda4-f134-47e0-b2c1-2c359581e020.gif)


## Built With

- Next.js
- langchain
- Mermaid (https://github.com/mermaid-js/mermaid)
- DaisyUI

## Requirements
1. Node Version >= 18
2. OpenAI API Key

## Installation

1. Clone the Repo

2. rename the `env.template` to `.env.local` and OPENAI_API_KEY

2. `cd` into the folder
```sh
cd RishanGPT
```

3. Install all deps with yarn
```sh
yarn
```

4. Run in development mode
```sh
yarn dev
```

5. Open browser and go to http://localhost:3000


