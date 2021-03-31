import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { Nav, Col, Container, Row, Button, Image, Card } from "react-bootstrap";

const Wayfarer = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="">
          <Col>
            <h1 className="projectTitle">Wayfarer Travel</h1>
            <p className="projectDescription">Travel Like an Expert</p>
            <Image src="/images/wayfarer.png" alt="" fluid />
          </Col>
        </Row>
        <Row>
          <p>
            Wayfarer Travel is where the travel community gathers and disscusses
            any topic from set major cities. Users can choose from a list of
            major cities, and then create posts of their experience in the city.
            Posts are avalible for all users to see, and a user is able to
            cusomize their profile with a home city as well as photo.
            <br />
            Built with Django/Python/SQL/PostgreSQL
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Wayfarer;
