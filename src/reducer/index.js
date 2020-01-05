const initialState = {
    posts: [],
    error: '',
    isLoading: false
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return { ...state, posts: action.payload };

        case 'ADD_ERROR':
            return { ...state, error: action.payload };

        case 'TOGGLE_LOADING':
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
};

export default rootReducer;
