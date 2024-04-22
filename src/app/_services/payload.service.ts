export const payloadService = async (url: string, init?: RequestInit) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`
  const fetchUrl = baseUrl + url

  try {
    const res = await fetch(fetchUrl, init)
    const data = await res.json()
    if(!res.ok){

        return Promise.reject(data)
    }
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
