import React from "react";
import { Card } from "react-bootstrap";

export default function PillImage({ imagePath, apLink }) {
	if (imagePath != null) {
		return (
			<a href={apLink}
				title="Leer reviews y ver mas informaci&oacute;n" target="_blank"><Card.Img variant="top" src={imagePath} className="img-fluid" width="250px" alt="Foto de la pastilla" /></a>)

	}
	return null;
}
