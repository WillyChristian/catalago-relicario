import React, { Component } from "react";
import gsap from "gsap";
import Logo from "./IMG/Logo/LogoEscrito.png";
import "./style.css";

export default class Home extends Component {
  animaLogo = () => {
    // gsap.from(".logo-home", )
    let tl = gsap.timeline();
    tl.from(".logo-home", {
      delay: 0.5,
      duration: 2.5,
      height: 100,
      opacity: 0
    })
      .to(".logo-home", { y: -290, duration: 2, opacity: 0, height: 38 })
      .to("logo-container", { duration: 1, opacity: "0" });
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
      </div>
    );
  }
}
