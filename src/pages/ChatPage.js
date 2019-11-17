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
  Nav
} from "react-bootstrap";

const ChatBubble = props => (
  <div className={props.primary ? "text-right" : "text-left"}>
    <Badge
      className="px-3 py-2"
      variant={props.primary ? "primary" : "secondary"}
      style={{
        fontSize: "1em",
        fontWeight: "normal",
        maxWidth: "40%",
        overflowWrap: "break-word",
        whiteSpace: "normal",
        textAlign: props.primary ? "right" : "left"
      }}
    >
      {props.children}
    </Badge>
  </div>
);

const ChatPage = props => {
  return (
    <React.Fragment>
      <TopNav loggedIn freelancer />
      <Container className="mt-4">
        <Card body>
          <Row>
            <Col md={4} className="border-right">
              <Card.Title>Messages</Card.Title>
              {Array.from(Array(5).keys()).map(n => (
                <a href={`#/chat/${n}`} style={{ textDecoration: "none" }}>
                  <Row className="border-bottom py-3">
                    <Col md={3} className="text-center">
                      <Image
                        roundedCircle
                        fluid
                        src={JobUtil.randomProfilePicture()}
                      />
                    </Col>
                    <Col md={9}>
                      <a className="d-block">{JobUtil.randomName()}</a>
                      <p
                        className="text-muted mt-1"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                      >
                        {JobUtil.randomMessageArray()[0]}
                      </p>
                    </Col>
                  </Row>
                </a>
              ))}
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <Row>
                <Col className="border-bottom pb-3 pl-4 mb-3">
                  <Image
                    roundedCircle
                    style={{ height: "3em" }}
                    className="align-middle"
                    src={JobUtil.randomProfilePicture()}
                  />
                  <p
                    style={{ fontSize: "1.5em" }}
                    className="d-inline-block align-middle mb-0 ml-3"
                  >
                    {JobUtil.randomName()}
                  </p>
                </Col>
              </Row>
              <Row style={{ flexGrow: "1" }}>
                <Col>
                  {JobUtil.randomMessageArray().map((message, index) => (
                    <ChatBubble primary={index % 2 == 1}>{message}</ChatBubble>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter your message..."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ChatPage;
