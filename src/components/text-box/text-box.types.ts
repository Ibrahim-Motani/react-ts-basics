// Good practice is to declare the type/interface with the name of the component and the entity for which it is being declared. Always choose Interface over Type because it has performance benifits.Follow the following convention - I<name of the component><entity name>, For e.g. - IMyComponentProps, IMyCustomHookReturn, IMyFunctionArguments, IYourFunctionReturn
export interface ITextBoxProps {
  placeholder: string;
  type: "text" | "textarea" | "number";
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};