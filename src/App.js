import Slides from "./components/Slides";
import "./styles.css";
import React from "react";
const slidesArr = [
  {
    title: "First slide",
    text: "This is first slide"
  },
  {
    title: "Second slide",
    text: "This is second slide"
  },
  {
    title: "Third slide",
    text: "This is third slide"
  }
];
export default function App() {
  const [slideArr, setSlides] = React.useState(slidesArr);
  return (
    <div className="App">
      <Slides slides={slideArr} />
    </div>
  );
}
