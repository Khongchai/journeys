import React from "react";
import {Navbar} from "../components";
import "./layout.css";


//Put what you do not want to change in here.
export default function Layout ({children})
{
    return(
        <>
            <Navbar/>
                {children}
        </> 
    );
}