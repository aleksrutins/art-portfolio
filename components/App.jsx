import React, { useState } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import Project, { Step } from './Project';
import DescModal from './DescModal';

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
                Dream Theater is an American <DescModal label="progressive metal">
                Progressive metal is a style of music that combines metal with melody and meaningful lyrics.
                </DescModal> band.
                <hr/>
                <DescModal label="Wikipedia">
                    Dream Theater is an American progressive metal band formed in 1985 under the name Majesty by John Petrucci, John Myung and Mike Portnoy while they attended Berklee College of Music in Boston, Massachusetts. They subsequently dropped out of their studies to concentrate further on the band that would eventually become Dream Theater. Though a number of lineup changes followed, the three original members remained together until September 8, 2010, when Portnoy left the band and he was replaced several months later by Mike Mangini. James LaBrie has been the lead singer of Dream Theater since 1991, replacing Charlie Dominici who had left the band two years earlier. Dream Theater's first keyboardist, Kevin Moore, left the band after three albums and was replaced by Derek Sherinian in 1995 after a period of touring. After one album with Sherinian, the band replaced him with current keyboardist Jordan Rudess in 1999.
                    <br/>
                    <a href="https://en.wikipedia.org/wiki/Dream_Theater">More info</a>
                </DescModal>
            </Step>
            <Step name="Planning">
            	When I listen to music, I see changing colors, so I decided to turn that into an abstract computer animation.
            </Step>
            <Step name="Build">
            	Not done yet
            </Step>
        </Project>
    </Container>
}
