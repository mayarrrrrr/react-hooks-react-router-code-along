import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App(){
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />}>
                    </Route>
                    <Route path="/home" element={<Home />}>


                    </Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>

            </BrowserRouter>,
        </div>

    )
}
export default App;