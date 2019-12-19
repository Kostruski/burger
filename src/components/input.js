import React from "react";
import { boundAddText } from "./Actions/actions";
import { connect } from "react-redux";


const mapStateToProps = state => ({ text: state.text });

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
console.log(mapStateToProps);
connect(mapStateToProps, boundAddText)(Input);
