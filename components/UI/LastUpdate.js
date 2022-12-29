import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import dayjs from 'dayjs';

const LastUpdate = (resultsPills) => {
	const pillData = resultsPills.data;

	if (pillData && pillData.length > 0) {
		const lastAddedItem = pillData[0];
		const lastUpdateDate = lastAddedItem.posted_date;

		const parsedDate = dayjs(lastUpdateDate, 'es', true).format('DD MMMM, YYYY');

		return (
			<Container className="p-3">
				<Row className="justify-content-end small lastUpdate bs-blue">
					Ultima actualizacion: {parsedDate}
				</Row>
			</Container>
		)
	}
}

LastUpdate.propTypes = {
	resultsPills: PropTypes.any
}


export default LastUpdate;