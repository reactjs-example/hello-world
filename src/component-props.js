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

  function extractComponent(){

    return(
        <div>
            <Welcome name="John 1"/>
            {/* <div>
                <Welcome name="John 2"/>  */}
                <John2/>
                 {/* <div>
                    <Welcome name="John 3"/> 
                </div>   */}
                <John3/>
            {/* </div> */}
        </div>
    )
  }
  

  function John3(){
      return <h1>"Welcome john3"</h1>
  }

  function John2(){
    return <h1>"Welcome john2"</h1>
}

// function App1()
// {
//     return (
//         <div>
//             <Welcome name="John 1"/>
            
//             <Welcome name="John 2"/>
            
//             <Welcome name="John 3"/>
//         </div>
//     );
// }

export default extractComponent