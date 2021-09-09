import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseItem } from "./ExpenseItem";
import { ExpenseItemsClient } from "./ExpenseItemsManager";


export class ExpenseItems extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var expenseItems = [];
       
        var dataItems = new ExpenseItemsClient().getItems();
        for (let item of dataItems) {
            expenseItems.push(<ExpenseItem key={item.title} date={item.date} title={item.title} amount={item.amount} />)
        }
        return expenseItems;
    }
}