import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import {
  Button,
  Badge,
  Card,
  Container,
  Form,
  Image,
  Row,
  Col,
  Nav
} from "react-bootstrap";

const JobPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <Button href="#/search/jobs" variant="outline-secondary">
              <i class="fas fa-chevron-left mr-2"></i>
              Back to search
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={3}>
                <Image fluid roundedCircle src={JobUtil.randomImage()} />
              </Col>
              <Col>
                <h4>{JobUtil.randomTitle()}</h4>
                <Row>
                  <Col>
                    <div className="d-inline-block mr-5">
                      <p className="mb-0 text-muted">Budget</p>
                      <h2>{`$${Math.floor(Math.random() * 100)}`}</h2>
                    </div>
                    <div className="d-inline-block mr-5">
                      <p className="mb-0 text-muted">Offers</p>
                      <h2>{`${Math.floor(Math.random() * 20)}`}</h2>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Description</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet eros est. Donec efficitur lacinia ornare. Mauris urna
                  velit, gravida eget risus in, laoreet aliquam nisl. Praesent
                  non justo cursus, semper lorem quis, semper mi. Donec quis
                  bibendum diam. Quisque volutpat orci ac ante posuere, in
                  bibendum odio sodales. Nam nec aliquet orci. Donec at rutrum
                  erat. Aliquam erat volutpat. Sed eget suscipit nisl. Aliquam
                  vel quam rutrum, gravida leo sed, eleifend nulla.
                </p>

                <h5>Skill required</h5>
                <div className="mb-3" style={{ fontSize: "1.2em" }}>
                  {["Art", "Music", "Patience", "Programming"].map(x => (
                    <Badge variant="secondary" className="mr-1">
                      {x}
                    </Badge>
                  ))}
                </div>

                <h5>Deadline</h5>
                <p>{JobUtil.randomDeadline().toDateString()}</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Card body>
              <Card.Title className="text-center">Employer profile</Card.Title>
              <Row>
                <Col md={3} />
                <Col md={6} className="text-center">
                  <Image
                    roundedCircle
                    fluid
                    src={JobUtil.randomProfilePicture()}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p
                    className="mt-2 ml-3 d-inline align-middle"
                    style={{ fontSize: "1.5em" }}
                  >
                    {JobUtil.randomName()}
                  </p>
                  <i class="fas fa-check-circle text-primary ml-2 align-middle"></i>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <i class="fas fa-map-marker-alt text-muted"></i>
                  <p className="d-inline text-muted ml-2">
                    {JobUtil.randomLocation()}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center mt-3">
                  <Button variant="primary" href="#/chat">
                    <i class="fas fa-comment mr-1"></i> Contact
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default JobPage;
