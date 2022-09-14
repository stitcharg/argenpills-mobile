import React from "react";
import { ListGroup } from "react-bootstrap";

export default function PillComment(pill) {
	const comment = pill.comment;

	if (!comment || comment === null || comment === "") return null;

	return (
		<ListGroup.Item>Notas: <small>{comment}</small></ListGroup.Item>
	);
}