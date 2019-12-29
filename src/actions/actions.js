export const toggleLoading = arg => {
    return {
        type: "TOGGLE_LOADING",
        payload: arg,
    };
};

// export const boundAddText = (text) => dispatch => {
//    return dispatch(addText(text))
// }
export const toggleIsLoading = () => (dispatch, getState) => {
    const { isLoading } = getState();
    dispatch(toggleLoading(!isLoading))
}

// export const toggleIsLoading = () => (dispatch) => dispatch(toggleLoading(true))
