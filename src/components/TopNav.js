import React from "react";
import {
  Button,
  Image,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

const TopNav = props => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#/">gigg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ width: "75%" }}>
            {props.noSearch ? (
              ""
            ) : (
              <Form.Control
                type="text"
                placeholder="Search for jobs and services"
                onKeyDown={e => {
                  if (e.keyCode === 13) window.location = "#/search";
                }}
              />
            )}
          </Nav>
          <Nav className="float-right">
            {props.loggedIn ? (
              <React.Fragment>
                <a href="#/dash/freelance">
                  <Image
                    roundedCircle
                    src="/zuck.jpg"
                    style={{ height: "40px", width: "40px" }}
                  />
                </a>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button href="#/login" variant="link">
                  Login
                </Button>
                <Button href="#/register" variant="outline-primary">
                  Register
                </Button>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
