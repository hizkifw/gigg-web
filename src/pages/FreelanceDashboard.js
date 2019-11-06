import React from "react";
import { Container, Form, Row, Col, Nav } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg={3} sm={12}>
            <Nav className="flex-column border">
              <Nav.Link>Dashboard</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>Overview</Nav.Link>
                <Nav.Link>Performance</Nav.Link>
                <Nav.Link>Analytics</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
              </Nav>
              <Nav.Link>Apps</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>Calendar</Nav.Link>
                <Nav.Link>Messages</Nav.Link>
                <Nav.Link>Projects Board</Nav.Link>
              </Nav>
              <Nav.Link>Pages</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>User Profile</Nav.Link>
                <Nav.Link>Invoices</Nav.Link>
              </Nav>
            </Nav>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
