import React from "react";

const dupa = [];

const AwaitCount = () => {
    (async () => {
        try {
            const foo = new Promise((resolve, reject) => {
                const initialValue = 0;
                 setTimeout(() => {
                    console.log("start odliczania, counter =", initialValue);
                    resolve(initialValue);
                }, 5000);
            });

            const nextValue = (await foo) + 1;
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${nextValue}`);
            if (!request.ok) throw "cos nie tak z polaczeniem";

            const response = await request.json();
            console.log(response.title, nextValue);
        } catch (error) {
            console.log(error, "from final catch");
        }
    })();

    return (
        <div>
            <h1>poszlo dalej</h1>
        </div>
    );
};

export default AwaitCount;
