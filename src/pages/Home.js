import React from "react"

import './Home.css'
import Card from "../components/Card"


function Home (props) {
    return (
        <div className="page-wrap">
            <div className="page-container">
                <div>
                    <h1 className="home-title">Free online tools</h1>
                    <p className="home-subtitle mt-8 mx-md:mt-6">Providing wide variety of online tools in a single place for free!</p>
                </div>
                <div className="card-cont mt-12 mx-md:mt-8">
                    <Card toolName={'Summarizer'} classname="summarizer"/>
                    <Card toolName={'tool-2'}/>
                    <Card toolName={'tool-3'}/>
                    <Card toolName={'tool-1'}/>
                    <Card toolName={'tool-2'}/>
                    <Card toolName={'tool-3'}/>
                    <Card toolName={'tool-1'}/>
                    <Card toolName={'tool-2'}/>
                    <Card toolName={'tool-3'}/>
                </div>
            </div>
        </div>
    )
}
export default Home