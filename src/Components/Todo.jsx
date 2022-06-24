import React from 'react'
import {Link} from "react-router-dom"
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/todos">Item</Link>
    </div>
  )
}

export default Todo