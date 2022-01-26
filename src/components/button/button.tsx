// never make default exports. Either export while defining the component/function or make a named export at the last
export const Button = ({
  buttonText, changeColor
}: {
  buttonText: string;
  changeColor: () => void;
}): JSX.Element => {
  return <button onClick={changeColor}>{buttonText}</button>;
};