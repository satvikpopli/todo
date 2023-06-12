export default function Form({placeholder, addTask, input, setInput}) {
    return (
        <form className="form" onSubmit={addTask}>
            <label htmlFor="task">Enter Task</label>
            <input placeholder={placeholder} type="text" id='task' onChange={(e) => setInput(e.target.value)} value={input} />
            <button type='submit'>Add</button>
        </form>
    )
}