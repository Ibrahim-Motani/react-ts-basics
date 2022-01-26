export interface ITextBoxProps {
  placeholder: string;
  type: "text" | "textarea" | "number";
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};