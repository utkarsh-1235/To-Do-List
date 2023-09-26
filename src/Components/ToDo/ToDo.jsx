import { useState } from "react"

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}){
    const [Finished, setFinished] = useState(isFinished);
 return (
    <div>
        <input type="checkbox" checked={Finished} onChange={(e)=>{
                                                                    setFinished(e.target.checked)
                                                                   changeFinished(e.target.checked)
                                                                  } }/>
        {todoData}
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
 )
}
export default  Todo;