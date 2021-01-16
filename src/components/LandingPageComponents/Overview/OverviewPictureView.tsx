import React from "react";
import {OverviewPictureViewWrapper, StyledGatsbyImg} from "../../../elements";

//id is now passed in here through props, now a matter of how to read that.....

export default function OverviewPictureView(props: any)
{

    //change Diary file to the other one
    const picture: any = props.requestedOverviewData? 
                            props.requestedOverviewData.picture: 
                            props.fallbackData.frontmatter.featureImageI.childImageSharp.fluid;
    return(
        <OverviewPictureViewWrapper>
            <div style={{width: "80%" }}>
                <StyledGatsbyImg fluid={picture}/>
            </div>
        </OverviewPictureViewWrapper>
    )
}
