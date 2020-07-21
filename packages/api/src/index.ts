import axios from 'axios'

interface data {
  name: null
  country: null
  ip: null
}
export async function callApi(): Promise<data> {
  const response = await axios.request(process.env.REACT_APP_API_ROOT)
  return response.data
}
