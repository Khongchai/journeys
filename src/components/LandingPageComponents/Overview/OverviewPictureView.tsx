import React from "react";
import {OverviewPictureViewWrapper} from "../../../elements";
import  Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";


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
    //get graphql and query just 1 to preview when undefined
    return(
        <OverviewPictureViewWrapper>
            <div style={{width: "80%", flex: "0.5"}}>
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
        </OverviewPictureViewWrapper>
    )
}

//