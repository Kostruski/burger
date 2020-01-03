const initialState = {
    error: '',
};

const error = (state = initialState, action) => {
    if (action.type === 'ADD_ERROR') {
        return { ...state, error: action.payload };
    } else {
        return state;
    }
};

export default error;
