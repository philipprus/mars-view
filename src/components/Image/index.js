import React from "react";

const Image = (props) => {
  return (
    <div className="image image__container">
      <img src={props.src} className="image__content" alt="" />
      {props.alt && <div className="image__description">{props.alt}</div>}
    </div>
  );
};

export default Image;
