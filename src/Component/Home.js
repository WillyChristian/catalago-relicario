import React, { Component } from "react";
import gsap from "gsap";
import Logo from "./IMG/Logo/LogoEscrito.png";
import "./style.css";
import Heart from "./IMG/icons/heart-icon.svg"

export default class Home extends Component {
  animaLogo = () => {
    let tl = gsap.timeline();
    tl.from(".logo-home", {
      delay: 0.5,
      duration: 2.5,
      height: 100,
      opacity: 0
    })
      .to(".logo-home", { y: -290, duration: 1, opacity: 0, height: 38 })
      .to("logo-container", { duration: 1, opacity: "0" })
      .from("txt", { opacity: 0, y: -50, onComplete: this.mostraTexto });
  };

  render() {
    return (
      <div className="main">
        <div className="logo-container">
          <img
            src={Logo}
            alt="logo-home"
            className="logo-home"
            onLoad={this.animaLogo}
          />
        </div>
        <div className="text-container">
          <h3>Seja Bem vindo(a)!</h3>
          <p>Utilize o menu acima para navegar entre os diferentes catálogos</p>
        </div>
        <div className="heart">
         
          <span>1</span>
        </div>
      </div>
    );
  }
}
