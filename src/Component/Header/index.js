import React, { Component } from "react";
import LogoEscrito from "../IMG/Logo/LogoEscrito.png";
import "./style.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default class Header extends Component {
  eventMenu = () => {
    const setId = document.querySelector(".menu");
    if (setId.id !== "abre") {
      setId.setAttribute("id", "abre");
      setId.classList.remove("fecha");
      setId.classList.add("abre");
      this.animaMenu();
    } else {
      setId.setAttribute("id", "fecha");
      setId.classList.remove("abre");
      setId.classList.add("fecha");
      this.animaReverse();
    }
  };

  animaMenu = () => {
    console.log("abriu a animação");
    let tl = gsap.timeline();
    tl.to(".link0", { duration: 0.9, x: 0 })
      .to(".link1", { duration: 0.8, x: 0 }, "-=.7")
      .to(".link2", { duration: 0.7, x: 0 }, "-=.6")
      .to(".link3", { duration: 0.6, x: 0 }, "-=.5")
      .to(".empty", { duration: 0.5, x: 0 }, "-=.4")
      .to(".empty1", { duration: 0.5, x: 0 }, "-=.3")
      .to(".empty2", { duration: 0.5, x: 0 }, "-=.2");
    console.log("acabou a animação");
  };

  animaReverse = () => {

    let tl = gsap.timeline();
    tl.to(".link0", { duration: 0.9, x: -300 })
    .to(".link1", { duration: 0.8, x: -300 }, "-=.7")
    .to(".link2", { duration: 0.7, x: -300 }, "-=.6")
    .to(".link3", { duration: 0.6, x: -300 }, "-=.5")
    .to(".empty", { duration: 0.5, x: -300 }, "-=.4")
    .to(".empty1", { duration: 0.5, x: -300 }, "-=.3")
    .to(".empty2", { duration: 0.5, x: -300 }, "-=.2");
  };

  render() {
    return (
      <div>
        <div className="header">
          <nav className="nav-header">
            <button className="btn menu-toggle" onClick={this.eventMenu}>
              <i className="fas fa-bars 5x"></i>
            </button>
            <img src={LogoEscrito} alt="logoEscrito" className="logo" />
          </nav>
        </div>

        <div className="menu fecha" id="fecha">
         
            <div className="menu-row link0">
              <Link to="/bf-promo">
                <li className="nav-link" onClick={this.eventMenu}>Promoção Black Friday</li>
              </Link>
            </div>
            <div className="menu-row link1">
              <Link to="/cat-moveis">
                <li className="nav-link" onClick={this.eventMenu}>Catálogo de Móveis </li>
              </Link>
            </div>
            <div className="menu-row link2">
              <Link to="/cat-estofados">
                <li className="nav-link" onClick={this.eventMenu}>Catálogo Estofados</li>
              </Link>
            </div>
            <div className="menu-row link3">
              <Link to="/">
                <li className="nav-link" onClick={this.eventMenu}>Menu Principla</li>
              </Link>
            </div>
            <div className="empty"></div>
            <div className="empty1"></div>
            <div className="empty2">
                <li className="nav-link" onClick={this.eventMenu}>
                  <a href="http://www.relicarioartedecor.com.br/"
                     target="_blanck"
                  >Gostou? Visite nossa Loja!</a>
                </li>
            </div>
        
        </div>
      </div>
    );
  }
}
