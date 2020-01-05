import React from 'react';
import { connect } from 'react-redux';
import { ajaxCall, clearError } from '../actions';
import { api } from '../utils';
import Posts from '../components/post';

const GetPosts = ({ ajaxCall, clearError, posts, error, isLoading }) => {
    const deletePost = id => ajaxCall(`${api}/${id}`, { method: 'DELETE' });
    const updatePost = id => {
        const body = JSON.stringify({ title: 'now zupa' });
        ajaxCall(`${api}/${id}`, {
            method: 'PATCH',
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div className="get-posts">
            <button onClick={() => ajaxCall(api)}>Pobierz</button>
            {isLoading ? <h1>...Loading</h1> : null}
            {posts.length ? posts.map(post => <Posts post={post} deletePost={deletePost} updatePost={updatePost} key={post.id} id={post.id} />) : null}
            {error.status ? (
                <div className="error-box" onClick={clearError}>
                    <h2>{error.status}</h2>
                    <h3>{error.text}</h3>
                </div>
            ) : null}
        </div>
    );
};

const mapState = state => ({ posts: state.posts, error: state.error, isLoading: state.isLoading });

export default connect(mapState, { ajaxCall, clearError })(GetPosts);
