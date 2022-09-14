import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function PillSubstance(props) {
	const substances = [
		{
			id: 0,
			desc: 'Desconocida'
		},
		{
			id: 1,
			desc: 'MDMA',
		},
		{
			id: 2,
			desc: 'Catinona',
		}
	]

	if (props.substance != null) {
		return (
			<ListGroup.Item>Sustancia: {substances[props.substance].desc}</ListGroup.Item>
		);
	} else return null;
}

PillSubstance.propTypes = {
	substance: PropTypes.number
}

