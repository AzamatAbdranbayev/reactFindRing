import React from "react";
import "./Box.css";

const Box = props => {
    const clickBox = (event,status) => {
        if(props.statusWin === false) {    
            props.counterTries("next");
            event.target.style="background:white";
            if(status==="true") {
                event.target.innerHTML= "0";
                alert("Вы нашли, игра закончена, нажмите Reset");       
                props.changeStatusWin(true);
            }  
        }
    }
    return (
        <div className="Box" onClick={(event)=>{clickBox(event,props.status)}}/>
    )
}
export default Box;