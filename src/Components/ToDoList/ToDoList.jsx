import { useState } from "react";
import Todo from "../ToDo/ToDo.jsx";
import todoContext from "../../Context/todoContext.jsx";

function ToDoList(){
    const [list, setList] = useState(todoContext)
        
    return(
    <>
    {list.length>0 && list.map((todo)=> <Todo key={todo.id} 
                                            todoData={todo.todoData} 
                                            isFinished={todo.finished} 
                                            changeFinished={isFinished=>{
                                           const updatedList = list.map((t)=> {
                                                       if(t.id == todo.id){
                                                          todo.finished = isFinished
                                                            }
                                                                return t})

                                                      setList(updatedList)
                                                  }}                          
                                              onDelete={()=>{const updatedList = list.filter(t=> t.id != todo.id)
                                                       setList(updatedList)}}
                                              />)}
    </>
  )
}

export default ToDoList;