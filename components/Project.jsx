import React from 'react';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';

export default function Project(props) {
    return <Accordion>
        <Card style={{"margin": "6px"}}>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">{props.name}</Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                        <Row>
                            {props.children}
                        </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
}
export function Step(props) {
    return <Col>
        <Card>
            {props.img && <Card.Img variant="top" src={props.img} alt={props.name} />}
            {props.topContent}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.children}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
}