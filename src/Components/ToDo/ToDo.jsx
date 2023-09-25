import { useState } from "react"

function Todo({todoData, isFinished, changeFinished}){
    const [Finished, setFinished] = useState(isFinished);
 return (
    <div>
        <input type="checkbox" checked={Finished} onChange={(e)=>{
                                                                    setFinished(e.target.checked)
                                                                   changeFinished(e.target.checked)
                                                                  } }/>
        {todoData}
        <button>Edit</button>
        <button>Delete</button>
    </div>
 )
}
export default  Todo;