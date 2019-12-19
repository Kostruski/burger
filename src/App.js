import React, { useState } from "react";
import { boundAddText } from "./Actions/actions";
import { connect } from "react-redux";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Input />
        </div>
    );
}

export default App;

const Input = props => {
    // const [inputText, setText] = useState("");

    const removeChar = index => {
        const text = props.text.split("");
        text.splice(index, 1);
        console.log(text.join(""), index);
        // setText(text.join(""));
        boundAddText(text.join(""));
    };

    return (
        <>
            <input type="text" value={props.text} name="testInput" id="01" onChange={event => boundAddText(event.target.value)} />
            <h1>{props.text}</h1>
            <h2>{props.text.length}</h2>
            <Validation length={props.text.length} />
            {props.text.split("").map((el, i) => (
                <Char char={el} key={el + i} clickHandler={() => removeChar(i)} />
            ))}
        </>
    );
};

const mapStateToProps = state => ({ text: state.text });
connect(mapStateToProps, boundAddText)(Input);

const Validation = props => {
    let validationText = "";

    if (props.length > 4 && props.length <= 9) {
        validationText = "ok";
    } else if (props.length > 9) {
        validationText = "text to long";
    } else {
        validationText = "text to short";
    }
    return <h1>{validationText}</h1>;
};

const Char = props => {
    const style = {
        padding: "16px",
        border: "1px solid red",
        margin: "16px",
        display: "inline-block",
    };
    return (
        <div onClick={props.clickHandler} style={style}>
            {props.char}
        </div>
    );
};
