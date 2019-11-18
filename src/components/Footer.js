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
  FormControl,
  Row,
  Col
} from "react-bootstrap";

const Footer = props => (
  <Container fluid className="border-top text-muted pt-5 pb-3">
    <Container className="">
      <Row>
        <Col md={4}>
          <a href="#/">
            <Image
              fluid
              src="logo-white-transparent.png"
              style={{ maxHeight: "2em", filter: "brightness(0.5)" }}
            />
          </a>
          <p className="mt-2" style={{ fontSize: ".8em" }}>
            Copyright &copy; {new Date().getFullYear()} gigg.
            <br />
            All rights reserved.
          </p>
        </Col>
        <Col md={4} />
        <Col md={4} className="text-right">
          <a className="text-muted d-block" href="#/">
            Privacy Policy
          </a>
          <a className="text-muted d-block" href="#/">
            Terms and Conditions
          </a>
          <a className="text-muted d-block" href="#/">
            Support
          </a>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Footer;
