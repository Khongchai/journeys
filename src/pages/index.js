import React from "react"
import {Navbar, MainWindow} from "../components";

export default function Home() 
{
  return(
    <>
        <Navbar topic1="Home"topic2="Biography"topic3="About"topic4="Analysis" topic5="Credit"bottomTopic="Research"/>
        <MainWindow/>
    </>   
  ) 
}
