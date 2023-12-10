// Projects.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import portfolioImage from './assets/images/portfolio.png';
import snakeImage from './assets/images/snake.png';
import gadgetImage from './assets/images/gadget.png';

const Projects = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>

      {/* Portfolio Project */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={portfolioImage} alt="Portfolio Project" />
        <Card.Body>
          <Card.Title>Portfolio Project</Card.Title>
          <Card.Text>
            A personal portfolio website showcasing my skills, projects, and achievements. Built with React and styled using React Bootstrap.
          </Card.Text>
          <Button variant="primary" href="#" target="_blank">
            View Project
          </Button>
        </Card.Body>
      </Card>

      {/* Snake Game Project */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={snakeImage} alt="Snake Game Project" />
        <Card.Body>
          <Card.Title>Snake Game Project</Card.Title>
          <Card.Text>
            Classic Snake game implemented using JavaScript and HTML5 Canvas. Enjoy the nostalgic gameplay and challenge yourself to achieve a high score.
          </Card.Text>
          <Button variant="primary" href="#" target="_blank">
            Play Game
          </Button>
        </Card.Body>
      </Card>

      {/* Gadget Groove Website Project */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={gadgetImage} alt="Gadget Groove Website Project" />
        <Card.Body>
          <Card.Title>Gadget Groove Website Project</Card.Title>
          <Card.Text>
            An e-commerce website for gadgets and electronics. Developed using MERN stack (MongoDB, Express, React, Node.js) with a responsive design.
          </Card.Text>
          <Button variant="primary" href="#" target="_blank">
            Visit Website
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  card: {
    marginBottom: '20px',
  },
};

export default Projects;
