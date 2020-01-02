import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodosDispatch, addErrorDispatch } from '../actions/actions';

const FetchAll = ({ todos, addTodosDispatch, addErrorDispatch }) => {
    useEffect(() => {
        (async () => {
            try {
                const reply = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                if(!reply.ok) throw "network error"
                const response = await reply.json();
                addTodosDispatch(response);
            } catch (error) {
                addErrorDispatch(error);
            }
        })();
    }, []);

    return <div></div>;
};

const mapState = state => ({ todos: state.todos, addTodosDispatch: state.addTodosDispatch, addErrorDispatch: state.addErrorDispatch });

export default connect(mapState, { addTodosDispatch, addErrorDispatch })(FetchAll);
