import React from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avengers";

import avengersData from "./data/avengersData"

import "./index.css";
import MatchPathInfo from "./components/MatchPathInfo";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">
            Avengers
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Home} />

      <Route path="/test/:catName/:task" component={MatchPathInfo} />

      <Route
        exact
        path="/avengers"
        render={props => (
          <AvengersList {...props} avengersList={avengersData} />
        )}
      />
      <Route
        path="/avengers/:avengerId"
        render={props => (
          <Avenger {...props} avengersList={avengersData} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        )}
      />
    </div>
  );
}

export default App;
