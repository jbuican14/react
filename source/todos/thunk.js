import { createTodo, removedTodo, loadTodosInProgress, 
        loadTodosSuccess, loadTodosFailure, markCompleted} from './actions';

export const loadTodos = () => async(dispatch, getState) => {
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        console.log('[thunk.js]>>>');
        console.log(todos); 
        dispatch( loadTodosSuccess(todos));
    }
    catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodosRequest = text => async dispatch => {
    try{
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        body,
    });
        const todo = await response.json();
        dispatch(createTodo(todo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try{
        console.log(id); 
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removeTodo = await response.json();
        dispatch(removedTodo(removeTodo)); 
        
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const markCompleteRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const todoToComplete = await response.json();
        dispatch(markCompleted(todoToComplete)); 

    }catch(e){
        dispatch(displayAlert(e)); 
    }
}

export const displayAlert = (text) => () => {
    alert(text); 
}