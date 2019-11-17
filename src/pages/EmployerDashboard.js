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
  Nav,
  ProgressBar
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
                    Switch to Freelancer
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
              <Col md={8}>
                <a
                  href="#/new/job"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <Card body className="mb-2">
                    <h1 className="d-inline align-middle mr-3 pr-3 border-right">
                      +
                    </h1>
                    Post a job
                  </Card>
                </a>
                <a
                  href="#/chat"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <Card body className="mb-2">
                    <h1 className="d-inline align-middle mr-3 pr-3 border-right">
                      {Math.floor(Math.random() * 10)}
                    </h1>
                    Unread messages
                  </Card>
                </a>
                <Card body>
                  <Card.Title>Ongoing jobs</Card.Title>
                  {Array.from(Array(3).keys()).map(n => (
                    <Row className="my-3 align-middle">
                      <Col md={2} className="px-0 pl-2">
                        <Image
                          roundedCircle
                          fluid
                          src={JobUtil.randomImage()}
                        />
                      </Col>
                      <Col className="py-1 align-middle">
                        <p className="my-0">{JobUtil.randomGig()}</p>
                        <ProgressBar
                          now={12 + Math.floor(Math.random() * 75)}
                        />
                        <p className="my-0 text-muted">
                          {`in ${1 + Math.ceil(Math.random() * 6)} days`}
                        </p>
                      </Col>
                      <Col md={2} className="align-middle">
                        <Button
                          block
                          href="#/chat"
                          variant="outline-primary align-middle"
                        >
                          <i className="fas fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </Card>
              </Col>
              <Col>
                <Card body>
                  <Card.Title>Popular Categories</Card.Title>
                  <Row>
                    {Array.from(Array(6).keys()).map(n => (
                      <Col md={6} className="mb-3 text-center">
                        <a href="#/search/gigs">
                          <Image
                            fluid
                            roundedCircle
                            src={JobUtil.randomImage()}
                          />
                          <p
                            className="text-dark my-1"
                            style={{ fontSize: "1.2em" }}
                          >
                            {JobUtil.randomCategory()}
                          </p>
                        </a>
                      </Col>
                    ))}
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

export default EmployerDashboard;
