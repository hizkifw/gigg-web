import React from "react";
import { Card, Container, Form, Image, Row, Col, Nav } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <Container className="mt-4">
        <Row>
          <Col lg={3} sm={12} className="border">
            <Row className="mt-3">
              <Col>
                <Image
                  rounded
                  style={{ width: "96px", height: "96px" }}
                  className="d-inline align-top mr-3"
                  src="/zuck.jpg"
                />
                <b>Joe Succerberg</b>
              </Col>
            </Row>
            <hr />
            <Nav className="flex-column">
              <Nav.Link className="font-weight-bold">DASHBOARD</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>Overview</Nav.Link>
                <Nav.Link>Performance</Nav.Link>
                <Nav.Link>Analytics</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
              </Nav>
              <Nav.Link className="font-weight-bold">APPS</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>Calendar</Nav.Link>
                <Nav.Link>Messages</Nav.Link>
                <Nav.Link>Projects Board</Nav.Link>
              </Nav>
              <Nav.Link className="font-weight-bold">PAGES</Nav.Link>
              <Nav className="flex-column ml-4">
                <Nav.Link>User Profile</Nav.Link>
                <Nav.Link>Invoices</Nav.Link>
              </Nav>
            </Nav>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card body>
                  <Card.Title>TOTAL EARNINGS</Card.Title>
                  <h1>$69,420</h1>
                  <p class="text-muted">Last month you earned $1,337</p>
                </Card>
              </Col>
              <Col>
                <Card body>
                  <Card.Title>STATISTICS</Card.Title>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
