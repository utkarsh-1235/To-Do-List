import Todo from "../ToDo/ToDo.jsx";

function ToDoList(){
    const list = [
        { id: 1, todoData: 'ToDo1'},
        {id: 2, todoData: 'ToDo2'}
    ]
    
  return(
    <div>
    {list.length>0 && list.map(todo=> <Todo key={todo.id} todoData={todo.todoData}/>)}
    </div>
  )
}

export default ToDoList;