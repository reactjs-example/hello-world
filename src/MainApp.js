import React from "react";
import { ExpenseForm } from "./components/expenses/ExpenseForm";
import { ExpenseItems } from "./components/expenses/ExpenseItems";
import "./MainApp.css";


export class MainApp extends React.Component{


    render()
    {
        return (
            <div className="container">
            <ExpenseForm/>
            <ExpenseItems/>
            </div>
        );
    }
}