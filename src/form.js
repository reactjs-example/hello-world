import { Component } from "react";
import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

     
        alert('A name was submitted: ' + this.state.value);

       
        event.preventDefault();
    }

    //     render() {
    //       return (
    //         <form onSubmit={this.handleSubmit}>
    //           <label>
    //             Name:
    //             <input type="text" value={this.state.value} onChange={this.handleChange} />
    //           </label>
    //           <input type="submit" value="Submit" />
    //         </form>
    //       );
    //     }
    //   }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
                    {/* <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}

                    <select name="cars" id="cars" multiple onChange={this.handleChange}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm