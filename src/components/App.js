import React from "react";
import { BrowserRouter } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">gigg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button href="/login" variant="link">
              Login
            </Button>
            <Button href="/register" variant="outline-primary">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </BrowserRouter>
  );
}

export default App;
