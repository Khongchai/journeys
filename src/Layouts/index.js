import React from "react";
import {Navbar, Container, Footer} from "../components";
import "./layout.css";


//Put what you do not want to change in here.
export default function Layout ({children})
{
    return(
        <>
            <Navbar/>
            <Container>
                {children}
                <Footer/>
            </Container>
            
        </> 
    );
}