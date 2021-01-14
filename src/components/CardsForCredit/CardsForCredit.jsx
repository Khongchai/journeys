import React from "react";
import {CardHeader, CardList, CardWrapper} from "../../elements";
import hayne from "./Hayne.jpg";
import jd from "./JD.jpg";
import iris from "./Iris.jpg";

export function Cards()
{
    return(
        <>
            <CardList>
                <Card name="HAYNE" title="Violin Professor" source={hayne} />
                <Card name="JD" title="Recital Advisor" source={jd}/>  
                <Card name="IRIS" title="UX/UI Advisor" source={iris} />  
            </CardList>
        </>
    );
}

function Card(props)
{
    return(
        <CardWrapper className="cards">
            <img src={props.source} alt="" style={{flex: "1"}}/>
            <h2 style={{flex: "0.1"}}>
                {props.name}
            </h2>
            <h4 style={{flex: "0.6"}}>
                {props.title}
            </h4>
        </CardWrapper>
    );
}