import React from 'react'
import { Container } from 'react-bootstrap'

export default function ErrorPage(props) {
    return <Container style={{"text-align": "center",
    position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
        <h1>{props.err}</h1>
        <p>Something went wrong.</p>
    </Container>
}