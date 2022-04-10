import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import ToolDetail from './ToolDetail'



function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path="/tool-detail" element={<ToolDetail />}/>
        </Routes>
    )
}
export default Main