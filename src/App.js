import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header";
import BlackFriday from "./Component/Content/BlackFriday/BlackFriday.js";
import Moveis from "./Component/Content/Moveis/Moveis";
import Home from "./Component/Home";
import Estofados from "./Component/Content/Estofados/Estofados";
class App extends Component {
  render() {
    return (
      <Router>
            <Header /> 
            <Switch>
              {/****************** BOTÃO MENU E LOGO ************************/}
              <Route path="/" exact component={Home} />
              <Route path="/bf" component={BlackFriday} />
              <Route path="/moveis" component={Moveis} />
              <Route path="/estofados" component={Estofados} />
            </Switch>
      </Router>
    );
  }
}

export default App;
