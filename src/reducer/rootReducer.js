const initialState = {
    posts: [],
    users: [],
    todos: [],
    error: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOS':
            return { ...state, todos: action.payload };

        case 'ADD_USERS':
            return { ...state, users: action.payload };

        case 'ADD_POSTS':
            return { ...state, posts: action.payload };

        case 'ADD_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
};

export default rootReducer
