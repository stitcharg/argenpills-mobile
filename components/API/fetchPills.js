import axios from "axios";

const fetchPills = async (key) => {
	const filter = key ? key.queryKey[1] : "";

	try {
		let url = process.env.NEXT_PUBLIC_ENDPOINT_PILLS;

		if (filter != "")
			url = `${process.env.NEXT_PUBLIC_ENDPOINT_PILLS_SEARCH}?s=${filter}`;

		const response = await axios.get(url);
		return response;
	} catch (error) {
		console.log(error);
	}
}

export default fetchPills;