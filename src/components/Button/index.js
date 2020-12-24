import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 2em;
  background: papayawhip;
  border-radius: 10px;
  border: 0px;
  margin-right: 10px;
  display: inline-block
`;

export const Button = (props) => {
  let history = useHistory();
  function handleClick() {
    history.push(props.to);
  }
    return <ButtonStyle onClick={handleClick}>{props.children}</ButtonStyle>
}