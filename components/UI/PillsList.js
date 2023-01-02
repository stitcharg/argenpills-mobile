import React from "react";
import Pill from "./Pill";
import PropTypes from 'prop-types';
import { Row, Col } from "react-bootstrap";
import NoResults from "./NoResults";
import pillStore from "../../context/PillStore";

export default function PillList(props) {

	const pageResults = (pills) => {
		const pillsPerPage = pillStore(s => s.pillsPerPage);
		const activePage = pillStore(s => s.activePage);

		if (pills.length < pillsPerPage) return pills;

		const skip = (pillsPerPage * activePage) - pillsPerPage;

		return pills.slice(skip, pillsPerPage + skip);
	}

	if (props.data && props.data.length > 0) {
		//paginar del lado del cliente me arruga la ropa, pero aca estamos
		const pagedResults = pageResults(props.data);

		return (
			<Row xs={{ cols: 1 }} md={{ cols: 2 }} xl={{ cols: 3 }} className="g-4">
				{pagedResults.map(pill => <Col xs key={pill.id}><Pill
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