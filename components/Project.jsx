import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function Project(props) {
    return <Card>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Row>
                {props.children}
            </Row>
        </Card.Body>
    </Card>
}
export function Step(props) {
    return <Col>
        <Card>
            {props.img && <Card.Img variant="top" src={props.img} />}
            {props.topContent}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.children}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
}