import { createSelector } from 'reselect'; 

export const getTodos = state => state.todos.data;
export const getTodoLoading = state => state.todos.isLoading;
//export const getTodos = state => state.todos;
//export const getTodoLoading = state => state.isLoading;

//extend more functionality this case this will get (state) arguments and return 
export const getIncompleteList = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted), 
);

export const getCompleteList = createSelector (
    getTodos,
    (todos) => todos.filter(todo=> todo.isCompleted),
);
