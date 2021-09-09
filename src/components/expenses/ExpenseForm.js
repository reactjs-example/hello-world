

export function ExpenseForm() {

    const expenseFormHandler = () => {
        console.log("here")
    }

    const titleChangeHandler = (event) =>{
        console.log(event.target.value);
    }
    return (
        <div>
            <form onSubmit={expenseFormHandler}>
                <div className="form-control">
                    <label>Title</label> 
                     <input type="text" onChange={titleChangeHandler}  />
                </div>

                <div className="form-control">
                    <label>Amount</label>  <input type="number" />
                </div>
                <div className="form-control">
                    <label>Date</label>  <input type="date" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}