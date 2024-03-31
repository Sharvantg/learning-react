import { useState } from "react";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  //how dx, and dy values come to this function is interesting. The function is passed as a callback prop to the box componnet.
  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      {/* Here the box component takes a callback prop called onMove which takes the value of the handleMove function.
      So a reference to this handleMove function is passed to the box component as the onMove function. So when 
      onMove is called within the box component with the (dx, dy) values it actually executes a reference of the handleMove function. 
      The handleMove function is only called within the box component and nowhere else. */}
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
