import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";
import PropTypes from 'prop-types';
import pillStore from "../../context/PillStore";

export default function Search({ handleSearch }) {
    const [internalSearch, setInternalSearch] = useState("");

    const handleOnClick = () => {
        handleSearch(internalSearch);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(internalSearch);
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Row>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Ingrese texto a buscar"
                        onChange={event => setInternalSearch(event.target.value)}
                        autoComplete="false"
                        className="form-control input-sm"
                    />
                </Col>
                <Col>
                    <Button className="btn btn-primary btn-sm" onClick={handleOnClick}>Buscar</Button>
                </Col>
            </Row>
        </Form>
    );
}

Search.propTypes = {
    searchText: PropTypes.string,
    handleSearch: PropTypes.func
}
