// Reviews.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer Reviews</h2>

      {/* Seller Reviews */}
      <Container>
        <h3 style={styles.subHeading}>Seller Reviews</h3>
        <Row>
          <Col md={4}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Seller A</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">June 1, 2023</Card.Subtitle>
                <Card.Text>
                  "Excellent service! The product arrived on time and was exactly as described. Will definitely buy again."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Seller B</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">July 15, 2023</Card.Subtitle>
                <Card.Text>
                  "Great communication and fast shipping. The seller went above and beyond to ensure a smooth transaction."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more seller reviews as needed */}
        </Row>
      </Container>

      {/* Buyer Reviews */}
      <Container>
        <h3 style={styles.subHeading}>Buyer Reviews</h3>
        <Row>
          <Col md={4}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Buyer X</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">August 5, 2023</Card.Subtitle>
                <Card.Text>
                  "Superb product! The seller was responsive to my queries, and the item exceeded my expectations."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Buyer Y</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">September 12, 2023</Card.Subtitle>
                <Card.Text>
                  "Hassle-free transaction. The seller shipped the item promptly, and it was well-packaged. Highly recommended!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more buyer reviews as needed */}
        </Row>
      </Container>
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
  subHeading: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '20px',
  },
  card: {
    marginBottom: '20px',
  },
};

export default Reviews;
