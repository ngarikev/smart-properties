import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Content() {
  return (
    <Container fluid className="content-area">
  <Row className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
    <Col>
      <h1 className="h2">Dashboard</h1>
    </Col>
    <Col className="text-end">
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <Button variant="outline-secondary" size="sm">Share</Button>
          <Button variant="outline-secondary" size="sm">Export</Button>
        </div>
        <Button variant="outline-secondary" size="sm">
          📅 This week
        </Button>
      </div>
    </Col>
  </Row>
</Container>

  );
}

export default Content;
