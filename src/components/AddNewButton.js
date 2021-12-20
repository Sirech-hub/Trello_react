import React from "react";
import { Icon } from "@material-ui/core";
import styled from "styled-components";

const AddNewButton = ({ list, onClick }) => {
  const buttonText = list ? "Добавить список" : "Добавить карту";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "#9D9D9D" : "inherit";
  const buttonTextBackground = list ? "#F9F9F9"  : "inherit";
  const buttonshadowBackground = list ? "0 2px 4px #1F6B75"  : "none";

  const StyledAddNewButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    width: 270px;
    margin-left: 8px;
    margin-right: 8px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
    box-shadow: ${buttonshadowBackground};
  `;

  return (
    <StyledAddNewButton onClick={onClick}>
      <Icon>add</Icon>
      <span style={{ flexShrink: 0 }}> {buttonText}</span>
    </StyledAddNewButton>
  );
};

export default AddNewButton;
