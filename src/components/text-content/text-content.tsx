import { Color } from "../../App";

// whenever in a dilemma about the type of a certain variable, go to the file where it is declared and hover over it and you will see that vs code will infer the type of it for you. This will work only in the file where you have declared it so always look for the source of it and not at the places where it is being passed or used
export const TextContent = ({
  text, style
}: {
  text: string;
  style: Color;
}): JSX.Element => {
  return <p style={{ color: style }}>{text}</p>;
};