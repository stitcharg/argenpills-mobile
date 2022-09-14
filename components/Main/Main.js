import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PillList from '../UI/PillsList';

const Main = ({ resultsPills }) => {
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
					<PillList data={resultsPills.data.data} />
				)
			}
		</Container>
	)

}

Main.propTypes = {
	resultsPills: PropTypes.any
}

export default Main;