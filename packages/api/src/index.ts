import axios from "axios";
export async function callApi() {
	let response = await axios.request(process.env.REACT_APP_API_ROOT);
	return response;
}
