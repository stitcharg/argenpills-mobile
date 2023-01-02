import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PillList from '../UI/PillsList';
import LastUpdate from '../UI/LastUpdate';
import Pagination from '../UI/Pagination';
import pillStore from '../../context/PillStore';

const Main = ({ resultsPills }) => {
	const activePage = pillStore(s => s.activePage);
	const fnSetActivePage = pillStore(s => s.setActivePage);
	const totalPages = pillStore(s => s.totalPages);

	useEffect(() => {
		if (window) window.scrollTo(0, 0);
	}, [activePage])

	return (
		<Container className="p-3">
			{
				resultsPills.isError && (
					<div>Error trayendo los datos: {resultsPills.error}</div>
				)
			}
			{
				resultsPills.isLoading && (
					<div>Cargando...</div>
				)
			}
			{
				resultsPills.isSuccess &&
				(
					<>
						<LastUpdate data={resultsPills.data.data}></LastUpdate>
						<PillList data={resultsPills.data.data} />
						<Pagination
							activePage={activePage}
							setActivePage={fnSetActivePage}
							pages={totalPages} // Total number of pages
						/>
					</>
				)
			}
		</Container>
	)

}

Main.propTypes = {
	resultsPills: PropTypes.any
}

export default Main;