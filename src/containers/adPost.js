import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ajaxCall, clearError } from '../actions';
import { api } from '../utils';

const AddPost = ({ ajaxCall }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const postBody = { title, content }
    
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(postBody), // body data type must match "Content-Type" header
    };

    return (
        <div className="get-posts">
            <input type="text" name="title" placeholder="add title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" name="content" placeholder="add content" value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={() => {
                ajaxCall(api, options);
                setTitle("");
                setContent("");
            }}>Dodaj post</button>
        </div>
    );
};

const mapState = state => ({ posts: state.posts, error: state.error, isLoading: state.isLoading });

export default connect(mapState, { ajaxCall, clearError })(AddPost);
