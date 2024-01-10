import React from "react";

const TextLayer = ({ title, description }) => {
  return (
    <div className="grid-cols-2 grid text-white absolute top-1/2 left-0 transform -translate-y-1/2 p-8 pr-8 ml-9">
      <div className="col-span-1 pr-4">
        <h1 className="text-5xl font-semibold font-display mb-4">{title}</h1>
        <div className="text-xl">{description}</div>
      </div>
      <div className="col-span-1">
      </div>
    </div>
  );
};

export default TextLayer;
