import { Color } from "../../App";

export const TextContent = ({
  text, style
}: {
  text: string;
  style: Color;
}): JSX.Element => {
  return <p style={{ color: style }}>{text}</p>;
};
