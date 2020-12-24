import React from "react";
import { getDataAsync } from "../../service/axios-service";
import {
  EARTH_DATE,
  ENDPOINTS,
  PAGE_SIZE_PHOTOS,
} from "../../service/constants";
import ImageGallery from "../ImageGallery";
import Pagination from "../Pagination";

const Photos = (props) => {
  const [earthDate, setEarthDate] = React.useState(EARTH_DATE);
  const [loading, setLoading] = React.useState(false);

  const [pagination, setPagination] = React.useState({
    allImages: [],
    offset: 0,
    numberPerPage: PAGE_SIZE_PHOTOS,
    pageCount: 0,
    currentImages: [],
  });

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: Math.floor(prevState.allImages.length / prevState.numberPerPage),
      currentImages: prevState.allImages.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const fetchData = async () => {
    const result = await getDataAsync(ENDPOINTS.get_image_by_date, {
      earth_date: earthDate,
    });
    const photos = result?.data?.photos;
    setPagination((prevState) => ({
      ...prevState,
      allImages: photos,
      currentImages: photos.slice(
        0,
        pagination.numberPerPage
      ),
    }));
    setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const onChangeDate = (e) => {
    e?.target?.value && setEarthDate(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  const handlePageClick = (data) => {
    const { currentPage } = data;
    const offset = currentPage ? ( currentPage - 1) * pagination.numberPerPage : 0 ;
    setPagination({ ...pagination, offset });
  };

  return (
    <>
      <div className="search">
        <form>
          <label>
            Earth date:
            <input
              placeholder="seach by date"
              id="search"
              onChange={onChangeDate}
            />
          </label>
          <button type="submit" onClick={onSubmitForm}>
            Search
          </button>
        </form>
      </div>
      {loading && <div>loading...</div>}
      {!loading && (
        <>
          <ImageGallery items={pagination.currentImages} />
          <Pagination
            totalRecords={pagination.allImages.length}
            pageLimit={PAGE_SIZE_PHOTOS}
            onPageChanged={handlePageClick}
          />
        </>
      )}
      {!loading && !pagination.allImages.length && "Not found"}
    </>

  );
};

export default Photos;
