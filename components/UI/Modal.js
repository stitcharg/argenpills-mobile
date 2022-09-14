import React, { useState } from 'react'
import { Button, Modal, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function TestImageModal(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (props.lab_image_url == null) return null;

	return (
		<>
			<Button variant="success" onClick={handleShow} size="sm" className='btnViewTest'>
				Ver foto del test
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Test</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={props.lab_image_url} className="img-fluid"></Image>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

TestImageModal.propTypes = {
	lab_image_url: PropTypes.string
}