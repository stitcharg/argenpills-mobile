import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import pillStore from '../../context/PillStore';

const LastUpdate = () => {

	const lastUpdate = pillStore(s => s.lastUpdate);
	const filter = pillStore(s => s.filter);

	if (lastUpdate && filter == '') {
		const parsedDate = dayjs(lastUpdate, 'es', true).format('DD MMMM, YYYY');

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