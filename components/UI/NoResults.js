import React from "react";
import pillStore from '../../context/PillStore';

const NoResults = () => {
	const keyword = pillStore(s => s.filter);

	return (
		<div>No se encontraron resultados de <strong>{keyword}</strong> :(
			Podes intentar buscar otras palabras, o buscar colores, como <em>rojo</em>, <em>amarillo</em> o <em>naranja</em></div>
	);
}

export default NoResults;