import React from "react";
import { ExpenseItem } from "./components/expenses/ExpenseItem";
import { ExpenseItemList } from "./components/expenses/ExpenseItemList";
import "./MainApp.css";


export class MainApp extends React.Component{


    render()
    {
        return (
            <div className="container">
                {/* <ExpenseItem date={new Date(2021,2,23).toLocaleDateString()} title="Car Insurance" amount="294.56"/> */}
            
            <ExpenseItemList/>
            </div>
        );
    }
}