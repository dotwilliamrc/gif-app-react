import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  console.log({ images, isLoading })

  return (
    <>
      <h3>{ category }</h3>
      {
        //isLoading
        // ? (<h2>Cargando...</h2>)
        //  ? <h2>Cargando...</h2>
        //  : null
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        { images.map(image => (
          <GifItem key={ image.id } { ...image } />
        )) }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}