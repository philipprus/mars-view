import styled from "styled-components";
import React from 'react';
import { deviceMedia } from "../../service/constants";

const ImageGallery = ({ items }) => {
  return (
    <div className="gallery">
      {items &&
        items.map((image, index) => (
          <div className="col-2a"  key={`item-${index}`} >
          <ImageItem src={image.img_src} />
          </div>
        ))}
    </div>
  );
};

const ImageItem = styled.div`
  background-image: url(${(props) => props.src});
  height: 250px;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: inline-flex;
  margin-bottom: 20px;
  margin-right: 0
  
  @media: ${deviceMedia.mobileL} {
    width: calc(20% - 40px);
    margin-right: 20px;
  }
`;

export default React.memo(ImageGallery);
