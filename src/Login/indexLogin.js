import React, { Component } from 'react'
import "./styleLogin.css"
export default class indexLogin extends Component {
    render() {
        return (
            <div className="login">
                <form action="#" className="login-form">
                <h1>Login</h1>
                <div className="data">
                    <input type="text"/>
                    <span data-texto="User"/>
                   
                </div>
                <div className="data">
                    <input type="password"/>
                    <span data-texto="Password"/>
                </div>
                <input type="submit" className="btn logbtn"/>
                <div className="create-account">
                    Não possui cadastro? <a href="#">Cadastr-se!</a>
                </div>
                </form>
            </div>
        )
    }
}
