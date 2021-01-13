import React from "react";
import {CardHeader, CardList, CardWrapper} from "../elements";

export function Cards()
{
    return(
        <>
            <CardList>
                <Card name="Hayne" />
                <Card name="JD" />  
                <Card name="Iris" />  
            </CardList>
        </>
    );
}

function Card(props)
{
    return(
        <CardWrapper className="cards">
            <CardHeader className="headers">
                {props.name}
            </CardHeader>
        </CardWrapper>
    );
}