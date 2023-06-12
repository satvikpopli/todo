export default function Tasks({toggleStatus, update, editTask, deleteTask, editingStatus, taskList}) {
    return (
        <div className="tasks">
            {taskList.map((taskObj, index) => (
                <div className="task" key={index}>
                    <div onClick={() => toggleStatus(index)}>
                        <input type="checkbox" className="option-input" onChange={() => {}} checked={taskObj.done ? true : false} />
                        <input type="text" id={index} onChange={(e) => { update(e.target.value, index) }} value={taskObj.taskItem} disabled={editingStatus === index ? false : true} />
                    </div>
                    <div className='btns'>
                        <button className="edit" onClick={() => editTask(index)}> {editingStatus === index ? 'Save' : 'Edit'} </button>
                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}