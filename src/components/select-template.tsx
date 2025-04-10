import React, { FunctionComponent, useState } from "react";
import { TemplateEnum } from "@/lib/prompt-by-template";
import { Icon } from "@iconify/react";

interface ITemplate {
  label: string;
  value: TemplateEnum;
  icon: string;
  description: string;
}

export const templates: ITemplate[] = [
  { 
    label: "Flowchart", 
    value: TemplateEnum.FLOWCHART,
    icon: "carbon:flow",
    description: "Visualize process flows and decision points" 
  },
  { 
    label: "Mindmap", 
    value: TemplateEnum.MINDMAP,
    icon: "carbon:concept",
    description: "Organize ideas and concepts hierarchically" 
  },
  { 
    label: "Timeline", 
    value: TemplateEnum.TIMELINE,
    icon: "carbon:time-plot",
    description: "Display events in chronological order"
  },
  { 
    label: "User Journey", 
    value: TemplateEnum.USERJOURNEY,
    icon: "carbon:user-journey",
    description: "Map out user interactions and experiences"
  },
  { 
    label: "Entity Relationship", 
    value: TemplateEnum.ENTITYRELATIONSHIP,
    icon: "carbon:data-relationship",
    description: "Show relationships between data entities"
  },
  { 
    label: "Sequence Diagram", 
    value: TemplateEnum.SEQUENCE,
    icon: "carbon:data-vis-4",
    description: "Illustrate interactions between components"
  },
  { 
    label: "State Diagram", 
    value: TemplateEnum.STATE,
    icon: "carbon:chart-network",
    description: "Represent states and transitions in a system"
  },
  // { label: "Class Diagram", value: TemplateEnum.CLASS }, // FIXME: syntax mistake is pretty common for this
];

interface ISelectTemplate {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectTemplate: FunctionComponent<ISelectTemplate> = ({ onChange }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateEnum>(TemplateEnum.FLOWCHART);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value as TemplateEnum);
    onChange(e);
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-gray-300 text-sm flex items-center">
        <Icon icon="carbon:template" className="mr-1" />
        Select Diagram Type
      </div>
      
      <div className="relative">
        <select 
          onChange={handleChange} 
          value={selectedTemplate}
          className="select w-full bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500 appearance-none pr-10"
        >
          {templates.map((item) => (
            <option value={item.value} key={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
          <Icon icon="heroicons:chevron-down" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-4">
        {templates.map((template) => (
          <div 
            key={template.value}
            className={`p-2 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center text-center hover:bg-[#193c5f] ${
              selectedTemplate === template.value 
                ? 'bg-[#193c5f] border border-teal-500' 
                : 'bg-gray-800'
            }`}
            onClick={() => {
              setSelectedTemplate(template.value);
              onChange({ target: { value: template.value } } as React.ChangeEvent<HTMLSelectElement>);
            }}
          >
            <Icon icon={template.icon} className="text-3xl mb-1 text-teal-400" />
            <div className="text-xs font-medium">{template.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-800 rounded-lg">
        <div className="flex items-center">
          <Icon icon={templates.find(t => t.value === selectedTemplate)?.icon || "carbon:flow"} className="text-2xl mr-2 text-teal-400" />
          <div className="font-medium">{templates.find(t => t.value === selectedTemplate)?.label}</div>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          {templates.find(t => t.value === selectedTemplate)?.description}
        </p>
      </div>
    </div>
  );
};

export default SelectTemplate;
