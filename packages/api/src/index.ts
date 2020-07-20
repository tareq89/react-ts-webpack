export async function callApi(): Promise<any> {
  let response: any = await fetch(process.env.REACT_APP_API_ROOT)
  response = await response.json()
  return response
}
