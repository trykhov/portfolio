import React from "react";
import '../css/navigation.css'

class Navigation extends React.Component {

  state = {
    dropdown: false,
    icon: <i className="fas fa-bars fa-3x icon"></i>
  }

  clickDropDown = () => {
    if(this.state.dropdown) {
      this.setState({dropdown: !this.state.dropdown, icon: <i className="fas fa-bars fa-3x icon"></i>});
    } else {
      this.setState({dropdown: !this.state.dropdown, icon: <i className="fas fa-times fa-3x icon"></i>});
    }
    return this.state.icon
  }


  render() {
    return (
      <div className="nav-bar">
        <div className="content">
          <div className="logo">TK.</div>
          <div className="tab-container">
            <div className="tab">About Me</div>
            <div className="tab">Resumé</div>
            <div className="tab">Portfolio</div>
            <div className="tab">Contact</div>
          </div>
          <div onClick={this.clickDropDown} className="dropdown">
            {this.state.icon}
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;
