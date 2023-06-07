import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Application() {
    const [taskList, setTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        let task = document.getElementById('task').value;
        document.getElementById('task').value = '';
        task = task.replace(/(<([^>]+)>)/ig, ''); // sanitize input -> remove html tags
        if (task.trim()) {
            setTasks([...taskList, { taskItem: task.trim(), done: false }]);
        }
    }

    const deleteTask = (e) => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].taskItem === e.target.parentElement.parentElement.firstChild.lastChild.innerText) {
                taskList.splice(i, 1);
                break;
            }
        }
        setTasks([...taskList]);
    }

    const editTask = (e) => {
        let newTask = prompt('Enter new task');
        newTask = newTask.replace(/(<([^>]+)>)/ig, ''); // sanitize input -> remove html tags
        if (newTask.trim()) {
            for (let i = 0; i < taskList.length; i++) {
                if (taskList[i].taskItem === e.target.parentElement.parentElement.firstChild.lastChild.innerText) {
                    taskList[i].taskItem = newTask.trim();
                    break;
                }
            }
            setTasks([...taskList]);
        }
    }

    const toggleStatus = (e) => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].taskItem === e.currentTarget.lastChild.innerText) {
                taskList[i].done = !taskList[i].done;
                break;
            }
        }
        setTasks([...taskList]);
    }

    return (
        <div className="container">
            <form className="form">
                <label htmlFor="task">Enter Task</label>
                <input type="text" id='task' />
                <input type='submit' value="add" onClick={addTask} />
            </form>
            <div className="tasks">
                {taskList.map((task, index) => (
                    <div className="task" key={index}>
                        <div onClick={toggleStatus}>
                            <input type="checkbox" className="option-input checkbox" onChange={()=>{}} checked={task.done} />
                            <label style={task.done ? { textDecoration: 'line-through', color: 'var(--dark-75)' } : {}}>
                                {task.taskItem}
                            </label>
                        </div>
                        <div className='btns'>
                            <button className="edit" onClick={editTask}>Edit</button>
                            <button className="delete" onClick={deleteTask}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Application.propTypes = {}

export default Application;