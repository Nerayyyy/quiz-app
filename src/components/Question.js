import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Question({ question, options, onAnswerSelected }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        {options.map((opt, idx) => (
          <Button
            key={idx}
            variant="outline-primary"
            className="d-block mb-2"
            onClick={() => onAnswerSelected(opt)}
          >
            {opt}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}