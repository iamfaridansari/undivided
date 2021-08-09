import React from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Expense from "../Expense/Expense";
import ToDo from "../ToDo/ToDo";
import Crypto from "../Crypto/Crypto";
import Quiz from "../Quiz/Quiz";

import Form from "../Form/Form";
import Signup from "../Form/Signup";
import Login from "../Form/Login";
import Random from "../Random/Random";
import Introduction from "../Introduction/Introduction";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        id="myNavbar"
      >
        <div className="container-fluid">
          <h5 className="me-5 brand">Undivided</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/expense">
                  Expense
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/crypto">
                  Crypto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todo">
                  ToDo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/quiz">
                  Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/random">
                  Random
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/expense" component={Expense} />
        <Route exact path="/todo" component={ToDo} />
        <Route exact path="/crypto" component={Crypto} />
        <Route exact path="/quiz" component={Quiz} />

        <Route exact path="/" component={Form} />
        <Route exact path="/form/signup" component={Signup} />
        <Route exact path="/form/login" component={Login} />

        <Route exact path="/random" component={Random} />
      </Switch>
    </>
  );
};

export default NavBar;
