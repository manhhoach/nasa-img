import type QueryParameter from "./interfaces/queryParameter";
const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL


export default async function getImages(params: QueryParameter) {
   const query = new URLSearchParams(
      Object.entries(params).reduce((acc, [k, v]) => {
         if (v) {
            acc[k] = String(v)
         }
         return acc
      }, {
         api_key: VITE_API_KEY
      } as Record<string, string>)
   )
   const data = await fetch(`${VITE_BASE_URL}/planetary/apod?${query.toString()}`)
   if (!data.ok) throw new Error('Fetch failed')
   const result = await data.json()
   console.log(result)
}