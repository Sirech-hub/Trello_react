import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Board from "./Board";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          overflowY: "auto",
          overflowX: "auto",
          background: "white",
          padding: "15px",
        }}
      >
        <Navbar />
        <div style={{ marginTop: "50px" }}>
          <Switch>
            <Route path="/boards/:boardID" component={Board} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
