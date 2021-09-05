import { render } from "@testing-library/react";
import React from "react";


class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    constructor(props) {

        super(props);
        this.state = {
            message: "ON",
            isToggleOn: true
        }

        console.log("OK OK");

    }

    handleClick = () => {
        console.log('this is:', this.state.isToggleOn);
        //this.state={message:"ON"}
        //this.handleClick = this.handleClick.bind(this);
        this.state.isToggleOn = !this.state.isToggleOn
        if (this.state.isToggleOn) {
            console.log("here")
            this.state.message = "ON";
            console.log(this.state)
        }
        else {
            console.log("here")
            this.state.message = "OFF";
            console.log(this.state)
        }
        // this.state.message = this.state.isToggleOn ? "ON" : "OFF"

        //   return render();
        this.forceUpdate();
        /*
         this.setState(currentState => (
             (console.log(currentState),{
                     isToggleOn: !currentState.isToggleOn,
                     message: !this.state.isToggleOn ? "ON" : "OFF"
                 }))
         
         )*/
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.message}
                </button>
            </div>
        );
    }
}

export default LoggingButton