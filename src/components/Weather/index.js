import React from "react";
import { getDataAsync } from "../../service/axios-service";
import { ENDPOINTS, PAGE_SIZE_WEATHER } from "../../service/constants";
import WeatherGallery from "../WeatherGallery";
import Pagination from "../Pagination";

const Weather = (props) => {
  const [filter, setFilter] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [pagination, setPagination] = React.useState({
    allWeather: [],
    offset: 0,
    numberPerPage: PAGE_SIZE_WEATHER,
    pageCount: 0,
    currentWeather: [],
  });

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: Math.floor(
        prevState.allWeather.length / prevState.numberPerPage
      ),
      currentWeather: prevState.allWeather.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const fetchData = async () => {
    const result = await getDataAsync(ENDPOINTS.get_weather, {
      feedtype: "json",
      ver: "1.0",
    });
    const weathers = result?.data;

    const weatherAr = weathers.sol_keys.map((key) => {
      const item = { ...weathers[key], sol: key };
      return item;
    });
    setPagination((prevState) => ({
      ...prevState,
      allWeather: weatherAr,
      currentWeather: weatherAr.slice(0, pagination.numberPerPage),
    }));
    setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  React.useEffect(() => {
    const sortArray = (type) => {
      const types = {
        AT: "AT",
        HWS: "HWS",
        PRE: "PRE",
      };
      const sortProperty = types[type];
      const sorted = pagination.currentWeather
        ? pagination.currentWeather.sort(
            (a, b) => b[sortProperty].av - a[sortProperty].av
          )
        : pagination.currentWeather;
      setPagination((prevState) => ({
        ...prevState,
        currentWeather: sorted.slice(0, pagination.numberPerPage),
      }));
    };

    sortArray(filter);
  }, [filter]);

  const handlePageClick = (data) => {
    const { currentPage } = data;
    const offset = currentPage
      ? (currentPage - 1) * pagination.numberPerPage
      : 0;
    setPagination({ ...pagination, offset });
  };
  const handlerFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="filter">
            <form>
              <label htmlFor="sortBy">Sort by: </label>
              <select
                name="sortBy"
                id="sortBy"
                value={filter}
                onChange={handlerFilter}
              >
                <option value="AT">Temperature</option>
                <option value="HWS">Wind</option>
                <option value="PRE">Pressure</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {loading && <div>loading...</div>}
        {!loading && (
          <div className="col-12">
            <WeatherGallery items={pagination.currentWeather} />
            <Pagination
              totalRecords={pagination.allWeather.length}
              pageLimit={PAGE_SIZE_WEATHER}
              onPageChanged={handlePageClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
