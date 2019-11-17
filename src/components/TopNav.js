import React from "react";
import {
  Button,
  Image,
  Container,
  Dropdown,
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
        <Navbar.Brand href="#/">
          <Image
            fluid
            src="logo-white-transparent.png"
            style={{ maxHeight: "27px", filter: "brightness(0.5)" }}
          />
        </Navbar.Brand>
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
                  if (e.keyCode === 13) {
                    if (props.freelancer) window.location = "#/search/jobs";
                    else window.location = "#/search/gigs";
                  }
                }}
              />
            )}
          </Nav>
          <Nav className="float-right">
            {props.loggedIn ? (
              <React.Fragment>
                <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link} className="py-0">
                    <Image
                      roundedCircle
                      src="/zuck.jpg"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href={`#/dash/${
                        props.freelancer ? "freelance" : "employ"
                      }`}
                    >
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={`#/dash/${
                        props.freelancer ? "employ" : "freelance"
                      }`}
                    >
                      Switch to {props.freelancer ? "Employing" : "Freelancing"}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/" className="text-danger">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
