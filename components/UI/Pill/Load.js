import React from "react";
import PropTypes from 'prop-types';
import { ListGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { BsPatchExclamationFill } from "react-icons/bs";

export default function PillLoad(props) {
	const HIGH = 3;

	const load = [
		{
			id: 0,
			desc: 'Desconocida'
		},
		{
			id: 1,
			desc: 'Baja',
		},
		{
			id: 2,
			desc: 'Media',
		},
		{
			id: 3,
			desc: "Alta"
		}
	]

	const highLoadTitle = "Carga alta";
	const hightLoadText = "Cuando una pastilla es de carga alta se recomienda tomar de a mitades, y esperando el tiempo suficiente entre tomas";

	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3">{highLoadTitle}</Popover.Header>
			<Popover.Body>{hightLoadText}</Popover.Body>
		</Popover>
	);

	if (props.load != null) {
		return (
			<ListGroup.Item>
				<div className="pull-right">
					Carga: {load[props.load].desc}
					{props.load === HIGH &&
						<OverlayTrigger
							trigger="click"
							placement="bottom"
							overlay={popover}>
							<div className="iconPillLoad"><BsPatchExclamationFill /></div>
						</OverlayTrigger>
					}
				</div>
			</ListGroup.Item>

		);
	} else return null;
}

PillLoad.propTypes = {
	load: PropTypes.number
}

