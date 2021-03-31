import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { Nav, Col, Container, Row, Button, Image, Card } from "react-bootstrap";

const AppTracker = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="">
          <Col>
            <h1 className="projectTitle">Application Tracker</h1>
            <p className="projectDescription">
              A Simple Way to Track Your Job Search
            </p>
            <Image src="/images/apptrack.png" alt="" fluid />
          </Col>
        </Row>
        <Row>
          <p>
            This comprehensive web app is a one stop shop for tracking all
            applications submitted durring your job search. All of the
            applications information is stored including job description, any
            contacts you may have, and social media info. All applications are
            grouped by company and easily discoverable for the user. Once logged
            in, a user has private access to all of their applications for
            reference at any point in the job search.
            <br />
            Built with Node.js/Express/Mongoose/MongoDB
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default AppTracker;
