import React from "react";
import Photos from "../../components/Photos";
import { PAGE_TITLE } from "../../service/constants";

const PhotosPage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{PAGE_TITLE.photo}</h2>
        </div>
        <div className="col-12">
          <Photos />
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
