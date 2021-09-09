

export function ExpenseForm() {

    const expenseFormHandler = () => {
        console.log("here")
    }
    return (
        <div>
            <form onSubmit={expenseFormHandler}>
                <div className="form-control">
                    <label>Title</label> 
                     <input type="text"  />
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