import { useState } from "react";

function AddTodo({updateList}){
    const [inputText, setinputText] = useState('');
    const handleAddTodo = ()=>{
        if(inputText.trim !== ''){
            updateList(inputText)
            setinputText('')
        }
    }
    return(
        <div>
            <input 
            type="text" 
            value={inputText}
            placeholder="Add your next todo"
            onChange={e=>setinputText(e.target.value)}/>
            <button onClick={handleAddTodo}> Add</button>
        </div>
    )
}
export default AddTodo;