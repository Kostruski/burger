import React from "react";
import GetPosts from './containers/getPosts'
import AddPost from './containers/adPost'
import "./App.scss";

function App() {
    return <div className="App">
        <AddPost />
        <GetPosts />
    </div>;
}

export default App;
