import React from "react";
import styled from "styled-components";
import ImageGallery from "../ImageGallery";

const Carousel = (props) => {
  const [pagination, setPagination] = React.useState({
    allImages: props.images,
    offset: 0,
    numberPerPage: 5,
    pageCount: 0,
    currentImages: [],
  });

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      allImages: props.images,
      currentImages: props.images.slice(
        0,
        5
      ),
    }));
  }, [props.images]);

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: Math.floor(
        prevState.allImages.length / prevState.numberPerPage
      ),
      currentImages: prevState.allImages.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const handleClickNext = () => {
    const currentPage = (pagination.offset / pagination.numberPerPage) - 1
    const offset = currentPage ? ( currentPage - 1) * pagination.numberPerPage : 0 ;
    setPagination({ ...pagination, offset });
  };

  const handleClickPrev = () => {
    const currentPage = (pagination.offset / pagination.numberPerPage) + 1;
    console.log(currentPage);
    const offset = currentPage ? ( currentPage - 1) * pagination.numberPerPage : 0 ;
    setPagination({ ...pagination, offset });
  };

  return (
    <div className="row carousel">
      <div className="col-1">
        <CarouselButton onClick={handleClickPrev} content={"<"} />
      </div>
      <div className="col-10">
        <ImageGallery items={pagination.currentImages} />
        <div className="col-12">
          {pagination.offset + 1} / {pagination.pageCount}
        </div>
      </div>
      <div className="col-1">
        <CarouselButton onClick={handleClickNext} content={">"} />
      </div>
    </div>
  );
};


const Slide = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
`;

const CarouselButton = ({ onClick, content }) => {
  return <Slide onClick={onClick}>{content}</Slide>;
};


export default Carousel;
