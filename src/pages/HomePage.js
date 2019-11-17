import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  Jumbotron,
  Image
} from "react-bootstrap";

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
        <Row className="mt-4">
          <Col>
            <h3>What our users say</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body>
              <Row>
                <Col md={1} />
                <Col md={2}>
                  <Image fluid rounded src={JobUtil.randomProfilePicture()} />
                </Col>
                <Col md={8}>
                  <blockquote style={{ fontSize: "1.2em" }} className="mt-4">
                    "Searching for jobs wasn't the easiest thing to do. But with
                    the help of gigg, I was able to get myself a steady income
                    with very little hassle."
                  </blockquote>
                  <p className="text-muted">&mdash;{JobUtil.randomName()}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Jumbotron>
              <h3>What are you waiting for?</h3>
              <Button size="lg" variant="primary" href="#/register">
                Get started
              </Button>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
