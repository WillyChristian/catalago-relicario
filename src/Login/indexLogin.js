import React, { Component } from 'react'
import "./styleLogin.css"
import axios from 'axios'

export default class indexLogin extends Component {

login = () =>{
    let email = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    axios({
        method: "post",
        url: "http://localhost:5000/user/auth",
        data: {
            email: email,
            senha: password
        }
    }).then(resp => console.log(resp)
    ).catch(err => console.log(err))
}
    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <span className="container" id="msg"></span>
                <form className="login-form">
                    <div className="data">
                        <label htmlFor="username">Email</label>               
                        <input type="email" name="username" id="username" />                                  
                    </div>
                    <div className="data">
                        <label htmlFor="password"> Senha</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                <input className="btn btn-success btn-lg|sm" type="button" value="Logar" onClick={this.login} />
                </form>
                <div className="create-account">
                    Não possui cadastro? <a href="localhost:3000">Cadastr-se!</a>
                </div>
            </div>
        )
    }
}
