import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function DescModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {e.preventDefault(); setShow(true);}

    return <>
        <a href="#!?%&" onClick={handleShow}>{props.label}</a>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    </>
}
