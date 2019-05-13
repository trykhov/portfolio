import React from "react";
import '../css/navigation.css'

class Navigation extends React.Component {

  state = {
    dropdown: true
  }

  clickDropDown = (click) => {

  }


  render() {
    return (
      <div className="nav-bar">
        <div className="content">
          <div className="logo">TK.</div>
          <div className="tab-container">
            <div className="tab">About Me</div>
            <div className="tab">Resumé</div>
            <div className="tab">Clients / Projects</div>
            <div className="tab">Concepts</div>
            <div className="tab">Contact</div>
          </div>
          <div className="dropdown">
            <i className="fas fa-bars fa-3x icon"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;
