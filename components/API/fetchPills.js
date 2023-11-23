import axios from "axios";

const PAGESIZE = 9;

const URL_ITEMS = process.env.NEXT_PUBLIC_ENDPOINT_PILLS;
const URL_SEARCH = process.env.NEXT_PUBLIC_ENDPOINT_PILLS_SEARCH;

const fetchPills = async (key, currentPage, searchKey, lastEvaluatedKey) => {
	const filter = searchKey ?? "";
	const lastKey = lastEvaluatedKey ?? "";

	try {
		let url = "";
		if (filter != "") {
			//Search 
			url = `${URL_SEARCH}?s=${filter}&pageSize=${PAGESIZE}`;
		} else {
			//Items
			url = `${URL_ITEMS}?pageSize=${PAGESIZE}`;
			if (lastKey != "" && currentPage > 1)
				url += `&lastKey=${lastKey}`;
		}

		const response = await axios.get(url);
		return response;
	} catch (error) {
		console.log(error);
	}
}

export default fetchPills;