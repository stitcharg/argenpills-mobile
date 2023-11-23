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
				(resultsPills.isLoading || resultsPills.isFetching) && (
					<div>Cargando...</div>
				)
			}
			{
				resultsPills.isSuccess && resultsPills.isFetched &&
				(
					<>
						<LastUpdate />
						<PillList data={resultsPills.data.data.data} />
						<Pagination
							activePage={activePage}
							setActivePage={fnSetActivePage}
							pages={totalPages}
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