import axios from "axios";

const PAGESIZE = 9;

const URL_ITEMS = process.env.NEXT_PUBLIC_ENDPOINT_PILLS;
const URL_SEARCH = process.env.NEXT_PUBLIC_ENDPOINT_PILLS_SEARCH;

// Create axios instance with default config
const apiClient = axios.create({
	timeout: 10000, // 10 seconds timeout
	headers: {
		'Content-Type': 'application/json',
	},
});

const fetchPills = async (key, currentPage, searchKey, lastEvaluatedKey) => {
	const filter = searchKey ?? "";
	const lastKey = lastEvaluatedKey ?? "";

	try {
		let url = "";
		if (filter != "") {
			//Search 
			url = `${URL_SEARCH}?s=${encodeURIComponent(filter)}&pageSize=${PAGESIZE}`;
		} else {
			//Items
			url = `${URL_ITEMS}?pageSize=${PAGESIZE}`;
			if (lastKey != "" && currentPage > 1)
				url += `&lastKey=${encodeURIComponent(lastKey)}`;
		}

		const response = await apiClient.get(url);
		return response;
	} catch (error) {
		console.error('Error fetching pills:', error);

		// Handle specific error types
		if (error.code === 'ECONNABORTED') {
			throw new Error('Request timeout. Please try again.');
		}

		if (error.response) {
			// Server responded with error status
			const status = error.response.status;
			if (status === 404) {
				throw new Error('No results found.');
			} else if (status >= 500) {
				throw new Error('Server error. Please try again later.');
			} else {
				throw new Error(`Request failed with status ${status}`);
			}
		} else if (error.request) {
			// Network error
			throw new Error('Network error. Please check your connection.');
		} else {
			// Other error
			throw new Error('An unexpected error occurred.');
		}
	}
}

export default fetchPills;