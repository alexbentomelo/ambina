import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SelicAno from "./pages/SelicAno";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar title="Anbima" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/selic_ano" component={SelicAno} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
