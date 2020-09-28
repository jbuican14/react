import { CREATE_TODO, REMOVED_TODO, COMPLETED_TODO,
         LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE
        } from './actions';

export const isLoading = ( state=false, action ) => {
    const { type } = action;

    switch(type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;

        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }

}

export const todos = (state=[], action) => {

    const { type, payload} = action;

    switch (type) {
        case CREATE_TODO : {
            const { todo } = payload;
            return state.concat(todo);
        }

        case REMOVED_TODO : {
            const {todo: todoToRemove} = payload;
            // return state.filter(todo => todo.text !== text );
            console.log(payload, 'reducer.js', todoToRemove.id); 
            return state.filter(todo => todo.id !== todoToRemove.id );
        }

        case COMPLETED_TODO : {
            // const {text} = payload;
            const {todo: todoToComplete} = payload;
            return state.map( todo => {
                if(todo.id === todoToComplete.id) {
                    // return {...todo, isCompleted: true }
                    return todoToComplete;
                }
                return todo;
            } );

        }
         
        //create action for progress, failure and success
        case LOAD_TODOS_SUCCESS : {
            //todo loads from server
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE :         
        default: return state;
        
   
    }

}