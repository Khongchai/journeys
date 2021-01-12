import {TimelineWrapper, YearIndicator, EventsWrapper, HideTimeline, BlackBackground} from "../../../elements";
import React, {useEffect, useRef, useState} from "react";
import {useStaticQuery, graphql} from "gatsby";
import hideTimeline from "./utils/hideTimeline.ts";
import handleTimelineMove, {adjustElementsSizeOnResize} from "./utils/handleTimelineMove";
import setBlackBackgroundHeight from "./utils/setBlackBackgroundHeight";
import manageEventStartAndEndPosition from "./utils/manageEventStartAndEndPosition";
import "animate.css";

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
                            featureImageI
                            {
                                childImageSharp {
                                  fluid 
                                  {
                                   ...GatsbyImageSharpFluid_tracedSVG
                                  }
                                }
                            }
                            featureImageII
                            {
                                childImageSharp {
                                  fluid {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                  }
                                }
                            }
                            featureImageIII
                            {
                                
                                childImageSharp {
                                  fluid {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                  }
                                }
                            }
                            year
                            slug
                            topic1
                            topic2
                            topic3
                            topic1excerpt
                            topic2excerpt
                            topic3excerpt
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
                            type
                        }
                    }
                }
            }
        }
    `);
    //store this in useRef
    const frontmatterData = useRef(query.allMdx.edges.map(edge => edge.node.frontmatter));
    const [hideNavBarToggle, setHideNavBarToggle] = useState(true);

    useEffect(() => 
    {
        manageEventStartAndEndPosition(frontmatterData.current);
        handleTimelineMove();
        setBlackBackgroundHeight();
        adjustElementsSizeOnResize();
    }, []);

    function setOverviewDataAndBlackBackgroundHeight(year, topic, excerpt, picture)
    {
        Promise.resolve()
        .then(()=>
        {
            props.setRequestedOverviewData({year, topic, excerpt, picture});
        })
        .then(()=>
        {
            setBlackBackgroundHeight();
        });
    }

    return(
        <>
            <BlackBackground id="black-background"/>
            <HideTimeline id="hide-timeline-text" onClick={()=>hideTimeline(setHideNavBarToggle, hideNavBarToggle)} >Hide Timeline</HideTimeline>
            <TimelineWrapper id="timeline-wrapper">
                <YearIndicator>
                    {frontmatterData.current.map(data => 
                            <h5 >
                                {data.year}
                            </h5>) 
                                }
                </YearIndicator>
                <EventsWrapper id="events-wrapper">
                    {frontmatterData.current.map(data => {
                        //check null for featureImage using ternary or maybe not pass id, just pass the image
                        return(
                            <>
                                <span key={data.topic1} className="event" onClick={()=>setOverviewDataAndBlackBackgroundHeight(data.year, data.topic1, 
                                data.topic1excerpt, data.featureImageI? 
                                data.featureImageI.childImageSharp.fluid: null)
                                }>
                                    <p>{data.topic1}</p>
                                </span>
                                {
                                !data.topic2? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                                    <span key={data.topic2} 
                                    onClick={()=>setOverviewDataAndBlackBackgroundHeight(data.year, data.topic2, 
                                    data.topic2excerpt, data.featureImageII? data.featureImageII.childImageSharp.fluid: null
                                    )} className="event">
                                        <p>{data.topic2}</p>
                                    </span>
                                }
                                {
                                !data.topic3? <span className="event empty-placeholder" style={{display: "none"}}></span>:
                                    <span key={data.topic3} onClick={()=>setOverviewDataAndBlackBackgroundHeight(data.year, data.topic3, data.topic3excerpt, 
                                    data.featureImageIII? data.featureImageIII.childImageSharp.fluid: null)} className="event">
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


