import React from "react";
import "./DescriptionBox.css";

const DescriptioBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam
          error quas rerum! Animi tempora quo vero neque, accusantium fugiat
          cupiditate soluta culpa aperiam quaerat numquam consectetur. Veniam,
          corporis cumque.
        </p>
      </div>
    </div>
  );
};

export default DescriptioBox;
