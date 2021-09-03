import React from "react";

const Container=(props)=>{


    return <h1> My message in Container {props.message}</h1>

}

function MyContainer(props)
{
    return (
    <diV>
    <Container message={props.message}/>    
    <h1> My message in MyContainer {props.message}</h1>
    </diV>
    );
}


// doubt
class Welcome extends React.Component {
    render() {
      return <h1>Hello Welcome, {this.props.name}</h1>;
    }
  }

  function App()
  {
      return (
          <div>
              <Welcome name="John 1"/>
              
              <Welcome name="John 2"/>
              
              <Welcome name="John 3"/>
          </div>
      );
  }
  
export default App