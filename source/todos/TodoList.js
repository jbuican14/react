import React        from 'react';
import { connect }  from 'react-redux';
import TodoListForm from './TodoListForm';
import TodoListItem from './TodoListItem'; 
import './TodoList.css'; 

import { removedTodo, completedTodo }  from './actions'; 

const TodoList = ({todos = [], onRemovedPressed, onCompletedPressed}) => (
    <div className="todo-wrapper">
        <TodoListForm />
        {todos.map( todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onRemovedPressed : text => dispatch(removedTodo(text)),
    onCompletedPressed : text => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);