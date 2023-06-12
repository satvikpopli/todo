import { useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [taskList, setTasks] = useState([]);
  const [editingStatus, setEditingStatus] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() && !(taskList.some((task) => (task.taskItem === input.trim())))) {
      setTasks([...taskList, { taskItem: input.trim(), done: false }]);
    }
    setInput('');
  }

  const deleteTask = (id) => {
    taskList.splice(id, 1);
    setTasks([...taskList]);
  }

  const editTask = (id) => {
    editingStatus === id ? setEditingStatus(null) : setEditingStatus(id);
  }

  const update = (updatedTask, id) => {
    taskList[id].taskItem = updatedTask;
    setTasks([...taskList]);
  }

  const toggleStatus = (id) => {
    if (editingStatus !== null) {
      return;
    }
    taskList[id].done = !taskList[id].done;
    setTasks([...taskList]);
  }

  return (
    <>
      <Navbar heading='To Do App' />
      <div className="container">
        <Form placeholder="Start Typing..." addTask={addTask} input={input} setInput={setInput} />
        <Tasks toggleStatus={toggleStatus} update={update} editTask={editTask} deleteTask={deleteTask} editingStatus={editingStatus} taskList={taskList} />
      </div>
    </>
  );
}

export default App;