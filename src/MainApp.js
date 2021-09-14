import React from "react";
import { ExpenseForm } from "./components/expenses/ExpenseForm";
import { ExpenseItems } from "./components/expenses/ExpenseItems";
import "./MainApp.css";

import { ExpenseItemsClient } from "./components/expenses/ExpenseItemsManager";

export class MainApp extends React.Component{



    

    render()
    {

        const items = new ExpenseItemsClient().getItems();
        return (
            <div className="container">
            <ExpenseForm/>
            <ExpenseItems items={items}/>
            </div>
        );
    }
}