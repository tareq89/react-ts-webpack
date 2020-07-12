export async function callApi() {
  let response = await fetch(process.env.API_ROOT)
  response = await response.json()
  return response
}
