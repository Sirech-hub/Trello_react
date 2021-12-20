import React from "react";
import styled from "styled-components";
import { Card, Icon } from "@material-ui/core";
import Textarea from "react-textarea-autosize";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 75px;
  padding: 6px 8px 2px;
`;

const StyledTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

const Form = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "название ..."
      : "название ...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <Container>
        <StyledCard>
          <StyledTextarea
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            onBlur={closeForm}
            value={text}
            onChange={(e) => onChange(e)}
          />
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default Form;
