import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = props => {
  return (
    <>
    <Card style={{ width: '288px', height: "448px", alignSelf: "center", margin: "5px" }}>
      <Card.Img style={{width: "250px",	height: "275px", objectFit: "contain", alignSelf: "center", marginTop: "5px"}}variant="top" src={props.img} />
      <Card.Body style={{width: "262px",	height: "167px"}}>
      <Card.Title id="model" style={{overflow: "hidden", textOverflow:"ellipsis", width: "230px", height: "50px"}}>{props.model}</Card.Title>
      <Card.Text style={{overflow: "hidden",textOverflow: "ellipsis", color: "grey"}}>
        Available units: {props.stock}
      </Card.Text>
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <Button variant="primary" style={{width: "110px"}}>Add to cart</Button>
      <Button variant="secondary" style={{width: "110px"}}>Details</Button>
      </div>
    </Card.Body>
  </Card>
  </>
  );
};

export default Item;