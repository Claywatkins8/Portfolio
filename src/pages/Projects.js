import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import ProjectCards from "../components/projectCards/ProjectCards.js";
import { Nav, Col, Container, Row, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <h1>ClaytonWatkins.com</h1>
        <h5>Projects Page</h5>
        <ProjectCards />
      </Container>
    </div>
  );
};

export default Projects;
