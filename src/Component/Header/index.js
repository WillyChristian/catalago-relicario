import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";

// tentativa de animação com react-gsap
// import TimelineComponent from "./animaLogo"
// import { Timeline, Tween } from "react-gsap";

// animeLogo = () => {
//     const anime = this.TimelineComponent
// }

// TESTE COM O GSAP ORIGINAL
import gsap from "gsap";

export default class Header extends Component {
  animaImagem = () => {
    gsap.to(".logo", { duration: 1, x: 150, rotation: 135 });
    // console.log('teste de click')
  };
  render() {
    return (
      <div className="header">
        <nav className="nav-header">
          <button className="btn menu-toggle" onClick={this.animaImagem}>
            <i className="fas fa-bars 5x"></i>
          </button>
          <img src={LogoEscrito} alt="logoEscrito" className="logo" />
        </nav>
      </div>
    );
  }
}
