
import { useState } from "react";
export function ExpenseForm() {

    const expenseFormHandler = () => {
        console.log("here")
    }

    const [title, updateTitle] = useState('');
    const [amount, updateAmount] = useState('');
    const [date, updateDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        updateTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        updateDate(event.target.value);
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        updateAmount(event.target.value);
    };
    return (
        <div>
            {title} | {amount} | {date}
            <form onSubmit={expenseFormHandler}>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="form-control">
                    <label>Amount</label>  <input type="number" onChange={amountChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Date</label>  <input type="date" onChange={dateChangeHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}