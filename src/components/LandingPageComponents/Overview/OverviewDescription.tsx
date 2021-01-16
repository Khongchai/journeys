import React from "react";
import {OverviewDescriptionWrapper} from "../../../elements";
import {Link} from "gatsby";
import {OverviewDataRequest} from "../sharedInterfaces";

export default function OverviewDescription(props: any)
{
    const overviewData: OverviewDataRequest = props.requestedOverviewData? props.requestedOverviewData:
    {year: props.fallbackData.frontmatter.year, topic: props.fallbackData.frontmatter.topic1, excerpt: props.fallbackData.frontmatter.topic1excerpt};

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
                <p style={{ textIndent: "2rem", marginTop: "2rem"}} id="overview-text">
                    {overviewData.excerpt}
                </p>
                <Link to={`/biography`} onClick={()=>{clickYear(overviewData.year)}}>
                    Read more
                </Link>
            </OverviewDescriptionWrapper>
    )
}