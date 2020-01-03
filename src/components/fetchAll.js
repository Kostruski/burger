import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodosDispatch, addErrorDispatch } from '../actions/actions';

const FetchAll = ({ todos, addTodosDispatch, addErrorDispatch }) => {
    const api = 'https://my-json-server.typicode.com/kostruski/my_json_server/posts';
    useEffect(() => {
        (async () => {
            try {
                const reply = await fetch(api);
                if (!reply.ok) throw 'error';
                const response = await reply.json();
                console.log(response);
                addTodosDispatch(response);
            } catch (error) {
                addErrorDispatch(error);
            }
        })();
    }, [api]);

    return <div></div>;
};

const mapState = state => ({ todos: state.todos, addTodosDispatch: state.addTodosDispatch, addErrorDispatch: state.addErrorDispatch });

export default connect(mapState, { addTodosDispatch, addErrorDispatch })(FetchAll);
