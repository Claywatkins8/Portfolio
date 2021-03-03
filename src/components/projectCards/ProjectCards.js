import React from "react";
import {
  Nav,
  Col,
  Container,
  Row,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";

import "./ProjectCards.css";

function ProjectCards() {
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/cloudview.png" />
          <Card.Body>
            <Card.Title>Cloud View</Card.Title>
            <Card.Text>
              Web app using Djang templating, PostgreSQL and Python
            </Card.Text>
          </Card.Body>
          <a href="/cloudview">
            <button class="btn card_btn">Read More</button>
          </a>
          {/* <Card.Footer>
            <small className="text-muted">Solo Project</small>
          </Card.Footer> */}
        </Card>
        <Card href="/wayfarer">
          <Card.Img variant="top" src="/images/wayfarer.png" />
          <Card.Body>
            <Card.Title>Wayfarer</Card.Title>
            <Card.Text>
              Travel blog using Django Teplating, PostgreSQL and Python
            </Card.Text>
          </Card.Body>
          <a href="/wayfarer">
            <button class="btn card_btn">Read More</button>
          </a>
          {/* <Card.Footer>
            <small className="text-muted">Group Collaboration</small>
        </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/apptrack.png" />
          <Card.Body>
            <Card.Title>AppTracker</Card.Title>
            <Card.Text>
              Uses MVC framework, ExpressJS, Mongoose, MongoDB, vvand EJS
            </Card.Text>
          </Card.Body>
          <a href="/apptracker">
            <button class="btn card_btn">Read More</button>
          </a>
          {/* <Card.Footer>
            <small className="text-muted">Team Project</small>
          </Card.Footer> */}
        </Card>
      </CardDeck>
    </div>
  );
}

export default ProjectCards;
