import React from 'react'
import { toggleStatus,deleteTodo } from "../Redux/Action"
import { useSelector, useDispatch } from 'react-redux'

const TodoItem = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((State) => State)
  const HandleToggle = (id) =>{
        dispatch(toggleStatus(id))
  }
  const HandleDelete = (id)=>{
    dispatch(deleteTodo(id))
  }
  return (
    <div>
      {
        todos?.map((todo) => {
          return(
            <div key={todo.id}>
                <p>{todo.title} {"---->"} {todo.status?"Completed":"Not Completed"}</p>
                <button onClick={()=>HandleToggle(todo.id)}>TOGGLE</button>
                <button onClick={()=>HandleDelete(todo.id)}>DELETE</button>
            </div>
        )})
      }
    </div>
  )
}

export default TodoItem