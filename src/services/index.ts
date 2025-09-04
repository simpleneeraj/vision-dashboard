import axios from "axios"

export const fetcher = <T = any>(url: string): Promise<T> =>
  axios.get(url).then((res) => res.data)
