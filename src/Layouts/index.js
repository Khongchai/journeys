import React from "react";
import {Navbar} from "../components";
import SEO from "../components/Seo";
import "./layout.css";
import {useEffect} from "react";
import handleHomeButtonDrag from "../components/Navbar/utils/handleHomeButtonDrag";


//Put what you do not want to change in here.
export default function Layout ({children})
{
    useEffect(()=>
    {   
        //put everything that needs to remain effective globally here.
        handleHomeButtonDrag();
    });
    return(
        <>
            <SEO/>
            <Navbar/>
            {children}
        </> 
    );
}