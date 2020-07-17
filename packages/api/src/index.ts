export async function callApi() {
	let response = await fetch(process.env.REACT_APP_API_ROOT);
	response = await response.json();
	return response;
}
