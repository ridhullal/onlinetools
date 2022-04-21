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

    const handleRadioChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="page-wrap">
            <div className="page-container">
                <h1 className="home-title">{location.state.tool}</h1>
                <div className="flex-cont tool-cont mt-8 p-4">
                    <div className="tool-row-cont full-width flex-cont justify-start my-4 flex-wrap md:order-1">
                        <p className="text-darkGrey mx-md:w-full mx-md:mb-2">Select the Input type: </p>
                        <label className="radio-select flex-cont">
                            <input 
                                name="tool-input-select" 
                                type="radio" 
                                onChange={(e) => handleRadioChange(e)}
                                value="url"
                            />
                            <span>URL</span>                    
                        </label>
                        <label className="radio-select flex-cont">
                            <input 
                                name="tool-input-select" 
                                type="radio"
                                onChange={(e) => handleRadioChange(e)}
                                value="page-link"
                            />
                            <span>Page Link</span>                    
                        </label>
                        <label className="radio-select flex-cont">
                            <input 
                                name="tool-input-select" 
                                type="radio"
                                onChange={(e) => handleRadioChange(e)}
                                value="text"
                            />
                            <span>Text</span>                    
                        </label>
                    </div>
                    <div className="textarea-cont tool-row-cont md:order-2" id="enteredText">
                        <Textarea 
                            color="lightBlue"
                            size="regular"
                            outline={true}
                            placeholder="Place the Text"
                        />
                        
                    </div>
                    <div className="tool-row-cont md:order-4 my-4" id="rangeSelect">
                        <label className="text-darkGrey">Select how much to be reduced:</label>
                        <Slider
                            aria-label=""
                            defaultValue={50}
                            valueLabelFormat={valuetext}
                            step={1}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className="flex flex-col md:items-start md:order-6 tool-row-cont my-2 mx-md:mb-4">
                        <button className="def-btn dark-blue" onClick={() => convertTextHandler()}>Convert Text</button>
                    </div>
                    <div className="textarea-cont tool-row-cont md:order-3" id="renderedText">
                        <Textarea 
                            size="regular"
                            outline={true}
                            placeholder="Rendered Text"
                            value={paraText}
                            success='de'
                        />
                    </div>
                    <div className="flex flex-col md:items-end md:order-5 tool-row-cont my-4">
                        <button className="def-btn dark-blue" onClick={() => copyClickHandler()}>Copy to Clipboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolDetail;