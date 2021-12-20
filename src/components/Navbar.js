import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="fixed-top navbar-white bg-white ">
        <div className="row my-3">
          <div className="col-4">
            <a style={{ padding: "15px" }} href="#">
              <img src="/images/smail.png" width={50} height={32} />
            </a>
          </div> 
            <div>
               <a style={{ position: "fixed",  right: "15px" }} href="#/about">
                 <img src="/images/about.png" width={50} height={35} />
               </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
