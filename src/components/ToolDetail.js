import React from "react";
import { useLocation } from "react-router-dom";
import Textarea  from "@material-tailwind/react/Textarea";

import './ToolDetail.css';

const ToolDetail = (props) => {
    const location = useLocation();

    return (
        <div className="page-wrap">
            <div className="page-container">
                <h1 className="home-title">{location.state.tool}</h1>
                <div className="flex-cont tool-cont mt-8 p-4">
                    <div className="textarea-cont">
                        <Textarea 
                            color="cyan"
                            size="regular"
                            outline={true}
                            placeholder="Place the Text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolDetail;