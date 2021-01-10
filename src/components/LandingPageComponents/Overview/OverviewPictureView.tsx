import React, {useEffect} from "react";
import {OverviewPictureViewWrapper} from "../../../elements";
import  Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

//id is now passed in here through props, now a matter of how to read that.....

export default function OverviewPictureView(props: any)
{

        const data = useStaticQuery(graphql`
        query Myquery
        {
            file(relativePath: {eq: "landingPageImages/Diary.png"}) 
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
    `);
    
    const picture: any = props.requestedOverviewData? props.requestedOverviewData.picture: data.file.childImageSharp.fluid; 
    return(
        <OverviewPictureViewWrapper>
            <div style={{width: "80%", maxWidth: "600px", maxHeight: "333px", flex: "0.5"}}>
                <Img fluid={picture}style={{borderRadius: "270px"}}/>
            </div>
        </OverviewPictureViewWrapper>
    )
}

//



/* 
export default function OverviewPictureView(props: any)
{
    const data = useStaticQuery(graphql`
        query Myquery
        {
            file(relativePath: {eq: "landingPageImages/Diary.png"}) 
            {
                childImageSharp 
                {
                    fluid
                    {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    useEffect(()=>{
        console.log(props.requestedOverviewData);
    })
    //get graphql and query just 1 to preview when undefined
    return(
        <OverviewPictureViewWrapper>
            <div style={{width: "80%", flex: "0.5"}}>
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
        </OverviewPictureViewWrapper>
    )
}

*/