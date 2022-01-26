export const Button = ({
  buttonText, changeColor
}: {
  buttonText: string;
  changeColor: () => void;
}): JSX.Element => {
  return <button onClick={changeColor}>{buttonText}</button>;
};