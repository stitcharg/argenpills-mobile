import React from "react";
import PropTypes from 'prop-types';
import { Badge } from "react-bootstrap";

export default function MultipleBatches(props) {
    const hasMultiple = props.hasMultiple;

    if (hasMultiple) {
        return (<Badge bg="secondary" title="Hay multiples tandas de esta pastilla en circulacion">Multiples tandas</Badge>);
    }

    return null;
}

MultipleBatches.propTypes = {
    hasMultiple: PropTypes.bool
}
