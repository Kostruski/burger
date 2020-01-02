import React from "react";

const Whiteboard = () => {
    const prom = () => new Promise((resolve, reject) => resolve(0));
    prom()
        .then(res => {
            console.log(res + 1, "wyniki pierwszego promisa");
            return res + 1;
        })
        .then(res1 => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(res1 + 1, "wynik drugiego promisa");
                    resolve(res1 + 1);
                }, 3000);
            });
        })
        .then(res2 => console.log(res2 + 1, "wynik 3 promisa"));
    return <div></div>;
}

export default Whiteboard
