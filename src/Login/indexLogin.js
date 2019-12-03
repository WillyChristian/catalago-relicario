import React, { Component } from 'react'
import "./styleLogin.css"
export default class indexLogin extends Component {
    render() {
        return (
            <div className="login">
                <h1>Teste</h1>
                <div className="dados">
                    <span>Login</span>
                    <input type="text"/>
                    <span>Senha</span>
                    <input type="password"/>
                </div>
            </div>
        )
    }
}
