import React, { useState } from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
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
  const [title, setTitle] = useState(`My Awesome ${props.gig ? "Gig" : "Job"}`);
  const [price, setPrice] = useState(0);
  const offers = 0;
  const image = JobUtil.randomImage();
  const rating = "0.0";
  const employerImage = "zuck.jpg";
  const employerName = "Doraemon";
  const employerLocation = "Somewhere over the rainbow";

  const postData = btoa(
    JSON.stringify({
      title,
      price,
      offers,
      image,
      rating,
      employerImage,
      employerName,
      employerLocation
    })
  );
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
                          onChange={e => setTitle(e.target.value)}
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
                          <Form.Control
                            type="number"
                            placeholder="1,770.13"
                            onChange={e => setPrice(e.target.value)}
                          />
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
                          href={
                            props.gig
                              ? `#/gig/${postData}`
                              : `#/job/${postData}`
                          }
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
