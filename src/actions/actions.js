const addTodos = todos => ({
    type: 'ADD_TODOS',
    payload: todos,
});

const addUsers = users => ({
    type: 'ADD_USERS',
    payload: users,
});

const addPosts = posts => ({
    type: 'ADD_POSTS',
    payload: posts,
});

const addError = error => ({
    type: 'ADD_ERROR',
    payload: error,
});

export const addTodosDispatch = todos => dispatch => dispatch(addTodos(todos));
export const addErrorDispatch = error => dispatch => dispatch(addError(error));
