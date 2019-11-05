import React from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <Container>
        <Row className="mt-4">
          <Col />
          <Col sm={12} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title as="h2" className="text-center">
                  Get Started
                </Card.Title>
                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group controlId="btnLogin">
                    <Button variant="primary" block>
                      Register
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
