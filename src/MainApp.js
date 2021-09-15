import React, { useState } from "react";
import { ExpenseForm } from "./components/expenses/ExpenseForm";
import { ExpenseItems } from "./components/expenses/ExpenseItems";
import "./MainApp.css";

import { ExpenseItemsClient } from "./components/expenses/ExpenseItemsManager";





export function MainApp() {


    function expenseFormSaveHandler(inputObject) {
        console.log("form handler");
        console.log(inputObject);
        addItem(prevState => {
            return [inputObject, ...prevState];
        })
        // return null;
    }



    const intialItems = new ExpenseItemsClient().getItems();
    const [items, addItem] = useState(intialItems);
    //  const items = new ExpenseItemsClient().getItems();
    return (
        <div className="container">
            <ExpenseForm saveData={expenseFormSaveHandler} />
            <ExpenseItems items={items} />
        </div>
    );

}
