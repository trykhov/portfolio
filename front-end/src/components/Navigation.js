import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
          <Link to='/'>
            <div onClick={() => window.scrollTo(0,0)} className="logo">TK.</div>
          </Link>
          <div className="tab-container">
            <HashLink smooth to="/#about-me">
              <div className="tab"> About Me </div>
            </HashLink>
            <Link to="/resume">
              <div onClick={() => window.scrollTo(0,0)} className="tab"> Resumé </div>
            </Link>
            <HashLink smooth to='/#portfolio'>
              <div className="tab">Portfolio</div>
            </HashLink>
            <HashLink smooth to='/#contact'>
              <div className="tab">Contact</div>
            </HashLink>
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
