import React from "react";
import {OverviewDescriptionWrapper} from "../../../elements";
import {graphql, useStaticQuery, Link} from "gatsby";
import {OverviewDataRequest} from "../sharedInterfaces";

export default function OverviewDescription(props: any)
{
    const query = useStaticQuery(graphql`
        query  
        {
            mdx(id: {eq: "608022d0-b15d-5d65-94f8-7948c926e674"}) 
            {
                frontmatter 
                {
                    topic1
                    topic1excerpt
                    year
                }
            }
    }
    `);

    const overviewData: OverviewDataRequest = props.requestedOverviewData? props.requestedOverviewData:
    {year: query.mdx.frontmatter.year, topic: query.mdx.frontmatter.topic1, excerpt: query.mdx.frontmatter.topic1excerpt};

    function clickYear(year:number)
    {
        setTimeout(()=>{
            let yearElem = document.getElementById(`sidebar${year}`);
            if (yearElem)
            {
                yearElem.click();
            }
        }, 600);
    }
    return(
            <OverviewDescriptionWrapper>
                <h1 style={{textAlign: "right", flex: 0.1}}>{overviewData.topic} | {overviewData.year} </h1>
                <p style={{ textIndent: "2rem", marginTop: "2rem"}}>
                    {overviewData.excerpt}
                </p>
                <Link style={{marginTop: "5rem"}} to={`/biography`} onClick={()=>{clickYear(overviewData.year)}}>
                    Read more
                </Link>
            </OverviewDescriptionWrapper>
    )
}