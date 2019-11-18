import React, { useState } from "react";
import TopNav from "../components/TopNav";
import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  Spinner,
  InputGroup
} from "react-bootstrap";

const NewPostPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer={props.gig} />
      <Container>
        <Row className="mt-4">
          <Col />
          <Col sm={12} lg={8}>
            <Card>
              <Card.Body>
                <Card.Title>Post a new {props.gig ? "gig" : "job"}</Card.Title>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>
                          {props.gig ? "Gig" : "Job"} title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={`My Awesome ${
                            props.gig ? "Gig" : "Job"
                          }`}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder={`Describe your ${
                            props.gig ? "gig" : "job"
                          } in detail here.`}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                          {props.gig ? "Asking price" : "Budget"}
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control type="number" placeholder="1,770.13" />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Upload pictures</Form.Label>
                        <Card body className="text-center">
                          <img
                            src="/upload-cloud.svg"
                            style={{ height: "5em", filter: "contrast(0.5)" }}
                          />
                          <p>Drag and drop files here to upload</p>
                          <p className="text-muted">or</p>
                          <Button variant="secondary">
                            Select files to upload
                          </Button>
                        </Card>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="btnLogin">
                        <Button
                          variant="primary"
                          block
                          href={props.gig ? "#/gig" : "#/job"}
                        >
                          Submit
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
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

export default NewPostPage;
