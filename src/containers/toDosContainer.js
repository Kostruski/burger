import React, { useEffect } from "react";
import ToDosDisplay from "../componets/toDosDisplay";
import Loader from "../componets/loader";
import { fetchToDosToState, toggleIsLoadingToState } from "../actions/actions";
import { connect } from "react-redux";

const ToDosContainer = ({ todos, isLoading, fetchToDosToState, toggleIsLoadingToState }) => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                fetchToDosToState(json);
                toggleIsLoadingToState();
            });
    }, []);

    if (isLoading) {
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
