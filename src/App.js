import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Bio from "./components/Bio";
import Bored from "./components/Bored";
import Contact from "./components/Contact";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

function App() {    

    

    return (
        <div className="container">
            <Navigator />
            <div className="row justify-content-center">
                <div className="col-md-10 container">
                    <Header />
                    <Projects />
                    <Knowledge />
                    <Bio /> 
                    <Bored />            
                    {/* <Contact /> */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}//end component

export default App;