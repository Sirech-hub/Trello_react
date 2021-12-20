import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    color: black;
    background: #009999;
    box-shadow: 0 2px 4px #1F6B75;
  }
`;

const AddButton = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {text}
    </StyledButton>
  );
};

export default AddButton;
