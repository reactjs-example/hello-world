import React, { useState } from "react";


export function ExpenseItem(props) {

    // useState can only be used with function component, not with class component

    ///    let title = this.props.title;
    const [title, updateTitle] = useState(props.title);
    const onClickHandler = () => {
        updateTitle("update value");
        console.log(title)
    }
    return (
        <div>
            <h3>{title}</h3>
            <h4>{props.date}</h4>
            <h4>${props.amount}</h4>
            <button onClick={onClickHandler}>Update</button>
        </div>
    );

}