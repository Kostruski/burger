const initialState = {
    text: "",
};

export const textReducer = (state = initialState, action) => {
    if (action.type === "ADD_TEXT") {
        return { ...state, text: action.text };
    } else {
        return state;
    }
};


