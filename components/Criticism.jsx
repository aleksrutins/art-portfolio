import React from 'react';
import { Card, Container, Jumbotron, Media, Image } from 'react-bootstrap';

export default function Criticism() {
    return <Container>
        <Jumbotron style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
            <h1>Criticism</h1>
        </Jumbotron>
        <Media>
            <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpre03.deviantart.net%2F9807%2Fth%2Fpre%2Fi%2F2011%2F191%2F2%2F0%2Fmenger_sponge_variation_1_by_krzysztofmarczak-d3ll57k.png&f=1&nofb=1"
                rounded height="256" className="mr-3" />
            <Media.Body>
                <h5>Emotionalism</h5>
                <p>
                    This image, although computer-generated, makes me feel somewhat awed by the technical skill that the artist had in creating it. Some very complex mathematics are needed in order to create something like this.
                </p>
            </Media.Body>
        </Media>
    </Container>
}