import React from 'react'
import { addTodo } from "../Redux/Action"
import { useDispatch } from 'react-redux'

const TodoInput = () => {
  const [inputValue, setInputValue] = React.useState("")
  const dispatch = useDispatch();

  const HandleAdd = () => {
    const payload = {
      title: inputValue,
      status: false,
    }
    
      fetch(`http://localhost:8080/todos`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "appliction/json"
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
    
  }
  
  return (
    <div>
      <input type="text" placeholder='Enter Todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={HandleAdd}>ADD TODO</button>
    </div>
  )
}

export default TodoInput