// declare interfaces and types in a different file for props and import them in the component for separation of concerns
import { ITextBoxProps } from "./text-box.types";

const TextBox = ({
  placeholder,
  type,
  inputText,
  setInputText,
}: ITextBoxProps): JSX.Element => {
  return (
    <input
      value={inputText}
      onChange={event => setInputText(event.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
};

export { TextBox };