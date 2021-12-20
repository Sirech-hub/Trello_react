import React, { useState } from "react";
import { connect } from "react-redux";
import { addBoard, deleteBoard, setCurrentBoard } from "../actions";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "@material-ui/core";

const AtlasContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  width: 325px;
  height: 125px;
  word-wrap: break-word;
  border-radius: 5px;
  box-shadow: 0 2px 4px #1F6B75;
  background-color: #F9F9F9;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;  
`;

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Thumbnail = styled.div`
  height: 50px;
  width: 300px;
  background: white;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px #1F6B75;
`;

const Title = styled.h5`
  color: #5B5B5B;
  text-decoration: none;
  opacity: 1;
  ${Thumbnail}:hover & {
    display: block;
    cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 2px #5CCCCC;
  }
`;

const DeleteButton = styled(Icon)`
  display: block;
  color: #323232;
  opacity: 0.3;
  ${Thumbnail}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const CreateInput = styled.input`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline-color: #009999;
  box-shadow: 0 2px 4px #1F6B75;
  align-self: center;
`;

const CreateButton = styled.button`
  width: 145px;
  height: 45px;
  background-color: #009999;
  color: white;
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: red;
  outline-color: #009999;
  box-shadow: 0 2px 4px #1F6B75;
  text-shadow: 1px 1px 2px #333333;
  align-self: center;
  margin: 8px;
`;



const Home = ({ boards, dispatch,}) => {
  dispatch(setCurrentBoard(null));
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length < 12) setNewBoardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  const handleDeleteBoard = (e, boardID) => {
    // console.log("Board: delete board: ", boardID);
    dispatch(deleteBoard(boardID));
  };

    const renderAllBoards = () => {
    // console.log("Home: Obj:", boards);
    
    return Object.entries(boards).map(([boardID, board]) => {
      return (
        <Thumbnail>
          <a
            href={`#/boards/${boardID}`}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              textDecoration: "none",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title>{board.boardTitle}</Title>
          </a>

          <div className="col-1">
            <DeleteButton
              style={{ zIndex: "10" }}
              onClick={(e) => handleDeleteBoard(e, boardID)}
            >
              delete
            </DeleteButton>
          </div>
        </Thumbnail>
      );
    });
  };

  const renderCreateNewBoard = () => {
    return (
      <AtlasContainer> 
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
         <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder={"введите название доски"}
          type="text"
        />
        <CreateButton type="button submit">создать</CreateButton>
      </form>
      </AtlasContainer>
    );
  };

  return (
    <HomeContainer>
      {renderCreateNewBoard()}
     
      <Thumbnails>{renderAllBoards()}</Thumbnails>
    </HomeContainer>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(Home);
