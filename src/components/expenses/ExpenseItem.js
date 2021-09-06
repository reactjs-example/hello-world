import React from "react";


export class ExpenseItem extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.date}</h4>
                <h4>${this.props.amount}</h4>
            </div>
        );
    }
}