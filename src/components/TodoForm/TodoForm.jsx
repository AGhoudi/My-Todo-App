import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: '' });
        }
    }

    return (
        <form  className="taskbox" onSubmit={handleSubmit}>
            <input
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange} 
                type="text"
                className="textTask" 
                placeholder="Your Task"
            />
            <button type="submit"   className="addTask"><span className="green">&#10010;</span> Add a Task</button>
        </form>
    );
}

export default TodoForm;