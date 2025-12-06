import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Search({ handleSearch }) {
  const [internalSearch, setInternalSearch] = useState("");

  const handleOnClick = () => {
    handleSearch(internalSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(internalSearch);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="search-form">
      <Form.Control
        size="md"
        type="text"
        placeholder="Ej: Visa Plateada"
        onChange={(event) => setInternalSearch(event.target.value)}
        autoComplete="false"
        className="form-control input-md"
      />
      <Button
        className="btn btn-primary btn-md"
        onClick={handleOnClick}
        disabled={internalSearch.length > 0 && internalSearch.length <= 3}
      >
        Buscar
      </Button>
    </Form>
  );
}

Search.propTypes = {
  searchText: PropTypes.string,
  handleSearch: PropTypes.func,
};
