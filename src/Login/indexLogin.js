import React, { Component } from 'react'
import "./styleLogin.css"
export default class indexLogin extends Component {
    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form action="POST" className="login-form">
                    <div className="data">
                        <label htmlFor="username">Email</label>               
                        <input type="email" name="username" id="username" />                                  
                    </div>
                    <div className="data">
                        <label htmlFor="password"> Senha</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                </form>
                <input type="submit" className="btn btn-success"/>
                <div className="create-account">
                    Não possui cadastro? <a href="localhost:3000">Cadastr-se!</a>
                </div>
            </div>
        )
    }
}
