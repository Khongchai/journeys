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
                        <span style={{gridRow: "1"}} key={data.topic1} className="event">
                            {data.topic1}
                        </span>
                        {
                        !data.topic2? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                            <span style={{gridRow: "2"}} key={data.topic2}  className="event">
                                {data.topic2}
                            </span>
                        }
                        {
                        !data.topic3? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                            <span style={{gridRow: "3"}} key={data.topic3}  className="event">
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


function manageEventStartAndEndPosition(eventData)
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
        //manage column
        allEvents[i].style.gridColumn = `${eventData[j].topic1month.from + monthOffset} / ${eventData[j].topic1month.to + monthOffset}`;
        allEvents[i+1].style.gridColumn = `${eventData[j].topic2month.from + monthOffset} / ${eventData[j].topic1month.to + monthOffset}`;
        allEvents[i+2].style.gridColumn = `${eventData[j].topic3month.from + monthOffset} / ${eventData[j].topic1month.to + monthOffset}`;
        j++;
        monthOffset += 12;

        //manage row


    }


    //give grid column property for each member of the "event" class based on the topic
}


