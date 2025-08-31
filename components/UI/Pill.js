import React, { memo, useMemo } from "react";

import { Button, Card, ListGroup, Row, Col } from "react-bootstrap";
import useMediaQuery from '../../hooks/useMediaQuery';

import PillSubstance from "./Pill/Substance";
import PillLoad from "./Pill/Load";
import PillComment from "./Pill/PillComment";
import PillImage from "./Pill/PillImage";
import MultipleBatches from "./Pill/MultipleBatches";
import PillRibbon from "./Pill/PillRibbon";

import dayjs from 'dayjs';

import TestImageModal from './Modal';

require('dayjs/locale/es');
dayjs.locale('es');

const Pill = memo(function Pill(data) {
	const parsedDate = useMemo(() =>
		dayjs(data.date, 'es', true).format('MMMM-YYYY'),
		[data.date]
	);
	const isMobile = useMediaQuery('(max-width: 768px)');

	//console.log("Pill Data", data, data.multiple_batchs);

	let cssClassName = "flex-grow-1 pill";
	const multipleBatches = data.multiple_batchs;
	//If we have multiple batches, use another class as well
	if (multipleBatches)
		cssClassName += " multiple-batches";

	return (
		<Card className={cssClassName}>
			<PillImage imagePath={data.image} apLink={data.ap} />
			<Card.Body>
				<Card.Title>{data.name} {data.color}
					<PillRibbon type={data.warning} isMobile={isMobile} />
					<MultipleBatches hasMultiple={multipleBatches}></MultipleBatches>
				</Card.Title>
				<Card.Subtitle className="date">{parsedDate}</Card.Subtitle>


				<ListGroup variant="flush">

					<PillSubstance substance={data.substance}></PillSubstance>
					<PillLoad load={data.load} />
					<PillComment comment={data.notes}></PillComment>
				</ListGroup>

				{data.lab &&
					<Card.Link href={data.lab}>Test de Laboratorio</Card.Link>
				}

			</Card.Body>

			<Card.Footer>
				<Row>
					<Col xs={12} md={6}>
						<Button variant="primary" size="sm" href={data.ap} className="w-100 mb-2 mb-md-0">Leer reviews</Button>
					</Col>
					<Col xs={12} md={6}>
						<TestImageModal lab_image_url={data.lab_image} />
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
});

Pill.displayName = 'Pill';

export default Pill;