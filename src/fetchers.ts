export const fetcherData = async (url: string) => {
  try {
    const rsp = await axios.get(url)
    if (rsp.data.status === 'fail') return [rsp.data, null]
    return [null, rsp.data]
  } catch (error) {
    return [error, null]
  }
}
