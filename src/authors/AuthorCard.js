import React from "react";
import { Card, Button } from "react-bootstrap";
//import {CardColumns} from "react-bootstrap";

export function AuthorCard(props){
    return (
        <Card style={{width: "16em" }}>
            <Card.Img variant="top" src={props.author.image}  />
            <Card.Body>
                <Card.Title>{props.author.firstName} {props.author.lastName} </Card.Title>
                <Card.Text>Age: {props.author.age}</Card.Text>
                <Button variant="warning">Click for something</Button>
                <br></br>
            </Card.Body>
        </Card>
    );
}