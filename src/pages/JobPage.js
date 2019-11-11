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

const JobPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <Button href="#/search" variant="outline-secondary">
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
                    <p className="mb-0 text-muted">Budget</p>
                    <h2>{`$${Math.floor(Math.random() * 100)}`}</h2>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">Offers</p>
                    <h2>{`${Math.floor(Math.random() * 20)}`}</h2>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Card body>
              <Card.Title className="text-center">Employer profile</Card.Title>
              <Row>
                <Col md={3} />
                <Col md={6}>
                  <Image roundedCircle fluid src={JobUtil.randomImage()} />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p className="mt-2">{JobUtil.randomName()}</p>
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
