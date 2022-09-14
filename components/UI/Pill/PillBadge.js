import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function PillBadge(props) {
	//if null, no warning, 1 = warning / 2 = danger
	const warning = props.warning;

	if (warning === null) return null;

	const WARNING = 1;
	const DANGER = 2;

	if (warning === DANGER)
		return (<Badge bg="danger">Peligrosa</Badge>);
	else if (warning === WARNING)
		return (<Badge bg="warning">Cuidado</Badge>);

	return null;
}

PillBadge.propTypes = {
	warning: PropTypes.number
}
