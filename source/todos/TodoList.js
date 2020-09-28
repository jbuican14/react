import React, { useEffect }       from 'react';
import { connect }  from 'react-redux';
import TodoListForm from './TodoListForm';
import TodoListItem from './TodoListItem'; 
import { loadTodos, markCompleteRequest, removeTodoRequest }    from './thunk'
import './TodoList.css'; 

import { getTodo, getTodoLoading, getTodos } from './selectors'; 

import { completedTodo, loadTodosSuccess }  from './actions'; 
// import { removedTodo, completedTodo, loadTodosSuccess }  from './actions'; 

const TodoList = ({todos = [], onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    const loadingMessage = <div><h2> Loading content ... </h2></div>;
        useEffect(()=> {
            startLoadingTodos(); 
        }, []);

    const content = (
        <div className="todo-wrapper">
            <TodoListForm />
            {todos.map( todo => <TodoListItem todo={todo} 
                                onRemovedPressed={onRemovedPressed} 
                                onCompletedPressed={onCompletedPressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
    
    };

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
    // isLoading: getTodoLoading(state),
    // todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
    // onRemovedPressed : text => dispatch(removedTodo(text)),
    startLoadingTodos: ()=> dispatch(loadTodos()),
    onRemovedPressed : id => dispatch(removeTodoRequest(id)),
    onCompletedPressed : id => dispatch(markCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);