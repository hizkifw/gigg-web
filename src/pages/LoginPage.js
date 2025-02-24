import React, { useState } from "react";
import TopNav from "../components/TopNav";
import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  Spinner
} from "react-bootstrap";

const LoginPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const btnLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location = "#/dash/freelance";
    }, 1000);
  };

  return (
    <React.Fragment>
      <TopNav />
      <Container>
        <Row className="mt-4">
          <Col />
          <Col sm={12} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title as="h2" className="text-center">
                  Login
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
                    <Button variant="primary" block onClick={btnLogin}>
                      {isLoading ? (
                        <React.Fragment>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Loading...</span>
                        </React.Fragment>
                      ) : (
                        "Login"
                      )}
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

export default LoginPage;
