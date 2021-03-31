import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import ProjectsGrid from "../components/projectsGrid/ProjectsGrid.js";
import { Nav, Col, Container, Row, Button, Image, Card } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <ProjectsGrid />
        {/* <Row className="">
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
        <Row className="">
          <Col>
            <h1 className="projectTitle">Wayfarer Travel</h1>
            <p className="projectDescription">Travel Like an Expert</p>
            <Image src="/images/wayfarer.png" alt="" fluid />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              {" "}
              <p>
                Wayfarer Travel is where the travel community gathers and
                disscusses any topic from set major cities. Users can choose
                from a list of major cities, and then create posts of their
                experience in the city. Posts are avalible for all users to see,
                and a user is able to cusomize their profile with a home city as
                well as photo.
                <br />
                Built with Django/Python/SQL/PostgreSQL
              </p>
            </Card.Body>
          </Card>
        </Row>
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
        </Row> */}
      </Container>
    </div>
  );
};

export default Projects;
