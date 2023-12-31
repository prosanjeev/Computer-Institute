import React from "react";
import "./ImageBox.css";

function ImageBox(props) {
  return (
    <div className="iMAGEbOX">
      <div className="imagebox-img-border">
        <img className="imagebox-img" src={props.url} alt="" />
      </div>
      <div className="imagebox-title">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default ImageBox;
