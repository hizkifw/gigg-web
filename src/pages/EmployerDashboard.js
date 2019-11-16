import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import {
  Button,
  Card,
  Container,
  Form,
  Image,
  Row,
  Col,
  Nav
} from "react-bootstrap";

const EmployerDashboard = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn />
      <Container className="mt-4">
        <Row>
          <Col lg={3} md={3} sm={12}>
            <Card body>
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
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 mb-2">
                  <Button block variant="primary" href="#/dash/freelance">
                    Freelancer mode
                  </Button>
                </Col>
              </Row>
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
                  <Nav.Link href="#/chat">Messages</Nav.Link>
                  <Nav.Link>Projects Board</Nav.Link>
                </Nav>
                <Nav.Link className="font-weight-bold">PAGES</Nav.Link>
                <Nav className="flex-column ml-4">
                  <Nav.Link>User Profile</Nav.Link>
                  <Nav.Link>Invoices</Nav.Link>
                </Nav>
              </Nav>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col className="text-center mb-3">
                <h3>Popular Categories</h3>
              </Col>
            </Row>
            <Row>
              {Array.from(Array(6).keys()).map(n => (
                <Col md={2} className="mb-3 text-center">
                  <a href="#/search">
                    <Image fluid roundedCircle src={JobUtil.randomImage()} />
                    <p className="text-dark my-1" style={{ fontSize: "1.2em" }}>
                      Category
                    </p>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EmployerDashboard;
