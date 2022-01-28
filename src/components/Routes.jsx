
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './screens/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";



export const Router = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}