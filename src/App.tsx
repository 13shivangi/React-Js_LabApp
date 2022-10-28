import React from 'react';
import logo from './logo.svg';
import './App.css';
import myStyles from './Style.module.css';
import User from './User';

let footer:any ={marginTop: '400px',marginLeft: '10px',backgroundColor:'blue'}
let navBar:any ={fontSize: '20px',
                  fontFamily: 'cursive',
                  paddingLeft: '15px'}
let design:any={display:'inline'}          
let text:any={display: 'inline',
              fontSize: '40px',
              fontStyle: 'normal'}        

let C1 = () => {
  return (
    <div>
      <div style={design}>
      <img src = {logo} className={myStyles.img}/>
      </div>
        <div style={text}>
          LAB APPLICATION
        </div>
    </div>
)} 

let C2 = () =>{
  return(
    <div style={navBar}>
      <a href ="#">Home | </a>
      <a href ="#">Contact Us</a>
    </div>
  )
}

let C3 =() =>{
  return(
    <div style={footer}>
      <hr/>
      <h5> @ Copyright reserved </h5>
      <hr/>
    </div>
  )
}
function App(){
  return (
    <>
    <C1/>
    <hr/>
    <C2/>
    <hr/>
    <User userName='Shivangi verma' password='shivi' dp='download.png'/>
    <User userName='Swati' password='1234' dp='download.png'/>
    <User userName='Padmaja' password='paddy' dp='download.png'/>
    <C3/>
    <hr/>

  
    </>
  )
}
export default App