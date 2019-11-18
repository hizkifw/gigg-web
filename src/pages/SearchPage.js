import React from "react";
import TopNav from "../components/TopNav";
import JobUtil from "../components/JobUtil";
import {
  Badge,
  Card,
  Container,
  Pagination,
  Form,
  Image,
  Row,
  Col,
  Nav,
  InputGroup
} from "react-bootstrap";

const SearchPagination = props => {
  const type = props.freelancer ? "jobs" : "gigs";
  return (
    <Pagination style={{ justifyContent: "center" }}>
      <Pagination.First href={`#/search/${type}/0`} />
      <Pagination.Prev href={`#/search/${type}/0`} />
      {Array.from(Array(10).keys()).map(n => (
        <Pagination.Item href={`#/search/${type}/${n + 1}`}>
          {n + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next href={`#/search/${type}/0`} />
      <Pagination.Last href={`#/search/${type}/0`} />
    </Pagination>
  );
};

const SearchPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer={props.freelancer} />
      <Container className="mt-4">
        <Row>
          <Col lg={3} md={3} sm={12}>
            <Card body>
              <Card.Title>Filters</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Sort by</Form.Label>
                  <Form.Control as="select">
                    <option>Relevance</option>
                    <option>Rating</option>
                    <option>Newest first</option>
                    <option>Oldest first</option>
                    <option>Highest price</option>
                    <option>Lowest price</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Min. price</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="number" placeholder="0" />
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Max. price</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="number" placeholder="999" />
                  </InputGroup>
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col>
            <h3>Searching for {props.freelancer ? "jobs" : "gigs"}</h3>
            <SearchPagination {...props} />
            {Array.from(Array(10).keys()).map(n => {
              const title = props.freelancer
                ? JobUtil.randomTitle()
                : JobUtil.randomGig();
              const price = Math.ceil(Math.random() * 100);
              const offers = Math.floor(Math.random() * 20);
              const image = JobUtil.randomImage();
              const rating = (Math.ceil(Math.random() * 50) / 10).toFixed(1);

              const postData = btoa(
                JSON.stringify({ title, price, offers, image, rating })
              );

              return (
                <Row className="border-bottom py-3">
                  <Col md={2} sm={4} className="text-center">
                    <a
                      href={`#/${props.freelancer ? "job" : "gig"}/${postData}`}
                    >
                      <Image roundedCircle fluid src={image} />
                    </a>
                  </Col>
                  <Col sm={8}>
                    <a
                      className="d-block"
                      href={`#/${props.freelancer ? "job" : "gig"}/${postData}`}
                    >
                      {title}
                    </a>
                    <p className="text-muted mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean ullamcorper ullamcorper massa at placerat.
                      Pellentesque dapibus lorem mi, vitae vestibulum ex posuere
                      sit amet.
                    </p>
                    <div className="mb-3" style={{ fontSize: "1.2em" }}>
                      {["Art", "Music", "Patience", "Programming"].map(x => (
                        <Badge variant="primary" className="mr-1">
                          {x}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                  <Col sm={4} className="d-md-none" />
                  <Col md={2} sm={8}>
                    <div className="d-md-block d-sm-inline-block d-xs-inline-block mx-2">
                      <p className="mb-0 text-muted">
                        {props.freelancer ? "Budget" : "Asking"}
                      </p>
                      <h2>{`$${price}`}</h2>
                    </div>
                    <div className="d-md-block d-sm-inline-block d-xs-inline-block mx-2">
                      {props.freelancer ? (
                        <React.Fragment>
                          <p className="mb-0 text-muted">Offers</p>
                          <h2>{offers}</h2>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <p>
                            <i className="fas fa-star text-primary mr-2"></i>
                            <span>{rating}</span>
                            <span className="text-muted">&nbsp;/ 5.0</span>
                          </p>
                        </React.Fragment>
                      )}
                    </div>
                  </Col>
                  <Col sm={4} md={2} />
                  <Col sm={8} md={10} lg={10}>
                    <a
                      href={`#/${props.freelancer ? "job" : "gig"}/${postData}`}
                      className="mr-2 pr-2 border-right"
                    >
                      View details
                    </a>
                    <a
                      href={`#/${props.freelancer ? "job" : "gig"}/${postData}`}
                    >
                      Send offer
                    </a>
                  </Col>
                </Row>
              );
            })}
            <SearchPagination {...props} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchPage;
