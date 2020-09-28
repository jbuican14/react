export const CREATE_TODO    = 'CREATE_TODO';
export const createTodo     = text => ({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVED_TODO    = 'REMOVED_TODO';
export const removedTodo     = text => ({
    type: REMOVED_TODO,
    payload: {text},
});

export const COMPLETED_TODO    = 'COMPLETED_TODO';
export const completedTodo     = text => ({
    type: COMPLETED_TODO,
    payload: {text},
});

export const LOAD_TODOS_IN_PROGRESS    = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress     = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS    = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess     = () => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE   = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure    = () => ({
    type: LOAD_TODOS_FAILURE,
});