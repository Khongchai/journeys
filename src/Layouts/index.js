import React from "react";
import {Navbar} from "../components";
import SEO from "../components/Seo";
import "./layout.css";


//Put what you do not want to change in here.
export default function Layout ({children})
{
    return(
        <>
            <SEO/>
            <Navbar/>
            {children}
        </> 
    );
}