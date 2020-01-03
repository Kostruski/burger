
const getPosts = posts => ({
    type: 'GET_POSTS',
    payload: posts,
});

const addError = error => ({
    type: 'ADD_ERROR',
    payload: error,
});

const addPostTitle = text => ({
    type: 'ADD_POST_TITLE',
    payload: text,
});

const addPostId = id => ({
    type: 'ADD_POST_ID',
    payload: id,
});

export const getPostsDispatch = posts => dispatch => dispatch(getPosts(posts));
export const addErrorDispatch = error => dispatch => dispatch(addError(error));
export const addPostTitleDispatch = text => dispatch => dispatch(addPostTitle(text));
export const addPostIdDispatch = id => dispatch => dispatch(addPostId(id))
