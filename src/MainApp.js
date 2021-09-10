import React from "react";
import { ExpenseForm } from "./components/expenses/ExpenseForm";
import { ExpenseItems } from "./components/expenses/ExpenseItems";
import "./MainApp.css";


export class MainApp extends React.Component{

     expenseFormSaveHandler(inputObject){
         console.log("form handler");
         console.log(inputObject);
       return null;
    }

    render()
    {
        return (
            <div className="container">
            <ExpenseForm saveData={this.expenseFormSaveHandler}/>
            <ExpenseItems/>
            </div>
        );
    }
}
