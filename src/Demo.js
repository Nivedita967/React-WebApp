import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// CLASS COMPONENT METHOD:
// class Demo extends Component{
//     render(){
//         return <div className="main_div">
//             <h1> Hii! {this.props.name} is learning React </h1>
//             <p>and will command on it soon :)</p>
//         </div>
//     }
// }

// FUNCTIONAL COMPONENT METHOD:
// 1.
// const Demo = (props) => {
//     return <div className="main_div">
//                  <h1> Hii! {props.name} is learning React </h1>
//                  <p>and will command on this soon :)</p>
//             </div>
// }

// 2.
 const Demo = ({name}) => {
     return <div className="main_div">
                  <h1> Hii! {name} is learning React </h1>
                  <p>and will command on this soon :)</p>
             </div>
 }


export default Demo;