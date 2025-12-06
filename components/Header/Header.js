import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import PropTypes from "prop-types";
import pillStore from "../../context/PillStore";

export default function Header({ handleSearch }) {
  const fnSetActivePage = pillStore((s) => s.setActivePage);

  const doSearch = (searchText) => {
    fnSetActivePage(1);
    handleSearch(searchText);
  };

  return (
    <header className="sticky-header">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-between">
          <Col xs={12} md="auto" className="text-center text-md-start">
            <Logo />
          </Col>
          <Col xs={12} md={7} lg={6}>
            <Search handleSearch={doSearch} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

Header.propTypes = {
  searchText: PropTypes.string,
  handleSearch: PropTypes.func,
};
