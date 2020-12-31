import {TimelineWrapper, YearWrapper} from "../../elements";
import React from "react";

export default function Timeline(props)
{
    const chronologicalBioYears = [1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878];

    return(
        <TimelineWrapper>
            {chronologicalBioYears.map(year => <YearComponent key={year} year={year}/>)}
        </TimelineWrapper>
    )
}

function YearComponent(props)
{
    return(
        <>
            <YearWrapper>
                <h5 style={{top: "-1rem", position: "relative"}}>
                    {props.year}
                </h5>
            </YearWrapper>
        </>

    );
}

