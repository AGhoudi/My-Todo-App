import React from 'react';
import './Todo.css';

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (         
            
            <li 
                
                style= {{
                    color: 'black',
                    textDecoration: todo.completed ? 'line-through' : null
                }}
            ><span className='checkItem' onClick={handleCheckboxClick}>&#10004;</span>{todo.task}<span className='removeItem' onClick={handleRemoveClick}>&#10008;</span></li>
            
               
    );
}

export default Todo;