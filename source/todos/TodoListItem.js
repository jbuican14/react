import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovedPressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <p>{ todo.text }</p>
        {console.log(todo)}
        <div className="buttons-container">
            {todo.isCompleted 
                ? null 
                : <button 
                    className="completed-button"
                    onClick={ ()=> onCompletedPressed(todo.text)}
                    > ✔️ </button>
            }
            <button 
            className="removed-button"
            onClick={ ()=> onRemovedPressed(todo.text)}
            > ❌ </button>
        </div>
    </div>
);

export default TodoListItem;