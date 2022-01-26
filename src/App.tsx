import { useState } from "react";
import { Button } from "./components/button/button";
import { TextBox } from "./components/text-box/text-box";
import { TextContent } from "./components/text-content/text-content";

export type Color = "black" | "blue" | "red" | "green";
const colors: Color[] = ['black', 'blue', 'red', 'green'];

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [style, setStyle] = useState<Color>("black");

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
