import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const handleCategories = (value) => {
    const cat = categories.filter(v => v !== value)
    setCategories([value, ...cat])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ (value) => handleCategories(value) }
      />
      { categories.map(category => <GifGrid key={ category } category={ category } />) }
    </>
  )
}
