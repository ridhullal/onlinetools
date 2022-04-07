import React from "react"
import { Link } from "react-router-dom"

import './Card.css'

const onCardClickHandler = (props) => {
    props.history.push({
        pathname: '/tool-detail'
    });
}

const Card = (props) => {
    return (
        <div className="card" onClick={()=> onCardClickHandler(props)}></div>    
    )
}

export default Card;