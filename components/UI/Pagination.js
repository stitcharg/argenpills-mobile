import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ activePage, pages, setActivePage, visiblePages = 5 }) => {
	const getPageNumbers = () => {
		const pageNumbers = [];
		const halfVisible = Math.floor(visiblePages / 2);

		let start = Math.max(1, activePage - halfVisible);
		let end = Math.min(pages, start + visiblePages - 1);

		// Adjust start if end is at its maximum
		if (end === pages) {
			start = Math.max(1, end - visiblePages + 1);
		}

		// Add first page if not included
		if (start > 1) {
			pageNumbers.push(1);
			if (start > 2) pageNumbers.push("...");
		}

		// Add visible pages
		for (let i = start; i <= end; i++) {
			pageNumbers.push(i);
		}

		// Add last page if not included
		if (end < pages) {
			if (end < pages - 1) pageNumbers.push("...");
			pageNumbers.push(pages);
		}

		return pageNumbers;
	};

	const renderPageNumber = (pageNumber) => {
		if (pageNumber === "...") {
			return <div key={Math.random()} className="ellipsis">...</div>;
		}
		return (
			<div
				className={`page-number ${activePage === pageNumber ? "active" : ""}`}
				onClick={() => setActivePage(pageNumber)}
				key={pageNumber}
			>
				{pageNumber < 10 ? `0${pageNumber}` : pageNumber}
			</div>
		);
	};

	if (pages <= 1) return null;

	return (
		<div className="pagination">
			<div
				className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
				onClick={() => activePage !== 1 && setActivePage(activePage - 1)}
			>
				{"<"}
			</div>

			{getPageNumbers().map(renderPageNumber)}

			<div
				className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
				onClick={() => activePage !== pages && setActivePage(activePage + 1)}
			>
				{">"}
			</div>
		</div>
	);
};

Pagination.propTypes = {
	activePage: PropTypes.number.isRequired,
	pages: PropTypes.number.isRequired,
	setActivePage: PropTypes.func.isRequired,
	visiblePages: PropTypes.number,
};

export default Pagination;