import React from "react";

function Button(props) {
    // const { label } = props;
    return (
        <button>{props.children}</button>
    );
}

Button.defaultProps = {
    label: 'Enter button label'
}
export default Button;