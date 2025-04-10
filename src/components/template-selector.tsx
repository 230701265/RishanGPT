import React from "react";
import { Icon } from "@iconify/react";

interface TemplateSelectorProps {
  onSelect: (template: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
  const templates = [
    {
      id: "flowchart",
      name: "Flowchart",
      description: "Create a simple flowchart with nodes and connections",
      icon: "carbon:flow",
    },
    {
      id: "sequence",
      name: "Sequence Diagram",
      description: "Show interactions between objects over time",
      icon: "carbon:arrows",
    },
    {
      id: "class",
      name: "Class Diagram",
      description: "Model classes, attributes, and relationships",
      icon: "carbon:cube",
    },
    {
      id: "entity",
      name: "Entity Relation",
      description: "Model database entities and their relationships",
      icon: "carbon:data-storage",
    },
    {
      id: "journey",
      name: "User Journey",
      description: "Map user interactions and experiences",
      icon: "carbon:user-profile",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-[#193c5f] border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#1e4a73] transition-colors duration-200 shadow-md hover:shadow-lg"
          onClick={() => onSelect(template.id)}
        >
          <div className="flex items-center mb-2">
            <Icon icon={template.icon} width="24" height="24" className="text-teal-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">{template.name}</h3>
          </div>
          <p className="text-gray-300 text-sm">{template.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector; 