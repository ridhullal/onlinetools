import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Textarea  from "@material-tailwind/react/Textarea";
import { Slider } from "@mui/material";

import './ToolDetail.css';


const ToolDetail = (props) => {
    const location = useLocation();
    const [paraText, setParaText] = useState('');

    const valuetext = (value) => {
        return `${value}%`;
    }
    
    const copyClickHandler = () => {
        const renderedText = document.querySelector('#renderedText textarea').value;
        console.log(renderedText);
    }
    
    const convertTextHandler = () => {
        const text = document.querySelector('#enteredText textarea').value;
        const convertValue = document.querySelector('#rangeSelect input').value;
        setParaText(text);
        console.log(convertValue);
    }

    return (
        <div className="page-wrap">
            <div className="page-container">
                <h1 className="home-title">{location.state.tool}</h1>
                <div className="flex-cont tool-cont mt-8 p-4">
                    <div className="textarea-cont tool-row-cont mx-md:order-1" id="enteredText">
                        <Textarea 
                            color="cyan"
                            size="regular"
                            outline={true}
                            placeholder="Place the Text"
                        />
                    </div>
                    <div className="textarea-cont tool-row-cont mx-md:order-3" id="renderedText">
                        <Textarea 
                            size="regular"
                            outline={true}
                            placeholder="Rendered Text"
                            value={paraText}
                            success='de'
                        />
                    </div>
                    <div className="tool-row-cont mx-md:order-2 my-4" id="rangeSelect">
                        <label className="text-darkGrey">Select how much to be reduced:</label>
                        <Slider
                            aria-label=""
                            defaultValue={50}
                            valueLabelFormat={valuetext}
                            step={1}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className="flex flex-col items-end mx-md:order-4 tool-row-cont my-4">
                        <button className="def-btn mb-2" onClick={() => convertTextHandler()}>Convert Text</button>
                        <button className="def-btn" onClick={() => copyClickHandler()}>Copy to Clipboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolDetail;