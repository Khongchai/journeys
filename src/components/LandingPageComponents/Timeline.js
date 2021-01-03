import {TimelineWrapper, YearIndicator, EventsWrapper, HideTimeline} from "../../elements";
import React, {useEffect, useRef, useState} from "react";
import {useStaticQuery, graphql} from "gatsby";
import changeStylesOnClick from "./utils/changeStylesOnClick.ts";
import hideTimeline from "./utils/hideTimeline.ts";
import handleTimelineMove from "./utils/handleTimelineMove";

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
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        manageEventStartAndEndPosition(frontmatterData.current);
        handleTimelineMove();
    }, []);

    return(
        <>
            <HideTimeline onClick={(e) => hideTimeline(e.target, setToggle, toggle)} >Hide Timeline</HideTimeline>
            <TimelineWrapper id="timeline-wrapper">
                <YearIndicator>
                    {frontmatterData.current.map(data => 
                            <h5 >
                                {data.year}
                            </h5>) 
                                }
                </YearIndicator>
                <EventsWrapper>
                    {frontmatterData.current.map(data => {
                        return(
                            <>
                                <span key={data.topic1} className="event">
                                    <p>{data.topic1}</p>
                                </span>
                                {
                                !data.topic2? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                                    <span key={data.topic2}  className="event">
                                        <p>{data.topic2}</p>
                                    </span>
                                }
                                {
                                !data.topic3? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                                    <span key={data.topic3}  className="event">
                                        <p>{data.topic3}</p>
                                    </span>
                                }
                            </>
                        )
                    })}
                </EventsWrapper>
            </TimelineWrapper>
        
        </>
        
    )
}

async function manageEventStartAndEndPosition(eventData)
{
    let allEvents = document.getElementsByClassName("event");
    let allEventsLength = allEvents.length;
    let topicPerNode = 3;

    //for managing columns
    let j = 0;
    let monthOffset = 0;

    //for managing rows
    let rowCheck = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
    };



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

        //manage row
        allEvents[i].style.gridRow = await checkIfColumnIsAvailableAtRowX(begin1, end1, rowCheck);
        allEvents[i+1].style.gridRow = await checkIfColumnIsAvailableAtRowX(begin2, end2, rowCheck);
        allEvents[i+2].style.gridRow = await checkIfColumnIsAvailableAtRowX(begin3, end3, rowCheck);

        //change styling on click
        changeStylesOnClick(allEvents[i]);
        changeStylesOnClick(allEvents[i + 1]);
        changeStylesOnClick(allEvents[i + 2]);

        monthOffset += 12;
        j++;

    }


    //give grid column property for each member of the "event" class based on the topic
}

async function checkIfColumnIsAvailableAtRowX(beginVal, endVal, rowCheck)
{
    let beginningPosition;
    if (beginVal > rowCheck.first)
    {
        beginningPosition = "1";
        rowCheck.first = endVal;
    }
    else if (beginVal > rowCheck.second)
    {
        beginningPosition = "2";
        rowCheck.second = endVal;
    }
    else if (beginVal > rowCheck.third)
    {
        beginningPosition = "3";
        rowCheck.third = endVal;
    }
    else if (beginVal > rowCheck.fourth)
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


