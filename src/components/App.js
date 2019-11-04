import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" component={HomePage} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
