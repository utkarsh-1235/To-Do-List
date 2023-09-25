import Todo from "../ToDo/ToDo.jsx";

function ToDoList({list, updateList}){
    
        
    return(
    <div>
    {list.length>0 && list.map((todo)=> <Todo key={todo.id} 
                                            todoData={todo.todoData} 
                                            isFinished={todo.finishedo} 
                                            changeFinished={isFinished=>{
                                           const updatedList = list.map((t)=> {
                                                       if(t.id == todo.id){
                                                          todo.finished = isFinished
                                                            }
                                                                return t})

                                                      updateList(updatedList)
    }}/>)}
    </div>
  )
}

export default ToDoList;