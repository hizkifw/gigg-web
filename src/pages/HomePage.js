import React from "react";
import TopNav from "../components/TopNav";
import { Container, Form, Jumbotron } from "react-bootstrap";

const HomePage = props => {
  return (
    <React.Fragment>
      <TopNav noSearch />
      <Jumbotron>
        <Container>
          <h1>Find your next job.</h1>
          <Form.Control type="text" placeholder="Search for services" />
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default HomePage;
