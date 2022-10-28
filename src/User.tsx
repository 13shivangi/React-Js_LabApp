import React from "react";
import './App.css'

let cssAlignLeft={marginLeft:'5px'}
let pwd:any={borderWidth: '0px'}
 export default function User(props:any){
    return(
        <div className="movie">
            <img src={props.dp}/>
            <hr/>
            <strong>Username - {props.userName}</strong>
            <hr/>
            <input type='Password' value={props.password} style={pwd} />

        </div>
    )
}