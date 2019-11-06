import React, { useState } from "react";
import {
  Button,
  Breadcrumb,
  Card,
  Container,
  Form,
  Row,
  Col
} from "react-bootstrap";

const HomePage = props => {
  const [step, setStep] = useState(0);
  return (
    <React.Fragment>
      <Container>
        <Row className="mt-4">
          <Col />
          <Col sm={12} lg={6}>
            <Card>
              <Card.Body>
                <Breadcrumb>
                  <Breadcrumb.Item onClick={() => setStep(0)} active={step < 0}>
                    Get Started
                  </Breadcrumb.Item>
                  <Breadcrumb.Item onClick={() => setStep(1)} active={step < 1}>
                    Personal Details
                  </Breadcrumb.Item>
                  <Breadcrumb.Item onClick={() => setStep(2)} active={step < 2}>
                    Upload Portfolio
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Form>
                  {step === 0 ? (
                    <React.Fragment>
                      <Card.Title as="h2" className="text-center">
                        Get Started
                      </Card.Title>
                      <Form.Label>I'd like to...</Form.Label>
                      <Form.Check label="Freelance" id="checkFreelance" />
                      <Form.Check
                        type="checkbox"
                        label="Employ"
                        id="checkEmploy"
                      />
                      <div className="mb-2" />
                    </React.Fragment>
                  ) : step === 1 ? (
                    <React.Fragment>
                      <Card.Title as="h2" className="text-center">
                        Personal Details
                      </Card.Title>
                      <Form.Group controlId="name">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                      </Form.Group>
                      <Form.Group controlId="tel">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel" placeholder="+65 xxxx xxxx" />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="john.doe@example.com"
                        />
                      </Form.Group>
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                      </Form.Group>
                      <Form.Group controlId="password2">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                      </Form.Group>
                    </React.Fragment>
                  ) : step === 2 ? (
                    <React.Fragment>
                      <Card.Title as="h2" className="text-center">
                        Portfolio
                      </Card.Title>
                      <Form.Group controlId="portfolio">
                        <Form.Label>
                          Upload your portfolio and we'll handle the rest.
                        </Form.Label>
                        <Card body className="text-center">
                          <img
                            src="/upload-cloud.svg"
                            style={{ height: "5em" }}
                          />
                          <p>Drag and drop files here to upload</p>
                          <p className="text-muted">or</p>
                          <Button variant="secondary">
                            Select files to upload
                          </Button>
                        </Card>
                      </Form.Group>
                    </React.Fragment>
                  ) : null}
                  <Form.Group controlId="btnNext">
                    <Button
                      variant="primary"
                      block
                      onClick={() => setStep(step + 1)}
                    >
                      Next
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
