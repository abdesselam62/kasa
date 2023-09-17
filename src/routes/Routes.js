import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About';
import Error from '../pages/Error';
import Lodging from '../pages/Lodging';

export default function RoutesAndPaths() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='*' element={<Error />}/>
                <Route path="/lodging/:fichelogement" element={<Lodging />} />
                
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}