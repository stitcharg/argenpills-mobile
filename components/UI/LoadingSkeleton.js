import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const LoadingSkeleton = ({ count = 9 }) => {
	return (
		<Row xs={{ cols: 1 }} md={{ cols: 2 }} xl={{ cols: 3 }} className="g-4">
			{Array.from({ length: count }).map((_, index) => (
				<Col xs key={index} className="d-flex justify-content-center">
					<Card className="flex-grow-1 pill">
						<div
							className="loading-skeleton"
							style={{
								height: '200px',
								width: '100%',
								borderRadius: '0.375rem 0.375rem 0 0'
							}}
						/>
						<Card.Body>
							<div className="loading-skeleton" style={{ height: '24px', width: '80%', marginBottom: '8px' }} />
							<div className="loading-skeleton" style={{ height: '16px', width: '60%', marginBottom: '16px' }} />

							<div style={{ marginBottom: '8px' }}>
								<div className="loading-skeleton" style={{ height: '16px', width: '100%' }} />
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div className="loading-skeleton" style={{ height: '16px', width: '70%' }} />
							</div>
							<div style={{ marginBottom: '8px' }}>
								<div className="loading-skeleton" style={{ height: '16px', width: '90%' }} />
							</div>
						</Card.Body>

						<Card.Footer>
							<Row>
								<Col xs={12} md={6}>
									<div className="loading-skeleton" style={{ height: '32px', width: '100%', marginBottom: '8px' }} />
								</Col>
								<Col xs={12} md={6}>
									<div className="loading-skeleton" style={{ height: '32px', width: '100%' }} />
								</Col>
							</Row>
						</Card.Footer>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default LoadingSkeleton; 