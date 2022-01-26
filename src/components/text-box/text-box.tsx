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
