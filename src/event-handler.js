function MyButton(){
    return <button onClick={click}>
    click me
  </button>
}

function click(){
    console.log("clicked");
}

function MyButtonString(){
    return <button>
        <h1>Welcome john2</h1>
    </button>
}

function Form(){
    console.log("start form")
    return (
    <form onSubmit={MyForm}>
        <button type="submit">Submit</button>
    </form>
)
}

function MyForm (e) {
    e.preventDefault();
    console.log("start myform")
    return 
        <h1>Welcome john2</h1>
    
}


export default Form