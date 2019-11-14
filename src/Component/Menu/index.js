import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="hide-menu">
          <div className="menu-row">
            <Link to="/bf-promo">
              <li className="nav-link">Promoção Black Friday</li>
            </Link>
          </div>
          <div className="menu-row">
            <Link to="/cat-moveis">
              <li className="nav-link">Catálogo de Móveis </li>
            </Link>
          </div>
          <div className="menu-row">
            <Link to="/cat-estofados">
              <li className="nav-link">Catálogo Estátuas</li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
