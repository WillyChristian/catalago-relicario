import React, { Component } from "react";
import "./style.css";
import animaLogo from "../Header/animaLogo.js"


export default class Menu extends Component {

loadState = () => {
   console.log('oi, aqui ´e o load do header')
}
    render() {
window.addEventListener("DOMContentLoaded", this.loadState)   
        return (
            <div className="menu d-none">
                <div className="hide-menu">
                    <div className="menu-row">
                        <li className="nav-link">
                            <a className="nav-link" href="jose.com">
                                Catalogo Prataria
                            </a>
                        </li>
                    </div>
                    <div className="menu-row">
                        <li className="nav-link">
                            <a className="nav-link" href="jose.com">
                                Catálogo Móveis
                            </a>
                        </li>
                    </div>
                    <div className="menu-row">
                        <li className="nav-link">
                            <a className="nav-link" href="jose.com">
                                Catálogo Estátuas
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}
