import React from "react";
import TopNav from "../components/TopNav";
import { Card, Container, Form, Image, Row, Col, Nav } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn />
      <Container className="mt-4">
        <Row>
          <Col lg={3} sm={12} className="border">
            <Row className="mt-3">
              <Col>
                <Image
                  roundedCircle
                  fluid
                  className="d-block"
                  src="/zuck.jpg"
                />
              </Col>
              <Col>
                <p className="mb-1">Joe Succerberg</p>
                <a href="#/profile">Profile</a>
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
                  <Image fluid src="/chart.jpg" />
                </Card>
                <Card body className="mt-4">
                  <Row>
                    <Col>
                      <h1>43</h1>
                    </Col>
                    <Col>Pending orders</Col>
                  </Row>
                </Card>
              </Col>
              <Col>
                <Card body>
                  <Card.Title>STATISTICS</Card.Title>
                  <Image fluid src="/chart2.png" />
                  <Row className="text-center mt-3">
                    <Col>
                      <h2>3</h2>
                      In progress
                    </Col>
                    <Col>
                      <h2>1</h2>
                      Due
                    </Col>
                    <Col>
                      <h2>4</h2>
                      Complete
                    </Col>
                  </Row>
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
