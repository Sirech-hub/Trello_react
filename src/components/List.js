import React, { useState } from "react";
import AddCard from "./Card";
import Create from "./Factory";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import { editListTitle, deleteList } from "../actions";
import { Icon } from "@material-ui/core";

const ListContainer = styled.div`
  background-color: #F9F9F9;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
  box-shadow: 0 2px 4px #1F6B75;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: #1D7373;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ListTitle = styled.h5`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: none;
  }
`;

const DeleteButton = styled(Icon)`
  display: none;
  opacity: 0.5;
  ${TitleContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const List = React.memo(({ title, cards, listID, index, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 20) setListTitle(e.target.value);
  };

  const handleCloseEdit = (e) => {
    setEditMode(false);
    dispatch(editListTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
   
    dispatch(deleteList(listID));
  };

  const renderEditInput = () => {
    return (
      <StyledInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onFocus={handleFocus}
        onBlur={handleCloseEdit}
      />
    );
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div>
                <div>
                  {editMode ? (
                    renderEditInput()
                  ) : (
                    <TitleContainer onClick={() => setEditMode(true)}>
                      <ListTitle>{listTitle}</ListTitle>
                      <DeleteButton onClick={handleDeleteList}>
                        delete
                      </DeleteButton>
                    </TitleContainer>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <AddCard
                      key={card.cardID}
                      index={index}
                      text={card.text}
                      id={card.cardID}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <Create listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
});

export default connect()(List);
