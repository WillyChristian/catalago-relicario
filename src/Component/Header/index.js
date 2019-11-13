import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";
import gsap from "gsap";

export default class Header extends Component {
state = {
  valor: ""
} 
animaLogo = () => {
    const valor = "1"
  return (
    this.setState({valor}),
    console.log(valor)
  )
};


  render() {


    return (
      <div className="header">
        <nav className="nav-header">
          <button className="btn menu-toggle" onClick={this.animaLogo}>
            <i className="fas fa-bars 5x"></i>
          </button>
          <img src={LogoEscrito} alt="logoEscrito" className="logo" />
        </nav>
      </div>
    );
  }
}
