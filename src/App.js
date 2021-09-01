import logo from './logo.svg';
import './App.css';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App(props)
{
  console.log(props.message);
  return nestedReactTag();
}
/** NESTED TAG */
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function nestedReactTag()
{
  return (<Greeting isLoggedIn={true} />);
}

/** HANDLER WITH CLICK */
function clickHandler()
{
  console.log("button clicked");
}

function buttonClickEvent()
{
  return (<div>

<button onClick={clickHandler}>Click Me</button>

  </div>);
}

function usingConditionalWithArray()
{
  const ages=[10,11,12,13,14,15]

  return (

    
    <div>
      <table>
      <tr><th>Age</th><th>Type</th></tr>
   
      {
        ages.map(age=>{
          if(age%2 ==0)
          {
            return <tr><td>{age}</td><td>Even</td></tr>
          }
          else{
            return <tr><td>{age}</td><td>Odd</td></tr>
          }
        })
      }
      </table>
    </div>

  );

}

function usingConditionalWithVariable()
{
  const x = 101;

  if(x%2 == 0)
  {
    return <h1>{x} is even</h1>
  }
  else{
    return <h1>{x} is odd</h1>
  }
}

function usingArrayWithHtml1()
{
  let names = ["john","doe","josh"]
  
  return (
    <div><ul>{
      names.map(
        e=> {
         return <li>{e}</li>
        }
    )
    }
    </ul></div>
  );
}
function usingArrayWithHtml()
{
  let names = ["john","doe","josh"]
  let htmlLiTagWrapped = [];
  for(let name of names)
  {
    htmlLiTagWrapped.push(<li>{name}</li>)
  }
  return (
    <div><ul>{htmlLiTagWrapped}</ul></div>
  );
}

function usingArray()
{
  let names = ["john","doe","josh"]
  return (
    <div>{names}</div>
  );
}
function usingVariable()
{
  const x = 10;
  return (
    <div>The value is: {x}</div>
  );
}
function simpleDiv()
{
  return(
    <div>
    <h1>Welcome</h1>
    </div>
  );
}

export default App;
