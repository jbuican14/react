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