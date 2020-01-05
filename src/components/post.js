import React from 'react';

const Post = ({ post, deletePost, updatePost }) => {
    return (
        <div className="post">
            <div>
                <p onClick={() => deletePost(post.id)}> Usuń</p>
                <p onClick={() => updatePost(post.id)}> Modyfikuj</p>
            </div>
            <div className="title">
                <b>{post.title}</b>
            </div>
            <div>{post.content}</div>
        </div>
    );
};

export default Post;
