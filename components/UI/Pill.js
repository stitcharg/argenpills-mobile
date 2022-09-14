import React from "react";

import { Button, Card, ListGroup } from "react-bootstrap";

import PillSubstance from "./Pill/Substance";
import PillLoad from "./Pill/Load";
import PillBadge from "./Pill/PillBadge";
import PillComment from "./Pill/PillComment";
import PillImage from "./Pill/PillImage";
import MultipleBatches from "./Pill/MultipleBatches";

import dayjs from 'dayjs';

import TestImageModal from './Modal';

require('dayjs/locale/es');
dayjs.locale('es');

export default function Pill(data) {
	const parsedDate = dayjs(data.date, 'es', true).format('MMMM-YYYY');

	//console.log("Pill Data", data, data.multiple_batchs);

	let cssClassName = "pill";
	const multipleBatches = data.multiple_batchs;
	//If we have multiple batches, use another class as well
	if (multipleBatches)
		cssClassName += " multiple-batches";

	return (
		<Card className={cssClassName}>
			<PillImage imagePath={data.image} />
			<Card.Body>
				<Card.Title>{data.name} {data.color}
					<PillBadge warning={data.warning}></PillBadge>
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
				<Button variant="primary" size="sm" href={data.ap}>Visitar ArgenPills</Button>

				<TestImageModal lab_image_url={data.lab_image} />
			</Card.Footer>
		</Card>
	);
}