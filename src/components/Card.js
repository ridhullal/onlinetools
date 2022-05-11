import React from "react";
import { useNavigate } from "react-router-dom";


import './Card.css'


const Card = (props) => {
    let navigate = useNavigate();

    const onCardClickHandler = (toolName) => {
        navigate('/tool-detail',{state:{tool: toolName}});
    }

    return (
        <div className="card" id={props.classname} onClick={()=> onCardClickHandler(props.toolName)}>
        </div>    
    )
}

export default Card;