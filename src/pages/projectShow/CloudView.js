import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { Nav, Col, Container, Row, Button, Image, Card } from "react-bootstrap";

const CloudView = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="">
          <Col>
            <h1 className="projectTitle">Cloud View</h1>
            <p className="projectDescription">A Guide to WA's Best Peaks</p>
            <Image src="/images/cloudview.png" alt="" fluid />
          </Col>
        </Row>
        <Row>
          <p>
            Cloud View is your guide to Washingtons best view hikes. The
            application is based off of the Washington Trails Assosication
            hiking guide. This application allows users to find the best view
            hikes along with all of the information that will be needed for
            their adventure. Users are able to make "Trip Reports" describing
            their experience and the conditions on the trail for other users to
            reference.
            <br />
            Built with Django/Python/SQL/PostgreSQL
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default CloudView;
