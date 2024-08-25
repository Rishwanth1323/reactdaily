import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCreation({title,designation,onDelete}) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {designation}
        </Card.Text>
        <Button onClick={onDelete} variant="primary">delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCreation;