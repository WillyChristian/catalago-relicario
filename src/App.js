import React, { Component, } from "react";
import "./App.css";
import Header from "./Component/Header";
import Catalogo from "./Component/Content/Catalogo";


class App extends Component {

  render() {
    

    return (
      <div className="App">

        {/****************** BOTÃO MENU E LOGO ************************/}
        <section className="header">
          <Header /> {/* aqui ta o botão sandwich */}
        </section>
        
        {/****************** Conteúdo************************/}
          <Catalogo />

      </div>
    );
  }
}

export default App;
