export async function callApi() {
  let response = await fetch('https://get.geojs.io/v1/ip/country.json')
  response = await response.json()
  return response
}
