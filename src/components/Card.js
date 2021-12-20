import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Icon } from "@material-ui/core";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux";
import Form from "./Form";
import Button from "./Button";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
  box-shadow: 0 2px 4px #1F6B75;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const AddCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setEditMode(false);
    setText(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveCard = (e) => {
    e.preventDefault();
    dispatch(editCard(id, listID, cardText));
    setEditMode(false);
  };

  const eraseCard = (e) => {
    dispatch(deleteCard(id, listID));
  };

  if (editMode)
    return (
      <Form
        text={cardText}
        setText={setText}
        closeForm={closeForm}
        onChange={handleChange}
       >
        <Button text="сохранить" onClick={saveCard}></Button>
      </Form>
    );

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={() => setEditMode(true)}
        >
          <Card>
            <EditButton fontSize="small" onMouseDown={() => setEditMode(true)}>
              edit
            </EditButton>
            <DeleteButton fontSize="small" onMouseDown={eraseCard}>
              delete
            </DeleteButton>
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
});

export default connect()(AddCard);
