import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import { Container, Row, Col, Form, Jumbotron, Image } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <TopNav noSearch />
      <Jumbotron
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('cover1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="my-5">
          <h1 className="text-light" style={{ textShadow: "1px 1px #000" }}>
            Find your next job.
          </h1>
          <Form.Control
            type="text"
            placeholder="Search for jobs and services"
            onKeyDown={e => {
              if (e.keyCode === 13) window.location = "#/search/jobs";
            }}
          />
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>Popular categories</h3>
          </Col>
        </Row>
        <Row>
          {Array.from(Array(6).keys()).map(n => (
            <Col md={2} className="mb-3 text-center">
              <a href="#/search/gigs">
                <Image fluid roundedCircle src={JobUtil.randomImage()} />
                <p className="text-dark my-1" style={{ fontSize: "1.2em" }}>
                  {JobUtil.randomCategory()}
                </p>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
