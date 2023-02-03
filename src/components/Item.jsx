import { Button, Card } from "react-bootstrap";

function Item(props) {
  return(
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.model}</Card.Title>
        <Card.Text>
          {props.brand}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default Item;