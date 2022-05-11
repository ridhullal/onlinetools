import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Textarea  from "@material-tailwind/react/Textarea";
import { Slider } from "@mui/material";

import './ToolDetail.css';
import { paraPhrase, paraUrl } from "../actions/routeActions";


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
    
    const convertTextHandler = async() => {
        if (document.querySelector('input[name="tool-input-select"]:checked').value == 'text'){
        const text = document.querySelector('#enteredText textarea').value;
        const convertValue = document.querySelector('#rangeSelect input').value;
        const outText = await paraPhrase(text, convertValue);
        setParaText(outText);
        }
        else if (document.querySelector('input[name="tool-input-select"]:checked').value == 'url'){
            const text = document.querySelector('#enteredText textarea').value;
            const convertValue = document.querySelector('#rangeSelect input').value;
            const outText = await paraUrl(text, convertValue);
        setParaText(outText);
        }
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
                                value="text"
                                checked
                            />
                            <span>Text</span>                    
                        </label>
                        {/* <label className="radio-select flex-cont">
                            <input 
                                name="tool-input-select" 
                                type="radio"
                                onChange={(e) => handleRadioChange(e)}
                                value="page-link"
                            />
                            <span>Page Link</span>                    
                        </label> */}
                        <label className="radio-select flex-cont">
                            <input 
                                name="tool-input-select" 
                                type="radio"
                                onChange={(e) => handleRadioChange(e)}
                                value="url"
                            />
                            <span>URL</span>                    
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
                        <button className="def-btn dark-blue" onClick={() => convertTextHandler()}>Summarize</button>
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
                <div className="description">
                    <h2 className="description_heading">How to use text summerizer tool?</h2>
                    <ul className="description_list">
                        <li>Keep the radio button selected in "TEXT" option</li>
                        <li>For text summarizer, copy and paste the text you need to summarize in the text box provided</li>
                        <li>You can select the amount of summary required by using the slider</li>
                        <li>Click on the "SUMMARIZE" button. You will get summary in the right in the other text box provided</li>
                        <li>You can copy the summary into and use it where ever you needed.</li>
                    </ul>
                    <h2 className="description_heading">How to get summary of website?</h2>
                    <ul className="description_list">
                        <li>Keep the radio button selected in "URL" option</li>
                        <li>Paste website URL in the provided text box</li>
                        <li>You can select the amount of summary required by using the slider</li>
                        <li>Click on the "SUMMARIZE" button. You will get summary in the right in the other text box provided</li>
                        <li>You can copy the summary into and use it where ever you needed.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ToolDetail;