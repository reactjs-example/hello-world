const { render } = require("@testing-library/react");
const { Component } = require("react");

class AppCon extends Component{
constructor(props){
  super(props);
  this.state={
    islogin:false
  }
}

  render() {
    //if is login is false then nothing will be showen
return(
  this.state.islogin && <div>Hello Sarita</div>
);


// return (
//   this.state.islogin? <div>Hello Sarita</div>:<div>Hello Guest</div>
// );


// let message
// if (this.state.islogin) {
//   message=<div>Hello Sarita</div>
// }
// else{
//   message=<div>Hello Guest</div>
// }
// return message

// if(this.state.islogin){
//   return(<div>Hello Sarita</div>);
// }
// else{
//   return(<div>Hello guest</div>);
// }

  //   return (
  //    <div> 
  //   <div>Hello Sarita</div>
  //   <div>Hello Guest</div>
  //   </div>
  //   );
   }

}
export default AppCon