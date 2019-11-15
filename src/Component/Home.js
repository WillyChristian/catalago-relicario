import React, { Component } from "react";
import gsap from "gsap";
import Logo from "./IMG/Logo/LogoEscrito.png";
import "./style.css";

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

  mostraTexto = () => {
    let x = document.querySelector(".h1");
    let y = document.querySelector(".p");
    if (x.id !== "mostra" && y.id !== "mostra") {
      x.setAttribute("id", "mostra");
      y.setAttribute("id", "mostra");
      console.log('funcionou até mudar o ID')
      this.animaTexto();
    }
  };

  animaTexto = () => {
    let tl = gsap.timeline();
      tl.from(".h1", { duration: 1, yx: -50 })
      .from(".p", { duration: 1, y: -10 }, "-=.4");
  };

  render() {
    return (
      <div>
        <div className="logo-container">
          <img
            src={Logo}
            alt="logo-home"
            className="logo-home"
            onLoad={this.animaLogo}
          />
        </div>
        <h1 id="i" className="txt h1">Seja Bem vindo(a)!</h1>
        <p id="i" className="txt p">
          Utilize o menu acima para navegar entre os diferentes catálogos
        </p>
      </div>
    );
  }
}
