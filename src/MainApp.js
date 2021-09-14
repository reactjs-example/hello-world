import React from "react";
import { ExpenseForm } from "./components/expenses/ExpenseForm";
import { ExpenseItems } from "./components/expenses/ExpenseItems";
import "./MainApp.css";

import { ExpenseItemsClient } from "./components/expenses/ExpenseItemsManager";

export class MainApp extends React.Component{

     expenseFormSaveHandler(inputObject){
         console.log("form handler");
         console.log(inputObject);
       return null;
    }


    

    render()
    {

        const items = new ExpenseItemsClient().getItems();
        return (
            <div className="container">
            <ExpenseForm saveData={this.expenseFormSaveHandler}/>
            <ExpenseItems items={items}/>
            </div>
        );
    }
}
