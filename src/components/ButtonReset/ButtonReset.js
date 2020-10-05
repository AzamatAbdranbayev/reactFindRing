import React from "react";
import "./ButtonReset.css";

const ButtonReset= props => {
    return (
        <button className="button__reset" onClick={props.onclick}>Reset</button>
    )
}
export default ButtonReset;