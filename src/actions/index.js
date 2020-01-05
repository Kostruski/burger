import {api as apiConst } from "../utils"

const addPosts = posts => ({
    type: 'ADD_POSTS',
    payload: posts,
});

const addError = error => ({
    type: 'ADD_ERROR',
    payload: error,
});

const toggleLoading = loading => ({
    type: 'TOGGLE_LOADING',
    payload: loading,
});

export const ajaxCall = (api, options) => async dispatch => {
    dispatch(toggleLoading(true));
  
    try {
        const response = await fetch(api, options);
        if (!response.ok) {
            throw { status: response.status, text: response.statusText };
        }
        const json = await response.json();
        if (!options || options.method === "GET") { dispatch(addPosts(json)) }
        else {
            const response = await fetch(apiConst);
            const json = await response.json();
            dispatch(addPosts(json));
        }
    } catch (error) {
        console.log(error);
        dispatch(addError(error));
    }
    dispatch(toggleLoading(false));
};

export const clearError = () => dispatch => {
    dispatch(addError(''));
};
