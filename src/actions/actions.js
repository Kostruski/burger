const fetchToDos = todos => {
    return {
        type: 'ToDos',
        payload: todos
    }
}

const toggleIsLoading = isLoading => {
    return {
        type: 'IsLoading',
        payload: isLoading
    }
}

export const fetchToDosToState = todos => dispatch => dispatch(fetchToDos(todos))
export const toggleIsLoadingToState = () => (dispatch, getState) => {
    const { isLoading } = getState()
    dispatch(toggleIsLoading(!isLoading))
}

