import React from "react"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "../pages/Home"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RoutesAndPaths() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}