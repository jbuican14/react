import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
// import { createTodo } from './actions';
import { addTodosRequest } from './thunk'; 

import './TodoListForm.css'; 

const TodoListForm = ({ todos, onCreatePressed }) => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className="todo-form">
            <input 
            className="input-new-todo" 
            placeholder="My todo List 💪"
            type="text"
            value={inputVal}
            onChange = {e => setInputVal(e.target.value)} 
            />
            <button 
                onClick = { ()=> {
                    const isDuplicatedTxt = 
                        todos.some(todo=> todo.text === inputVal);
                        if(!isDuplicatedTxt){
                            onCreatePressed(inputVal);
                            setInputVal('');
                        }
                    
                }}
                className="input-new-todo-button"> 
                New Todo 
            </button>
        </div>
        );
};

const mapStateToProps = state => ({
    // todos: state.todos,
    todos: getTodos(state),

});

const mapDispatchToProps = dispatch => ({
    // onCreatePressed : text => dispatch(createTodo(text))
    onCreatePressed : text => dispatch(addTodosRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoListForm);