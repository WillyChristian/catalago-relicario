import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";
import Menu from "../Menu/index";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abreMenu: "0"
    };
    this.abreMenu = this.abreMenu.bind(this);
  }

  abreMenu = () => {
    if (this.state.abreMenu === "0") {
      this.setState({ abreMenu: "1" });
    } else {
      this.setState({ abreMenu: "0" });
    }
  };
  render() {
    return (
      <div className="header">
        <nav className="nav-header">
          <button className="btn menu-toggle" onClick={this.abreMenu}>
            <i className="fas fa-bars 5x"></i>
          </button>
          <img src={LogoEscrito} alt="logoEscrito" className="logo" />
        </nav>
        {this.state.abreMenu === "1" ? <Menu /> : null}
      </div>
    );
  }
}
