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
import JobPage from "../pages/JobPage";
import ChatPage from "../pages/ChatPage";

import FreelanceDashboard from "../pages/FreelanceDashboard";
import EmployerDashboard from "../pages/EmployerDashboard";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dash/freelance" component={FreelanceDashboard} />
      <Route path="/dash/employ" component={EmployerDashboard} />
      <Route path="/search" component={SearchPage} />
      <Route path="/job" component={JobPage} />
      <Route path="/chat" component={ChatPage} />
    </HashRouter>
  );
};

export default App;
