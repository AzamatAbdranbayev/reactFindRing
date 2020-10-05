import React from "react";
import "./Boxes.css";
import Box from "../Box/Box";

const Boxes = props => {
    return (
        <div className="Boxes">
            {props.stateNow.map((element,index) => {
                return (
                    <Box  
                        key={index} 
                        status={element.status} 
                        counterTries={props.counterTries}
                        statusWin = {props.statusWin}
                        changeStatusWin = {props.changeStatusWin}/>
                )
            })}
        </div>
    )
}
export default Boxes;
