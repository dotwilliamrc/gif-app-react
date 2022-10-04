export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SRam9HP8Njt3NLG3satyOvAZRN9AXaJT&q=${category}&limit=5`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))
  return gifs
}
