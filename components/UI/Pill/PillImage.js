import React from "react";
import { Card } from "react-bootstrap";

export default function PillImage(data) {
	if (data != null) {
		const imagePath = data.imagePath;
		return (
			<Card.Img variant="top" src={imagePath} className="img-fluid" width="250px" alt="Foto de la pastilla" />)

	}
	return null;
}
