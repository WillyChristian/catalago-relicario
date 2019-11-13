import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";
import gsap from "gsap";

export default class Header extends Component {
state = {
  atributo: ""
} 
animaLogo = (value) => {
  const valor = value;
  let e = this.atributo
  return (
    this.setState({e: valor}),
    console.log(this.atributo)
  )
};


  // animaImagem = () => {
  //   gsap.to(".logo", { duration: 1, x: 150, rotation: 135 });
  // };

  // clique = () => {
  //   const value = "botão apertado";
  //   const e = new animaLogo
  //   console.log(e);
  // };

  render() {
    window.document.querySelector(".header");

    window.addEventListener("click", this.animaLogo, true);

    return (
      <div className="header">
        <nav className="nav-header">
          <button className="btn menu-toggle">
            <i className="fas fa-bars 5x"></i>
          </button>
          <img src={LogoEscrito} alt="logoEscrito" className="logo" />
        </nav>
      </div>
    );
  }
}
