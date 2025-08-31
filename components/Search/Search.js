import React, { useState, useCallback, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, placeholder = "Buscar pastillas..." }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

	// Debounce search term
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 300); // 300ms delay

		return () => clearTimeout(timer);
	}, [searchTerm]);

	// Trigger search when debounced term changes
	useEffect(() => {
		handleSearch(debouncedSearchTerm);
	}, [debouncedSearchTerm, handleSearch]);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		handleSearch(searchTerm);
	}, [searchTerm, handleSearch]);

	const handleClear = useCallback(() => {
		setSearchTerm('');
		setDebouncedSearchTerm('');
		handleSearch('');
	}, [handleSearch]);

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup>
				<Form.Control
					type="text"
					placeholder={placeholder}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					aria-label="Search pills"
				/>
				<Button
					variant="outline-secondary"
					type="submit"
					aria-label="Search"
				>
					🔍
				</Button>
				{searchTerm && (
					<Button
						variant="outline-secondary"
						onClick={handleClear}
						aria-label="Clear search"
					>
						×
					</Button>
				)}
			</InputGroup>
		</Form>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Search;
