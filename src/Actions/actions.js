const addText = (text) => {
    return {
        type: 'ADD_TEXT',
        text
    }
}

export const boundAddText = (text) => dispatch => {
   return dispatch(addText(text))
}
