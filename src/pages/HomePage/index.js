import React, { useState, useEffect } from "react";
import rover from "../../assets/images/rover.png";
import { Button } from "../../components/Button";
import Carousel from "../../components/Carousel";
import Image from "../../components/Image";
import { getDataAsync } from "../../service/axios-service";
import {
  EARTH_DATE,
  ENDPOINTS,
  ROSTER_DESCRIPTION,
} from "../../service/constants";


const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataAsync(ENDPOINTS.get_image_by_date, {
        earth_date: EARTH_DATE,
      });
      setData(result.data.photos);
      setLoading(false);

    };
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>About The Program</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <Image src={rover} alt="Curiosuty rover image" />
        </div>
        <div className="col-7">
          <div className="row no-margin">{ROSTER_DESCRIPTION}</div>
          <div className="row no-margin">
            <div className="col no-padding">
              <Button to="/photos">View Images By Date</Button>
              <Button to="/weather">View Weather</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Curiosity rover images from today</h2>
          {loading && "loading..."}
          {!loading && data && <Carousel images={data} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
