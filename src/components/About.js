import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3 style={{ color: "#5B5B5B" }}>О проекте</h3>
        <p 
        style={{ color: "#797979" }}>
         Первый опыт работы с JS и React
        </p>
        <p style={{ color: "#797979" }}>
          ссылка на репозиторий{" "}
          <a href="https://github.com/Sirech-hub/Trello_react">GitHub</a>.
        </p>
        <br />
        <br />
        <h3 style={{ color: "#5B5B5B" }}>контакты</h3>
        <p style={{ color: "grey" }}>
          Email: <a href="sirech@mail.ru">sirech@mail.ru</a>
        </p>
        <p style={{ color: "#797979" }}>
          GitHub:{" "}
          <a href="https://github.com/Sirech-hub">https://github.com/Sirech-hub</a>
        </p>
        <p style={{ color: "#797979" }}>
          pet проект на:{" "}
          <a href="http://sirech.beget.tech">
             Django
          </a>
        </p>
        
        
      </div>
    );
  }
}

export default About;
