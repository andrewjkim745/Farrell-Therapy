import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './screens/Home'



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}