import React from "react";
import { Nav, Col, Container, Row, Card } from "react-bootstrap";
import "./ProjectsGrid.css";
function ProjectsGrid() {
  return (
    <Container>
      <div className="proContainer">
        <Row>
          <Col>
            <a href="/cloudview">
              <Card>
                <Card.Img variant="top" src="/images/cloudview.png" />
                <div className="imgContainer">
                  <div className="overlay">
                    <div className="text">Cloud View</div>
                    <div className="subText"></div>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/wayfarer">
              <Card>
                <Card.Img variant="top" src="/images/wayfarer.png" />
                <div className="imgContainer">
                  <div className="overlay">
                    <div className="text">Wayfarer Travel</div>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/apptracker">
              <Card>
                <Card.Img variant="top" src="/images/apptrack.png" />
                <div className="imgContainer">
                  <div className="overlay">
                    <div className="text">Application Tracker</div>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProjectsGrid;
