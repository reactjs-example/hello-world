import { render } from "@testing-library/react";

function NumberList(props){
    // const numbers = props.numbers;//[1, 2, 3, 4, 5];

    // //const doubled = numbers.map((number) => number * 2);
    // //return (doubled);
    
    // const listItems= numbers.map((number,i)=>{return <li key>={number} - {i}</li>});
    // console.log(listItems);
    // return <ul>{listItems}</ul>;
    //return listItems;
    
    //key-you can use the input data id as key or you can use the index(i) as a key.
    const numbers = props.numbers;
    const listItems = numbers.map((number,i) =>
      <li key={number}>
        {number} - {i}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );

}
 
export default NumberList
