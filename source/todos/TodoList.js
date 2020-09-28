import React, { useEffect }       from 'react';
import { connect }  from 'react-redux';
import TodoListForm from './TodoListForm';
import TodoListItem from './TodoListItem'; 
import { loadTodos, removeTodoRequest }    from './thunk'
import './TodoList.css'; 

import { completedTodo, loadTodosSuccess }  from './actions'; 
// import { removedTodo, completedTodo, loadTodosSuccess }  from './actions'; 

const TodoList = ({todos = [], onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    const loadingMessage = <div><h2> Loading content ... </h2></div>;
        useEffect(()=> {
            startLoadingTodos
        }, []);

    const content = (
        <div className="todo-wrapper">
            <TodoListForm />
            {todos.map( todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed}/>)}
        </div>
    );
    return isLoading ? loadTodosSuccess : content;
    
    };

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    // onRemovedPressed : text => dispatch(removedTodo(text)),
    onRemovedPressed : id => dispatch(removeTodoRequest(id)),
    onCompletedPressed : text => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);