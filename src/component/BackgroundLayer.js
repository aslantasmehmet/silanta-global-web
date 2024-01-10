// BackgroundLayer.js
import React from "react";

const BackgroundLayer = ({ imageUrl, opacity }) => (
  <div
    className="w-full h-full"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: opacity !== undefined ? opacity : 1, // Set default opacity to 1 if not provided
    }}
  />
);

export default BackgroundLayer;
