const initialState = {
    todos: [],
    isLoading: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ToDos":
            return { ...state, todos: action.payload };

        case "IsLoading":
            return {...state, isLoading: action.payload}

        default:
            return state;
    }
};
