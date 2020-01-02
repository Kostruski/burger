import React from "react";

const AwaitExample = () => {
    (async () => {
        const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        todoResponse.ok ? console.log("udało się") : console.log("network error");
        const todoOne = await todoResponse.json();
        console.log(todoOne);
    })();

    return <div></div>;
};

export default AwaitExample;
