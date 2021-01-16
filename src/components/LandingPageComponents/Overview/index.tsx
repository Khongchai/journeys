import React, {useEffect} from "react";
import {OverviewWrapper} from "../../../elements";
import OverviewDescription from "./OverviewDescription";
import OverviewPictureView from "./OverviewPictureView";
import {graphql, useStaticQuery} from "gatsby";

export default function Overview(props: any)
{
    const query = useStaticQuery(graphql`
        query MyQuery 
        {
            allMdx(filter: {frontmatter: {topic1: {eq: "Diary"}}}) 
            {
                edges 
                {
                    node 
                    {
                        frontmatter
                        {
                            topic1
                            topic1excerpt
                            year
                            featureImageI
                            {
                                childImageSharp 
                                {
                                    fluid 
                                    {
                                        ...GatsbyImageSharpFluid_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    `);

    return(
        <OverviewWrapper>
            <OverviewPictureView requestedOverviewData={props.requestedOverviewData} fallbackData={query.allMdx.edges[0].node}/>
            <OverviewDescription requestedOverviewData={props.requestedOverviewData} fallbackData={query.allMdx.edges[0].node}/>
        </OverviewWrapper>
    )
}