import {TimelineWrapper, YearIndicator} from "../../elements";
import React, {useEffect, useRef} from "react";
import {useStaticQuery, graphql} from "gatsby";


export default function Timeline(props)
{
    const query = useStaticQuery(graphql`
        query
        {
            allMdx(filter: {frontmatter: {type: {eq: "static"}}}, sort:{order: ASC, fields: frontmatter___year}) 
            {
                edges 
                {
                    node 
                    {
                        frontmatter 
                        {
                            year
                            topic1
                            topic2
                            topic3
                            topic1month
                            {
                                from
                                to
                            }
                            topic2month
                            {
                                from
                                to
                            }
                            topic3month
                            {
                                from
                                to
                            }
                            topic1except
                            topic2excerpt
                            topic3excerpt
                            type
                        }
                    }
                }
            }
        }
    `);
    //store this in useRef
    const frontmatterData = useRef(query.allMdx.edges.map(edge => edge.node.frontmatter));

    useEffect(() => {
        manageEventStartAndEndPosition(frontmatterData.current);
    }, []);

    return(
        <>
        <YearIndicator>
            {frontmatterData.current.map(data => 
                    <h5 >
                        {data.year}
                    </h5>) 
                        }
        </YearIndicator>
        <TimelineWrapper>
            {frontmatterData.current.map(data => {
                return(
                    <>
                        <span key={data.topic1} className="event">
                            {data.topic1}
                        </span>
                        {
                        !data.topic2? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                            <span key={data.topic2}  className="event">
                                {data.topic2}
                            </span>
                        }
                        {
                        !data.topic3? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                            <span key={data.topic3}  className="event">
                                {data.topic3}
                            </span>
                        }
                        


                    </>
                )
            })}
        </TimelineWrapper>
        </>
        
    )
}

//for managing rows
let rowCheck = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
};

function manageEventStartAndEndPosition(eventData)
{
    let allEvents = document.getElementsByClassName("event");
    let allEventsLength = allEvents.length;
    let topicPerNode = 3;

    //for managing columns
    let j = 0;
    let monthOffset = 0;



    for (let i = 0; i < allEventsLength; i+=topicPerNode)
    {
        let begin1 = eventData[j].topic1month.from + monthOffset;
        let begin2 = eventData[j].topic2month.from + monthOffset;
        let begin3 = eventData[j].topic3month.from + monthOffset;

        let end1 = eventData[j].topic1month.to + monthOffset;
        let end2 = eventData[j].topic2month.to + monthOffset;
        let end3 = eventData[j].topic3month.to + monthOffset;

        //manage column
        allEvents[i].style.gridColumn = `${begin1} / ${end1}`;
        allEvents[i+1].style.gridColumn = `${begin2} / ${end2}`;
        allEvents[i+2].style.gridColumn = `${begin3} / ${end3}`;
        j++;
        monthOffset += 12;

        //manage row
        //bug -> only work with differnt event, not the same one
        allEvents[i].style.gridRow = checkIfColumnIsAvailableAtRowX(end1, rowCheck);
        allEvents[i+1].style.gridRow = checkIfColumnIsAvailableAtRowX(end2, rowCheck);
        allEvents[i+2].style.gridRow = checkIfColumnIsAvailableAtRowX(end3, rowCheck);

    }


    //give grid column property for each member of the "event" class based on the topic
}

function checkIfColumnIsAvailableAtRowX(endVal, rowCheck)
{
    let beginningPosition;
    if (endVal > rowCheck.first)
    {
        beginningPosition = "1";
        rowCheck.first = endVal;
    }
    else if (endVal > rowCheck.second)
    {
        beginningPosition = "2";
        rowCheck.second = endVal;
    }
    else if (endVal > rowCheck.third)
    {
        beginningPosition = "3";
        rowCheck.third = endVal;
    }
    else if (endVal > rowCheck.fourth)
    {
        beginningPosition = "4";
        rowCheck.fourth = endVal;
    }
    else
    {
        beginningPosition = "5";
        rowCheck.fifth = endVal;
    }

    return beginningPosition;
}


