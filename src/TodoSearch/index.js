import React from 'react'
import './TodoSearch.css'
import { TodoContex } from '../context';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContex);
  return (
    <input
      className='TodoSearch'
      placeholder='Cortar Cebolla'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export default TodoSearch