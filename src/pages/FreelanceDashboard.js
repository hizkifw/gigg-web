import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import {
  Badge,
  Button,
  Card,
  Container,
  Form,
  Image,
  Row,
  Col,
  Nav
} from "react-bootstrap";

const FreelanceDashboard = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer />
      <Container className="mt-4">
        <Row>
          <Col lg={3} md={3} sm={12}>
            <Card body>
              <Row className="mt-3">
                <Col md={2} />
                <Col md={8}>
                  <Image
                    roundedCircle
                    fluid
                    className="d-block"
                    src="/zuck.jpg"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p
                    className="mt-2 ml-3 d-inline align-middle"
                    style={{ fontSize: "1.5em" }}
                  >
                    ドラえもん
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 mb-2">
                  <Button block variant="primary" href="#/dash/employ">
                    Switch to Employer
                  </Button>
                </Col>
              </Row>
              <Nav className="flex-column">
                <Nav.Link className="font-weight-bold">DASHBOARD</Nav.Link>
                <Nav className="flex-column ml-4">
                  <Nav.Link>Overview</Nav.Link>
                  <Nav.Link href="#/chat">
                    Messages{" "}
                    <Badge variant="primary" style={{ fontSize: "0.8em" }}>
                      {Math.floor(Math.random() * 10)}
                    </Badge>
                  </Nav.Link>
                  <Nav.Link>My gigs</Nav.Link>
                  <Nav.Link>Settings</Nav.Link>
                </Nav>
                <Nav.Link className="font-weight-bold">PROJECTS</Nav.Link>
                <Nav className="flex-column ml-4">
                  <Nav.Link>Pending projects</Nav.Link>
                  <Nav.Link>Ongoing</Nav.Link>
                  <Nav.Link>Due for submission</Nav.Link>
                  <Nav.Link>Complete</Nav.Link>
                </Nav>
              </Nav>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col>
                <a
                  href="#/new/gig"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <Button block className="mb-2">
                    <h1 className="d-inline align-middle mr-3">+</h1>
                    Post a gig
                  </Button>
                </a>

                <Card className="mb-2">
                  <Card.Img variant="top" src="/gig-thumbnail-1.jpg" />
                  <Card.Body>
                    <Card.Title>{JobUtil.randomTitle()}</Card.Title>
                    <Row className="mb-4">
                      <Col>
                        <p className="text-muted mb-0">Budget</p>
                        <strong>{`$${Math.ceil(Math.random() * 999)}`}</strong>
                      </Col>
                      <Col>
                        <p className="text-muted mb-0">Deadline</p>
                        <strong>
                          {JobUtil.randomDeadline().toDateString()}
                        </strong>
                      </Col>
                    </Row>
                    <Card.Link href="#/job">View details</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card body className="mb-2">
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
                <Card body className="mb-2">
                  <Card.Title>TOTAL EARNINGS</Card.Title>
                  <h1>$69,420</h1>
                  <p class="text-muted">Last month you earned $1,337</p>
                  <Image fluid src="/chart.jpg" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FreelanceDashboard;
