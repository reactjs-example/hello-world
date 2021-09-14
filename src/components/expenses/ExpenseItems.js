import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseItem } from "./ExpenseItem";


export class ExpenseItems extends React.Component {

    constructor(props) {
        super(props);
    }

    render_1() {
        var expenseItems = [];
       
        var dataItems = this.props.items;
        for (let item of dataItems) {
            expenseItems.push(<ExpenseItem key={item.title} date={item.date} title={item.title} amount={item.amount} />)
        }
        return expenseItems;
    }

    render() {
       
        return <div>
            {this.props.items.map(item=>
                <ExpenseItem key={item.title} date={item.date} title={item.title} amount={item.amount} />
            )}
        </div>
    }
}