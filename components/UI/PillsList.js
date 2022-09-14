import React from "react";
import Pill from "./Pill";
import PropTypes from 'prop-types';
import { Row, Col } from "react-bootstrap";
import NoResults from "./NoResults";

export default function PillList(props) {

	if (props.data && props.data.length > 0) {
		return (
			<Row xs={{ cols: 1 }} md={{ cols: 2 }} xl={{ cols: 3 }} className="g-4">
				{props.data.map(pill => <Col xs key={pill.id}><Pill
					key={pill.id}
					name={pill.name}
					color={pill.color}
					date={pill.posted_date}
					load={pill.load}
					image={pill.image}
					lab={pill.lab_url}
					ap={pill.ap_url}
					warning={pill.warning}
					substance={pill.substance}
					lab_image={pill.lab_image}
					notes={pill.notes}
					multiple_batchs={pill.multiple_batchs}
				/></Col>)
				}
			</Row >
		);
	} else {
		return (<NoResults />);
	}
}

PillList.propTypes = {
	data: PropTypes.any
}