import React from "react";
import {OverviewPictureViewWrapper, StyledGatsbyImg} from "../../../elements";
import  Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

//id is now passed in here through props, now a matter of how to read that.....

export default function OverviewPictureView(props: any)
{

    //change Diary file to the other one
    const data = useStaticQuery(graphql`
        query  
        {
            mdx(id: {eq: "ce798400-e8a9-528c-8cc0-4960e8f4b5fc"}) 
            {
                frontmatter 
                {
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
`   );
    
    const picture: any = props.requestedOverviewData? props.requestedOverviewData.picture: data.mdx.frontmatter.featureImageI.childImageSharp.fluid; 
    return(
        <OverviewPictureViewWrapper>
            <div style={{width: "80%" }}>
                <StyledGatsbyImg fluid={picture}/>
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