import React from "react";
import '../css/navigation.css'

class Navigation extends React.Component {

  state = {
    dropdown: false,
    icon: <i className="fas fa-bars fa-3x"></i>
  }

  clickDropDown = () => {
    if(this.state.dropdown) {
      this.setState({dropdown: !this.state.dropdown, icon: <i className="fas fa-bars fa-3x"></i>});
    } else {
      this.setState({dropdown: !this.state.dropdown, icon: <i className="fas fa-times fa-3x"></i>});
    }
    return this.state.icon
  }


  render() {
    return (
      <div className="nav-bar">
        <div className="options">
          <div className="logo">TK.</div>
          <div className="tab-container">
            <div className="tab">About Me</div>
            <div className="tab">Resumé</div>
            <div className="tab">Portfolio</div>
            <div className="tab">Contact</div>
          </div>
          <div onClick={this.clickDropDown} className="drop-menu">
            {this.state.icon}
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;
