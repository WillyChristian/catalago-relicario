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
    let tl = gsap.timeline();
    tl.to("#m",  {duration: .2, x: 300},"-=.1")
      .to("#m1", {duration: .2, x: 300 },"-=.1")
      .to("#m2", {duration: .2, x: 300 },"-=.15")
      .to("#m3", {duration: .4, x: 300 },"-=.2")
      .to("#m4", {duration: .4, x: 300 },"-=.25")
      .to("#m5", {duration: .5, x: 300 },"-=.3")
      .to("#m6", {duration: .5, x: 300 },"-=.35")
      .to("#m7", {duration: .5, x: 300 },"-=.3")
      .to("#m8", {duration: .4, x: 300 },"-=.25")
      .to("#m9", {duration: .4, x: 300 },"-=.2")
      .to("#m10",{duration: .2, x: 300 },"-=.1")
  };

  animaReverse = () => {

    let tl = gsap.timeline();
    tl.to("#m",  {duration: .2, x: 0},"-=.1")
      .to("#m1", {duration: .2, x: 0 },"-=.1")
      .to("#m2", {duration: .2, x: 0 },"-=.15")
      .to("#m3", {duration: .4, x: 0 },"-=.2")
      .to("#m4", {duration: .4, x: 0 },"-=.25")
      .to("#m5", {duration: .5, x: 0 },"-=.3")
      .to("#m6", {duration: .5, x: 0 },"-=.35")
      .to("#m7", {duration: .5, x: 0 },"-=.3")
      .to("#m8", {duration: .4, x: 0 },"-=.25")
      .to("#m9", {duration: .4, x: 0 },"-=.2")
      .to("#m10",{duration: .2, x: 0 },"-=.1")
  };

  render() {
    return (
      <div>
        <div className="header">
          <nav className="nav-header">
            <button className="btn menu-toggle" onClick={this.eventMenu}>
              <i className="fas fa-bars 3x"></i>
            </button>
            <img src={LogoEscrito} alt="logoEscrito" className="logo" />
          </nav>
        </div>

        <div className="menu" id="fecha">
          <div className="menu-row " id="m">
            <Link to="/bf">
              <li className="nav-link" onClick={this.eventMenu}>
               #1
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m1">
            <Link to="/moveis">
              <li className="nav-link" onClick={this.eventMenu}>
                #2
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m2">
            <Link to="/estofados">
              <li className="nav-link" onClick={this.eventMenu}>
                #3
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m3">
            <Link to="/ceramicas">
              <li className="nav-link" onClick={this.eventMenu}>
               #4
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m4">
            <Link to="/muranos">
              <li className="nav-link" onClick={this.eventMenu}>
                Catálogo de Muranos
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m5">
            <Link to="/">
              <li className="nav-link" onClick={this.eventMenu}>
                Menu Principal
              </li>
            </Link>
          </div>
          <div className="menu-row " id="m6"></div>
          <div className="menu-row " id="m7"></div>
          <div className="menu-row " id="m8"></div>
          <div className="menu-row " id="m9">
            {/* <Link to="/log">
              <li className="nav-link" onClick={this.eventMenu}>
                Fazer Login
              </li> 
            </Link>*/}
          </div>
          <div className="menu-row " id="m10">
            <li className="nav-link" onClick={this.eventMenu}>
              <a href="http://www.relicarioartedecor.com.br/" target="_blanck">
                Gostou? Visite nossa Loja!
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
