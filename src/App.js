
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from "./Components/Todo"
import TodoInput from './Components/TodoInput';
import TodoItem from './Components/TodoItem';

function App() {
  return (
    <div className="App">
      
      <Todo></Todo>
      <Routes>
        <Route path='/' element={<TodoInput/>}></Route>
        <Route path='/todos' element={<TodoItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
