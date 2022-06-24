export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const DELETE_TODO = "DELETE_TODO";

const addTodo = (payload) =>{
    return{
        type: ADD_TODO,
        payload:payload,
       
    }
   
}
const toggleStatus = (payload)=>{
   return{
       type: TOGGLE_STATUS,
       payload
   }
}
const deleteTodo = (payload) =>{
   return{
       type: DELETE_TODO,
       payload
   }
}

export {addTodo,toggleStatus,deleteTodo}