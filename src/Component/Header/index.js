import React, { Component } from 'react'
import LogoEscrito from '../IMG/Logo/LogoEscrito.png'

import './style.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="nav-header">
                       <button className="btn menu-toggle"><i class="fas fa-bars 5x"></i></button>
                       <img src={LogoEscrito} alt="logoEscrito"/>
                </nav>
            </div>
        )
    }
}
