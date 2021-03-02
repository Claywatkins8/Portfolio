import React from "react";
import { Nav, Col, Container, Row, Button } from "react-bootstrap";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Hi, I'm Clayton</h1>
      <p>A Seattle based Full Stack Engineer</p>
      <Button className="btn" href="/about" variant="dark">
        About Me
      </Button>
      <Button className="btn" href="/projects" variant="dark">
        Projects
      </Button>
    </div>
  );
}

export default Hero;
