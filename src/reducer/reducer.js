const initialState = {
    isLoading: false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_LOADING":
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};
