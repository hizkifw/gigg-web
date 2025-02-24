import React, { useState } from "react";
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
  const jobData = JSON.parse(atob(window.location.hash.split("/")[2]));
  const [offerSent, setOfferSent] = useState(false);
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <Button
              href={`#/search/${props.gig ? "gigs" : "jobs"}`}
              variant="secondary"
            >
              <i class="fas fa-chevron-left mr-2"></i>
              Back to search
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={3}>
                <Image fluid roundedCircle src={jobData.image} />
              </Col>
              <Col>
                <h4>{jobData.title}</h4>
                <Row>
                  <Col>
                    <div className="d-inline-block mr-5 align-top">
                      <p className="mb-0 text-muted">
                        {props.gig ? "Asking" : "Budget"}
                      </p>
                      <h2>{`$${jobData.price}`}</h2>
                    </div>
                    {!props.gig ? (
                      <div className="d-inline-block mr-5">
                        <p className="mb-0 text-muted">Offers</p>
                        <h2>{`${jobData.offers}`}</h2>
                      </div>
                    ) : (
                      <div className="d-inline-block mr-5 align-top">
                        <p className="mb-0 text-muted">Rating</p>
                        <i
                          className="fas fa-star text-primary mr-2 mt-2 align-top d-inline-block"
                          style={{ fontSize: "1.2em" }}
                        ></i>
                        <h2 className="d-inline-block align-middle">
                          <span>{jobData.rating}</span>
                          <span className="text-muted">&nbsp;/ 5.0</span>
                        </h2>
                      </div>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant={offerSent ? "success" : "primary"}
                      onClick={() => setOfferSent(true)}
                    >
                      {offerSent ? (
                        <React.Fragment>
                          <i className="fas fa-check mr-2"></i> Offer sent!
                        </React.Fragment>
                      ) : (
                        "Send offer"
                      )}
                    </Button>
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
                    <Badge variant="primary" className="mr-1">
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
                  <Image roundedCircle fluid src={jobData.employerImage} />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p
                    className="mt-2 ml-3 d-inline align-middle"
                    style={{ fontSize: "1.5em" }}
                  >
                    {jobData.employerName}
                  </p>
                  <i class="fas fa-check-circle text-primary ml-2 align-middle"></i>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <i class="fas fa-map-marker-alt text-muted"></i>
                  <p className="d-inline text-muted ml-2">
                    {jobData.employerLocation}
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
