import { Container, Row, Col, ProgressBar, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Upgrade() {
    return (
        <div>
            <SiteUpgrading />
        </div>
    );
}

const SiteUpgrading = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1 style={{ color: '#55E' }}>Actualización en progreso</h1>
                    <p>Estamos actualizando el sitio! Volvé en un ratito :)</p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    );
};

