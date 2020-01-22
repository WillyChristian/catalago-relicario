import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import indexLogin from "./Login/indexLogin";

/**************************** CATÁLOGOS ****************************/ 
import BlackFriday from "./Component/Content/BlackFriday/BlackFriday.js";
import Moveis from "./Component/Content/Moveis/Moveis";
import Ceramicas from "./Component/Content/Ceramicas/Ceramicas";
import Estofados from "./Component/Content/Estofados/Estofados";
import Murano from "./Component/Content/Muranos/Murano";


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/****************** BOTÃO MENU E LOGO ************************/}
          <Route path="/" exact component={Home} />
          <Route path="/ceramicas" exact component={Ceramicas} />
          <Route path="/bf" component={BlackFriday} />
          <Route path="/moveis" component={Moveis} />
          <Route path="/estofados" component={Estofados} />
          <Route path="/log" component={indexLogin} />
          <Route path="/muranos" component={Murano} />
        </Switch>
      </Router>
    );
  }
}

export default App;
