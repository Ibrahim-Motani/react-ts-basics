import { useState } from "react";
import { Button } from "./components/button/button";
import { TextBox } from "./components/text-box/text-box";
import { TextContent } from "./components/text-content/text-content";

// we declare a type of Color by adding a few colors to ensure safety of the style and to make sure that nothing outside of these values is ever passed from the Color
export type Color = "black" | "blue" | "red" | "green";
// following is an array consisting values of type "Color" 
const colors: Color[] = ['black', 'blue', 'red', 'green'];

function App() {
  // useState<string> - After useState we need to specify the type of value for the state for the following example it is string
  const [inputText, setInputText] = useState<string>("");
  // useState<string> - After useState we need to specify the type of value for the state for the following example it is "Color" because we want the color to be chosen only from a handful of values for which we have declared a type
  const [style, setStyle] = useState<Color>("black");

  // following function returns nothing so the type will be void
  const changeColor = (): void => {
    const randomElement: number = Math.floor(Math.random() * colors.length);
    const selectedColor: Color = colors[randomElement];
    setStyle(selectedColor);
  };

  return (
    <div>
      <TextBox
        inputText={inputText}
        setInputText={setInputText}
        placeholder="Enter gali here"
        type="text"
      />
      <Button changeColor={changeColor} buttonText="Press me" />
      <TextContent style={style} text={inputText} />
    </div>
  );
}

export default App;
