import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "../pages/SearchPage";
import JobPage from "../pages/JobPage";
import ChatPage from "../pages/ChatPage";

import FreelanceDashboard from "../pages/FreelanceDashboard";
import EmployerDashboard from "../pages/EmployerDashboard";

import NewPostPage from "../pages/NewPostPage";

import Footer from "../components/Footer";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dash/freelance" component={FreelanceDashboard} />
      <Route path="/dash/employ" component={EmployerDashboard} />
      <Route path="/search/jobs" component={() => <SearchPage freelancer />} />
      <Route path="/search/gigs" component={SearchPage} />
      <Route path="/job" component={JobPage} />
      <Route path="/gig" component={() => <JobPage gig />} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/new/job" component={NewPostPage} />
      <Route path="/new/gig" component={() => <NewPostPage gig />} />
      <Footer />
    </HashRouter>
  );
};

export default App;
