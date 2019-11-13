import React, { Component } from 'react'
import "./style.css"

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="hide-menu">
                    <div className="menu-row">
                        <li className="nav-link"><a className="nav-link" href="jose.com">Catalogo Prataria</a></li>
                    </div>
                    <div className="menu-row">
                        <li className="nav-link"><a className="nav-link" href="jose.com">Catálogo Móveis</a></li>
                    </div>
                    <div className="menu-row">
                        <li className="nav-link"><a className="nav-link" href="jose.com">Catálogo Estátuas</a></li>
                    </div>
                </div>
                
            </div>
        )
    }
}
