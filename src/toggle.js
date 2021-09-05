import React from "react";


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isToggleOn: true,
          message:"ON"
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(
        currentState=>(
            console.log(currentState),
            {
            isToggleOn:!currentState.isToggleOn,
            message: !this.state.isToggleOn ? "ON" : "OFF"
            }
        )
      );

    }

   render() {
      return (
        <button onClick={this.handleClick}>
          {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
          {this.state.message}
        </button>
      );
    }
  }

  export default Toggle
  