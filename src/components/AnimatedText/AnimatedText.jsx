import React from "react";
import "./AnimatedText.css"; // Stylesheet

const AnimatedText = ({ text }) => {
  return <span className="animation-gradient font-bold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{text}</span>;
};

export default AnimatedText;
