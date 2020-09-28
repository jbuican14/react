import { createTodo, removedTodo, loadTodosInProgress, 
        loadTodosSuccess, loadTodosFailure} from './actions';

export const loadTodos = () => async(dispatch, getState) => {
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:3005/todos');
        const todos = await response.json();

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
        const response = await fetch('http://localhost:3005/todos', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        body,
    });
        const todo = await response.json();
        dispatch(createTOdo(todo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try{
        const response = await fetch(`http://localhost3005/todos/${id}`, {
            method: 'delete'
        });
        const removedTodo = await response.json();
        dispatch(removedTodo(removedTodo)); 
        
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text) => () => {
    alert(text); 
}