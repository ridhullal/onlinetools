import React from "react"

import './Home.css'
import Card from "../components/Card"


function Home (props) {
    return (
        <div className="page-wrap">
            <div className="page-container">
                <div>
                    <h1 className="home-title">Text for Home Title</h1>
                    <p className="home-subtitle mt-8 mx-md:mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="card-cont mt-12 mx-md:mt-8">
                    <Card toolName={'tool-1'}/>
                    <Card toolName={'tool-2'}/>
                    <Card toolName={'tool-3'}/>
                </div>
            </div>
        </div>
    )
}
export default Home