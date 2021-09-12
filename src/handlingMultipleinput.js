import React from "react"

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
        // this.password = {
        //     psw: ""
        // }

        this.handleSubmit = (event) => {
            console.log("submit")
            event.preventDefault()
            console.log(this.state);

            let emp={'id':10};
            this.props.clickFunc(emp);
            alert(this.state.name + " ho gaya re")
        }

        this.handleChange = (event) => {

            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
        

            this.setState({
                [event.target.name]: value
            });
        }
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                {this.state.name}
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}>
                    </input>
                </label>

                <label>
                    password:
                    <input type="password" name="password" value={this.state.psw} onChange={this.handleChange}>
                    </input>
                </label>

                <label>
                    <input name="terms" onChange={this.handleChange} type="checkbox"/> Accept Terms and Conditions
                </label>

                <input type="submit" value="submit"></input>
            </form>

        );
    }
}

export default Form1