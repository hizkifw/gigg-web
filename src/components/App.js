import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "../pages/SearchPage";

import FreelanceDashboard from "../pages/FreelanceDashboard";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dash/freelance" component={FreelanceDashboard} />
      <Route path="/search" component={SearchPage} />
    </HashRouter>
  );
};

export default App;
