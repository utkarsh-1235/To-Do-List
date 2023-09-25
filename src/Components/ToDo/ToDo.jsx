function Todo({todoData, isFinished}){
 return (
    <div>
        <input type="checkbox" checked={isFinished} onChange={(e)=>console.log(e.target.value)}/>
        {todoData}
        <button>Edit</button>
        <button>Delete</button>
    </div>
 )
}
export default  Todo;