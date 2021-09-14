
import { useState } from "react";
export function ExpenseForm(props) {

    const expenseFormHandler = (event) => {
        event.preventDefault(); // to restrict page reload onSubmit of form
        console.log(inputDataObject);
        props.saveData(inputDataObject);
    }

     /** single state with spread operator */
     const [inputDataObject,setInputData] = useState({
        title:'',
        amount:'',
        date:''
    });


    /** multiple states */
    const [title, updateTitle] = useState('');
    const [amount, updateAmount] = useState('');
    const [date, updateDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        updateTitle(event.target.value); // multiState
       // setInputData({...inputDataObject,title:event.target.value}); // singleState
     
        /** dont do below
         * This will override the object state and will retain only title field
         */
       // setInputData({title:event.target.value}); 

       // use prevState rather depending on object. react takes care of prevState
       setInputData((prevState)=>{
           return {...prevState,title:event.target.value}; // singleState
       })
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        updateDate(event.target.value);
        setInputData({...inputDataObject,date:event.target.value});
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        updateAmount(event.target.value);
        setInputData({...inputDataObject,amount:event.target.value});
    };


    const clearInputDataObjectHandler=()=>{
        setInputData({title:'',
        amount:'',
        date:''});
    }

    return (
        <div>
            {title} | {amount} | {date}
            <br/>
            {inputDataObject.title} | {inputDataObject.amount} | {inputDataObject.date}
            <form onSubmit={expenseFormHandler}>
                <div className="form-control">
                    <label>Title</label>
                    <input value={inputDataObject.title} type="text" onChange={titleChangeHandler} />
                </div>

                <div className="form-control">
                    <label>Amount</label>  <input value={inputDataObject.amount} type="number" onChange={amountChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Date</label>  <input value={inputDataObject.date} type="date" onChange={dateChangeHandler} />
                </div>
                <button type="submit">Submit</button>
                <button onClick={clearInputDataObjectHandler}>Clear</button>
            </form>
        </div>
    );
}