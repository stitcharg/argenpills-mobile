import axios from "axios";
import { iPill } from "../interfaces/iPill";

const fetchPills = async (key:any) => {
	const filter = key ? key.queryKey[1] : "";

	try {
		// let url = process.env.NEXT_PUBLIC_ENDPOINT_PILLS;

		// if (filter != "")
		// 	url = `${process.env.NEXT_PUBLIC_ENDPOINT_PILLS_SEARCH}?s=${filter}`;

		// const response = await axios.get(url);
		const response = await axios.get<iPill[]>('/data.json');
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export default fetchPills;