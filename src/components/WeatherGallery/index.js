import React from "react";
import styled from "styled-components";

const WeatherGallery = ({ items }) => {
  return (
    <div className="weather_gallery">
      {items &&
        items.map((item, index) => (
          <div className="col-2a">
            <WeatherItem key={`item-${index}`} {...item} />
          </div>
        ))}
    </div>
  );
};

const WeatherItem = ({ First_UTC, Last_UTC, AT, HWS, PRE, sol }) => {
  return (
    <WeatherWrapper>
      <ul>
        <li>
          <strong>Data point:</strong>
          <span>{sol}</span>
        </li>
        <li>
          <strong>Temperature[AVG]:</strong>
          <span>{AT.av}</span>
        </li>
        <li>
          <strong>Wind[AVG]:</strong>
          <span>{HWS.av}</span>
        </li>
        <li>
          <strong>Pressure[AVG]:</strong>
          <span>{PRE.av}</span>
        </li>
        <li>
          <strong>First UTC:</strong>
          <span>{First_UTC}</span>
        </li>
        <li>
          <strong>Last UTC:</strong>
          <span>{Last_UTC}</span>
        </li>
      </ul>
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  border: 1px solid #000000;
  display: inline-flex;
  margin-right: 20px;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  & > ul {
    width: 100%;
    padding: 0;
    list-style: none;
    margin: 0;
    & > li {
      margin-bottom: 10px;
      & > strong {
        padding-right: 10px;
      }
    }
  }
`;

export default WeatherGallery;
