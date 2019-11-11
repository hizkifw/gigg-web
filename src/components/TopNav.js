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
              />
            )}
          </Nav>
          <Nav className="float-right">
            {props.loggedIn ? (
              <React.Fragment>
                <Image
                  roundedCircle
                  src="/zuck.jpg"
                  style={{ height: "40px", width: "40px" }}
                />
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
