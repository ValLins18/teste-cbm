import React from "react";
import './Buttons.css';

export default props => {
    return (
        <button {...props}>{props.label}</button>
    )
}