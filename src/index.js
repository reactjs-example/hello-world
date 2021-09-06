import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyElement from './rendering-element';
import MyContainer from './component-props';
import MyButton from './event-handler';
import Toggle from './toggle';
import { render } from '@testing-library/react';
import LoggingButton from './render';
import { MainApp } from './MainApp';

// ReactDOM.render(
//   <React.StrictMode>
//     <App message="Welcome Message" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// function tick(){
//   console.log("hello");
// ReactDOM.render(<MyElement/>, document.getElementById("root"));
// }

// setInterval(tick,1000);
// ReactDOM.render(<MyContainer name="react is awesome"/>, document.getElementById("root"));
// ReactDOM.render(<MyButton name="click me"/>, document.getElementById("root"));


// ReactDOM.render(<Toggle/>,
//    document.getElementById("root")
//    );

   ReactDOM.render(<MainApp/>,
    document.getElementById("root")
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
