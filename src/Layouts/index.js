import React from "react";
import {Navbar} from "../components";

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