import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <Spinner animation="border" variant="primary" />
        <p className="loading-text">Cargando...</p>
      </div>
    </div>
  );
}
