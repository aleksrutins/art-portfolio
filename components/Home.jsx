import React, { useState } from 'react';
import { Container, Jumbotron, Row, Card } from 'react-bootstrap';
import Project, { Step } from './Project';
import DescModal from './DescModal';

export default function Home() {
return <Container><Jumbotron style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
            <h1>Art Website</h1>
            <p>A site for my art projects.</p>
        </Jumbotron>
        <h2>Projects</h2>
        <Project name="Jargon Visualized">
            <Step name="Research" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.trans-siberian.com%2Fnon_secure%2Fimages%2F20170622%2Ftso_logo1498155376%2Fmedium.jpg&f=1&nofb=1">
                I was originally planning to do a musical composition based on the Trans-Siberian Orchestra.
            </Step>
            <Step name="Design" topContent={<iframe src="https://aleksrutins.github.io/jargvis" frameBorder="0" height="300" title="Original Website" />}>
                I decided instead to do a website.
                <hr/>
                <a href="https://aleksrutins.github.io/jargvis">See it here.</a>
            </Step>
            <Step name="Build" topContent={<iframe src="https://aleksrutins.github.io/jargvis2" frameBorder="0" height="300" title="Final Website" />}>
            	I decided that the original website was a bit psychedelic for my tastes, so I made a much simpler one.
                <hr/>
                <a href="https://aleksrutins.github.io/jargvis2">See it here.</a>
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
	<Project name="2021 Overture">
	    <div>
		The 2021 Overture is a musical composition that I created. I consider it to be one of my best compositions. It was mainly inspired by Dream Theater and Symphony X.
	    </div>
	</Project>
        <Project name="Unnamed">
                <Step name="Planning" topContent={<iframe src="https://www.youtube-nocookie.com/embed/2Rkx6b5vFdQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}>
                    Haken is an English progressive metal band.
                </Step>
        </Project>
	<Project name="Unnamed">
		<Step name="Planning" topContent={<iframe src="https://open.spotify.com/embed/album/38E1DLQ4SsSCUj2xSPrp9I" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>}>
		Orden Ogan is a German power metal band. Their songs contain metaphors for current events and problems. Their name translates to "Order of Fear" in Old Celtic and German.
		</Step>
		</Project>
        <Project name="Portrait">
            <Step name="Planning" img="https://pro2-bar-s3-cdn-cf.myportfolio.com/605533d7-ce09-4efc-aeef-99dc34b53562/ba1960b5-6ae7-4cd7-b30a-407fe3db0c90_rw_1920.jpg">
                This is "The Mapmaker" by Bethany Perron.
            </Step>
        </Project>
        </Container>
        }
