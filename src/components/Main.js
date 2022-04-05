import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/About'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
        </Routes>
    )
}
export default Main