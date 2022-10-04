import { render, container } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Esta es una prueba de la prueda', () => {
  test('primera prueba', () => {
    render(<GifExpertApp />)

    expect(container).toMatchSnapshot()
  })
})
