import React from "react";
import { ExpenseItem } from "./ExpenseItem";


export class ExpenseItemList extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const items = [
            {
                title: "Car Insurance 1",
                amount: "295.67",
                date: new Date(2021, 3, 23).toLocaleDateString()
            },
            {
                title: "Car Insurance 2",
                amount: "295.67",
                date: new Date(2021, 3, 23).toLocaleDateString()
            }
        ];

        var expenseItems = [];
        for (let item of items) {
            expenseItems.push(<ExpenseItem date={item.date} title={item.title} amount={item.amount} />)
        }
        return expenseItems;
    }
}