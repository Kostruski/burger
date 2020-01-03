import React from 'react';
import { connect } from 'react-redux';
import { addPostTitleDispatch, addPostIdDispatch, getPostsDispatch, addErrorDispatch } from '../actions/actions';

const api = 'https://calm-woodland-46270.herokuapp.com/posts';
const key = '$2b$10$hAa.C8ABvG3jt3Yd8weocunGMata9B8BaLax.laBckJjM6vKMUUvW';

const CrudTest = ({ addPostTitleDispatch, ...args }) => {
    const { postTitle } = args.state.inputValues;

    const addPost = async text => {
        let lastPostId = 0;

        try {
            const response = await fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'secret-key': `${key}`,
                },
            });
            const result = await response.json();
            // const posts = result.posts;
            console.log(result);
            // lastPostId = posts[posts.length - 1].id;
            // const updatedPosts = posts.push({ id: lastPostId + 1, title: text });
            // console.log(updatedPosts);

            // const responseAfterUpdate = await fetch(api, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(updatedPosts),
            // });

            // const resultAfterUpdate = await responseAfterUpdate.json();
            // console.log(resultAfterUpdate);
        } catch (error) {
            addErrorDispatch(error);
            alert(error);
        }
    };

    return (
        <div className="crudBox">
            <input type="text" placeholder="add post title" value={postTitle} onChange={event => addPostTitleDispatch(event.target.value)} />
            <input type="button" value="send post" onClick={() => addPost('dupa')} />
        </div>
    );
};

const mapState = state => ({ state });
const actions = { addPostTitleDispatch, addPostIdDispatch, getPostsDispatch, addErrorDispatch };

export default connect(mapState, actions)(CrudTest);
