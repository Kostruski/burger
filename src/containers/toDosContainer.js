import React, { useEffect } from "react";
import ToDosDisplay from "../componets/toDosDisplay";
import Loader from "../componets/loader";
import { fetchToDosToState, toggleIsLoadingToState } from "../actions/actions";
import { connect } from "react-redux";

const ToDosContainer = ({ todos, isLoading, fetchToDosToState, toggleIsLoadingToState }) => {
    useEffect(() => {
        toggleIsLoadingToState();
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                if (Object.entries(response) === 0) {
                    alert("network error");
                    return [];
                } else {
                    return response.json();
                }
            })
            .then(json => {
                fetchToDosToState(json);
                toggleIsLoadingToState();
                return "zupa";
            })
            .then(
                string => console.log("moja " + string),
                error => console.log(error, "last then"),
            )
            .catch(er => console.log("catch", er));
    }, [fetchToDosToState, toggleIsLoadingToState]);

    if (!todos.length) {
        return null;
    } else if (isLoading) {
        return (
            <>
                <Loader />
            </>
        );
    } else {
        return (
            <>
                <ToDosDisplay title={todos[0].title} />
            </>
        );
    }
};

const mapProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

export default connect(mapProps, { fetchToDosToState, toggleIsLoadingToState })(ToDosContainer);
