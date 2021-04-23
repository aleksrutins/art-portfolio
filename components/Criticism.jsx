import React from 'react';
import { Card, Container, Jumbotron, Media, Image } from 'react-bootstrap';

export default function Criticism() {
    return <Container>
        <Jumbotron style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
            <h1>Criticism</h1>
        </Jumbotron>
        <Media>
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbeda9dc-630b-498d-ab67-17e16852a016/d3ll57k-6602af3e-5501-4309-9afb-eb10ed915cac.png/v1/fill/w_1192,h_670,q_75,strp/menger_sponge_variation_1_by_krzysztofmarczak-d3ll57k.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kYmVkYTlkYy02MzBiLTQ5OGQtYWI2Ny0xN2UxNjg1MmEwMTYvZDNsbDU3ay02NjAyYWYzZS01NTAxLTQzMDktOWFmYi1lYjEwZWQ5MTVjYWMucG5nIiwid2lkdGgiOiI8PTExOTIiLCJoZWlnaHQiOiI8PTY3MCJ9XV19.iq6EgWI-zMIfJFm92KstjKDVNdg0AI7GBDGlQjkUGe8"
                rounded width="455" className="mr-3" />
            <Media.Body>
                <h5>Emotionalism</h5>
                <p>
                    This image, although computer-generated, makes me feel somewhat awed by the technical skill that the artist had in creating it. Some very complex mathematics are needed in order to create something like this.
                </p>
                <h5>Formalism</h5>
                <p>
                    This image is mainly brown. However, the artist used lighting and shadows to create many different shades, with gradients between them. You can also see some yellow in the picture, as a gradient with the brown.
                </p>
                <h5>Lines</h5>
                <p>
                    This picture is made up mostly of straight lines. There is shading and light as well, which is done by a computer, but still uses lines to some degree. 
                </p>
            </Media.Body>
        </Media>
        <Media className="mt-5">
            <Image rounded width="455" className="mr-3" src="https://www.jdhillberry.com/images/New%20Man%20Behind%20the%20Artwork%20w.jpg"/>
            <Media.Body>
                <h5>Value</h5>
                <p>
                    Value is the tone, or lightness/darkness, of the image. In this image, the darker tones are used for shadows.
                </p>
            </Media.Body>
        </Media>
    </Container>
}
