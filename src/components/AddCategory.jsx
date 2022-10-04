import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length > 1) {
      onNewCategory(inputValue.trim().toUpperCase())
      setInputValue('')
    }
    // setCategories(categories => [...categories, inputValue])
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="buscar Gifs"
        value={ inputValue }
        onChange={ (event) => handleInputValue(event) }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func
}
