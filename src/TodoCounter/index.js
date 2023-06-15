import React from 'react'
import './TodoCounter.css'
import { TodoContex } from '../context';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContex);
  return (
    <h1 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} TODOS.
    </h1>
  )
}

export default TodoCounter;