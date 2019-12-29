import React from "react";
import "./colorBox.scss";
import { connect } from "react-redux";
import { toggleIsLoading} from "../../actions/actions";
function ColorBox({ isLoading, toggleIsLoading }) {
    const dynamicClass = isLoading ? "clickBox red" : "clickBox blue";
    return (
        <div className="container">
            <div className={dynamicClass} onClick={toggleIsLoading}>
                TEXT
            </div>
        </div>
    );
}

const mapState = state => ({ isLoading: state.isLoading });
// const action = dispatch => ({
//     toggleLoading: () => {
//         dispatch(toggleLoading(true))
//     }
// })
   


export default connect(mapState, { toggleIsLoading })(ColorBox);
