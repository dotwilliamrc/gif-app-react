import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleImages = async () => {
    const imgn = await getGifs(category)
    setImages(imgn)
    setIsLoading(false)
  }

  useEffect(() => {
    handleImages()
  }, [])

  return {
    images,
    // isLoading: isLoading
    isLoading
  }
}
