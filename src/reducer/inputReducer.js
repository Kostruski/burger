const initialState = {
    postTitle: '',
    postId: '',
};

const inputValues = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST_TITLE':
            return { ...state, postTitle: action.payload };

        case 'ADD_POST_ID':
            return { ...state, postId: action.payload };

        default:
            return state;
    }
};

export default inputValues
