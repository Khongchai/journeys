import {TimelineWrapper, YearWrapper} from "../../elements";
import React, {useEffect} from "react";
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
                            slug
                            topic1
                            topic2
                            topic3
                            topic1month
                            topic2month
                            topic3month
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
    const frontmatterData = query.allMdx.edges.map(edge => edge.node.frontmatter);

    return(
        <TimelineWrapper>
            {frontmatterData.map(data => <YearComponent key={data.year} data={data}/>)}
        </TimelineWrapper>
    )
}

function YearComponent(props)
{
    useEffect(() => {
        manageEventStartingAndEndingPosition(props.data);
    },[]);

    return(
        <>
            <YearWrapper>
                <h5 style={{position: "relative", gridColumn: "1", gridRow: "1", top: "-1rem"}}>
                    {props.data.year}
                </h5>
                <span style={{gridColumn: "1", gridRow: "1"}} className="event">

                </span>
                <span style={{gridColumn: "2", gridRow: "2"}} className="event"> 

                </span>
                <span style={{gridColumn: "3", gridRow: "3"}} className="event">

                </span>

            </YearWrapper>
        </>

    );
}

//TO be continued
function manageEventStartingAndEndingPosition(eventData)
{

}


