import { useState } from "react";
import AddTodo from './Components/AddTodo/AddTodo.jsx'
import ToDoList from './Components/ToDoList/ToDoList.jsx'
import TodoContext from "./Context/todoContext.jsx";
function App() {
  const {list, setList} = useState([{id: 1, todoData: 'ToDo1',finished: false},
  {id: 2, todoData: 'ToDo2', finished: true}])

  return(
    <TodoContext.Provider value={{list, setList}}>

        <AddTodo updateList={(todo)=>setList([...list, {id: list.length+1,todoData: todo, finished: false}])}/>
        <ToDoList list={list} updateList={setList}/>      
    </TodoContext.Provider>
  )
}

export default App
