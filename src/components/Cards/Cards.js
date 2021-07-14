import React from "react";
import { Card } from "react-bootstrap";
import './Cards.css';

const Cards = (props) => {
  return (
      <Card className='my-4'>
        <Card.Img variant="top" src={props.productImage} className='img-fluid card-image'  />
        <Card.Body className=''>
          <Card.Title className='d-flex justify-content-between'><span>{props.title}</span><span>{props.location}</span></Card.Title>
          <Card.Text>{props.description.split(" ")
              .splice(0, 10)
              .join(" ")}</Card.Text>
          <Card.Text className=' text-success p-2'>&#8358;{props.price}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default Cards;
