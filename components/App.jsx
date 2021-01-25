import React from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import Project, { Step } from './Project';

export default function App() {
    return <Container>
        <Jumbotron style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
            <h1>Art Website</h1>
            <p>A site for my art projects.</p>
        </Jumbotron>
        <h2>Projects</h2>
        <Project name="Jargon Visualized">
            <Step name="Research" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.trans-siberian.com%2Fnon_secure%2Fimages%2F20170622%2Ftso_logo1498155376%2Fmedium.jpg&f=1&nofb=1">
                I was originally planning to do a musical composition based on the Trans-Siberian Orchestra.
            </Step>
            <Step name="Design" topContent={<iframe src="https://munchkinhalfling.github.io/jargvis" frameBorder="0" height="300" title="Original Website" />}>
                I decided instead to do a website.
            </Step>
            <Step name="Build" topContent={<iframe src="https://munchkinhalfling.gitlab.io/jargvis" frameBorder="0" height="300" title="Final Website" />}>
            	I decided that the original website was a bit psychedelic for my tastes, so I made a much simpler one.
            </Step>
        </Project>
        <Project name="Music Visualization">
        	<Step name="Research" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4pVBvM2HW1g%2Fmaxresdefault.jpg&f=1&nofb=1">
            	Dream Theater is a Long Island-based progressive metal band.
            </Step>
            <Step name="Planning">
            	When I listen to music, I see changing colors, so I decided to turn that into a computer animation.
            </Step>
            <Step name="Build">
            	Not done yet
            </Step>
        </Project>
    </Container>
}
