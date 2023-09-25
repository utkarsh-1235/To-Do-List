import { useState } from "react";
import AddTodo from './Components/AddTodo/AddTodo.jsx'
import ToDoList from './Components/ToDoList/ToDoList.jsx'
function App() {
  const [list, setList] = useState ([
    { id: 1, todoData: 'ToDo1'},
    {id: 2, todoData: 'ToDo2'}])

  return (
    <>
        <AddTodo/>
        <ToDoList/>      
    </>
  )
}

export default App
