import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header";
import Catalogo from "./Component/Content/catBlackFriday/Catalogo";
import Moveis from "./Component/Content/catMoveis/Moveis";
import Home from "./Component/Home";
import Estofados from "./Component/Content/catEstofados/Estofados";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <section className="header">
            <Header /> {/* aqui ta o botão sandwich */}
          </section>
          <Switch>
            {/****************** BOTÃO MENU E LOGO ************************/}
            <Route path="/" exact component={Home} />
            <Route path="/bf-promo" component={Catalogo} />
            <Route path="/cat-moveis" component={Moveis} />
            <Route path="/cat-estofados" component={Estofados} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
