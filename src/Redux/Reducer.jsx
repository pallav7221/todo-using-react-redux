import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./Action";

export const reducer = (State={todos:[]},action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...State,
                todos:[...State.todos,action.payload]
            };
        case TOGGLE_STATUS:
            return {
                ...State,
                todos:State.todos.map((todo)=>
                    todo.id===action.payload?{
                    ...todo,
                    status:!todo.status
                    }:todo
                )
            }
        case DELETE_TODO:
            return {
                ...State,
                todos: State.todos.filter((todo)=>todo.id!=action.payload)
            } 
            default :
            return State     
    }
    

} 