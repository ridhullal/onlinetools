import React from "react"
import { Link } from "react-router-dom"

import './Card.css'

const Card = (props) => {
    return (
        <Link to={props.cardLink}>
            <div className="card"></div>    
        </Link>
    )
}

export default Card;