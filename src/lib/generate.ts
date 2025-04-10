import { BaseChain, LLMChain, loadQAMapReduceChain } from "langchain/chains";
import { Document } from "langchain/document";
import { TextLoader } from "langchain/document_loaders";
import { ChatOpenAI } from "langchain/chat_models";
import { MarkdownTextSplitter } from "langchain/text_splitter";
import { PromptTemplate } from "langchain";

interface GenerateParams {
  input: string;
  selectedTemplate: string;
}

export const generate = async ({ input, selectedTemplate }: GenerateParams) => {
  try {
    const model = new ChatOpenAI({ 
      temperature: 0.9,
      modelName: "gpt-3.5-turbo",
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const template =
      "{syntax} - {instructions} learn from syntax above and write {template} in mermaid syntax about {input}?";
    const prompt = new PromptTemplate({
      template,
      inputVariables: ["template", "input", "syntax", "instructions"],
    });

    const chain = new LLMChain({ llm: model, prompt });

    // @ts-ignore
    const syntaxDoc = await import(
      `./syntax/${selectedTemplate.toLowerCase()}.md`
    );

    const res = await chain.call({
      template: selectedTemplate,
      input,
      syntax: syntaxDoc.default,
      instructions: `
      - use different shapes, colors and also use icons when possible as mentioned in the doc.
      - strict rules: do not add Note and do not explain the code and do not add any additional text except code, 
      - do not use 'end' syntax
      - do not use any parenthesis inside block
      `,
    });

    return res;
  } catch (e: any) {
    console.log("openai:debug", e?.response?.data);
    throw e;
  }
};
