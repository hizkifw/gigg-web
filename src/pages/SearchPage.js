import React from "react";
import TopNav from "../components/TopNav";
import {
  Card,
  Container,
  Pagination,
  Form,
  Image,
  Row,
  Col,
  Nav
} from "react-bootstrap";

const titleList = [
  "Help me design a website",
  "I need a logo for my company",
  "Voice acting for a YouTube video",
  "Create a concept art for my next video game",
  "Need a sound engineer to mix my tracks",
  "Help me edit videos for my YouTube channel",
  "Urgently need a translator for my fanfiction",
  "Looking for a professional guitarist to join my death metal band",
  "Looking for a business partner for my MLM",
  "I need someone to finish my CSIT226 project for me",
  "Need someone to pretend to be my girlfriend",
  "Please feed my goldfish while I'm away",
  "Need a babysitter to sit on my babies"
];

const SearchPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn />
      <Container className="mt-4">
        <Row>
          <Col lg={3} md={3} sm={12}>
            <Card body>
              <Card.Title>Filters</Card.Title>
            </Card>
          </Col>
          <Col>
            <Pagination>
              <Pagination.First href="#/search/0" />
              <Pagination.Prev href="#/search/0" />
              {Array.from(Array(10).keys()).map(n => (
                <Pagination.Item href={`#/search/${n + 1}`}>
                  {n + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next href="#/search/99" />
              <Pagination.Last href="#/search/99" />
            </Pagination>
            {Array.from(Array(10).keys()).map(n => (
              <Row className="border-bottom py-3">
                <Col md={2} sm={4} className="text-center">
                  <Image
                    roundedCircle
                    fluid
                    src={`/gig-thumbnail-${Math.ceil(
                      Math.random() * 7
                    )}-square.jpg`}
                  />
                </Col>
                <Col sm={8}>
                  <p className="mb-1">
                    {titleList[Math.floor(Math.random() * titleList.length)]}
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ullamcorper ullamcorper massa at placerat.
                    Pellentesque dapibus lorem mi, vitae vestibulum ex posuere
                    sit amet.
                  </p>
                </Col>
                <Col sm={4} className="d-md-none" />
                <Col md={2} sm={8}>
                  <div className="d-md-block d-sm-inline-block d-xs-inline-block mx-2">
                    <p className="mb-0 text-muted">Offers</p>
                    <h2>{`${Math.floor(Math.random() * 20)}`}</h2>
                  </div>
                  <div className="d-md-block d-sm-inline-block d-xs-inline-block mx-2">
                    <p className="mb-0 text-muted">Budget</p>
                    <h2>{`$${Math.ceil(Math.random() * 100)}`}</h2>
                  </div>
                </Col>
                <Col sm={4} md={2} />
                <Col sm={8} md={10} lg={10}>
                  <a href="#" className="mr-2 pr-2 border-right">
                    View details
                  </a>
                  <a href="#">Send offer</a>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchPage;
