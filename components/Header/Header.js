import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import PropTypes from 'prop-types';
import pillStore from '../../context/PillStore';

export default function Header({ handleSearch }) {
    const fnSetActivePage = pillStore(s => s.setActivePage);

    const doSearch = (searchText) => {
        fnSetActivePage(1);
        handleSearch(searchText);
    }

    return (
        <Container>
            <Row>
                <Col className="col-xs-12 col-md-6">
                    <Logo />
                </Col>

                <Col className="col-xs-6 col-md-6">
                    <Search handleSearch={doSearch} />
                </Col>
            </Row>
        </Container>
    )
}

Header.propTypes = {
    searchText: PropTypes.string,
    handleSearch: PropTypes.func
}


