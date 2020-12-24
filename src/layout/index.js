import styled from "styled-components";
import { deviceMedia } from "../service/constants";
import { px2vw } from "../utils/utils";

export const Grid = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${(props) => (!props.noMargin ? "12px" : "0px")};
  margin-right: ${(props) => (!props.noMargin ? "12px" : "0px")};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Col = styled.div`
  width: ${(props) =>
    `calc(${props.width ?? "100"}% - ${!props.noPadding ? "24px" : "0px"})` ||
    "100%"};
  padding-left: ${(props) => (!props.noPadding ? "12px" : "0px")};
  padding-right: ${(props) => (!props.noPadding ? "12px" : "0px")};
  @media ${deviceMedia.mobileL} {
    width: 100%;
  }
  
`;
