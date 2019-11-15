import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default class Header extends Component {
  abreMenu = () => {
    let x = document.querySelector(".menu");
    if (x.id !== "abre") {
      x.setAttribute("id", "abre");
      this.animaMenu();
      console.log("abriu o menu")
    } else {
      x.setAttribute("id", "fecha");
      this.animaReverse();
      console.log("Chamou a animação e o ID ta setado ó: "+ x.id)
    }
  };

  animaMenu = () => {
    console.log("abriu a animação")
    let tl = gsap.timeline();
    tl.from(".link0", { duration: 0.9, x: -300 })
      .from(".link1", { duration: 0.8, x: -300 }, "-=.7")
      .from(".link2", { duration: 0.7, x: -300 }, "-=.6")
      .from(".link3", { duration: 0.6, x: -300 }, "-=.5")
      .from(".empty", { duration: 0.5, x: -300 }, "-=.4")
      .from(".empty1", { duration: 0.5, x: -300 }, "-=.3")
      .from(".empty2", { duration: 0.5, x: -300 }, "-=.2");
      console.log("acabou a animação")
  };

  animaReverse = () => {
    console.log("abriu a animação")

    let tl = gsap.timeline();
    tl.to(".empty2", { duration: 0.9, x: -300 })
    //   .to(".empty1", { duration: 0.8, x: -300 }, "-=.7")
    //   .to(".empty", { duration: 0.7, x: -300 }, "-=.6")
    //   .to(".link3", { duration: 0.6, x: -300 }, "-=.5")
    //   .to(".link2", { duration: 0.5, x: -300 }, "-=.4")
    //   .to(".link1", { duration: 0.5, x: -300 }, "-=.3")
    //   .to(".link0", { duration: 0.5, x: -300 }, "-=.2");
    //   console.log("acabou a animação")

  };

  render() {
    return (
      <div>
        <div className="header">
          <nav className="nav-header">
            <button className="btn menu-toggle" onClick={this.abreMenu}>
              <i className="fas fa-bars 5x"></i>
            </button>
            <img src={LogoEscrito} alt="logoEscrito" className="logo" />
          </nav>
        </div>

        <div className="menu" id="fecha">
          <div className="hide-menu">
            <div className="menu-row link0">
              <Link to="/bf-promo">
                <li className="nav-link">Promoção Black Friday</li>
              </Link>
            </div>
            <div className="menu-row link1">
              <Link to="/cat-moveis">
                <li className="nav-link">Catálogo de Móveis </li>
              </Link>
            </div>
            <div className="menu-row link2">
              <Link to="/cat-estofados">
                <li className="nav-link">Catálogo Estofados</li>
              </Link>
            </div>
            <div className="menu-row link3">
              <Link to="/">
                <li className="nav-link">Voltar para o Menu</li>
              </Link>
            </div>
            <div className="empty"></div>
            <div className="empty1"></div>
            <div className="empty2"></div>
          </div>
        </div>
      </div>
    );
  }
}
