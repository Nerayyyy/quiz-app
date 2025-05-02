import React from 'react';
import { Card } from 'react-bootstrap';

export default function Score({ score, total }) {
  const percentage = Math.round((score / total) * 100);
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Quiz Complete!</Card.Title>
        <Card.Text>
          You scored {score} out of {total} ({percentage}%).
        </Card.Text>
      </Card.Body>
    </Card>
  );
}