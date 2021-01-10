import React, {useRef} from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Content, SideContentBar, Footer, DynamicPagesContainer } from "../components";

const DynamicBlog = ({data}) =>
{
    return(
        <DynamicPagesContainer id="dynamic-page-container">
            <Content>
            <div>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </div>
            </Content>
            <SideContentBar/>
            <Footer/>
        </DynamicPagesContainer>
    
    );           
}

export default DynamicBlog;

export const pageQuery = graphql`
    query BlogQuery ($blogID: String!)
    {
        mdx(id: {eq: $blogID})
        {
            body
            frontmatter
            {
                title
                slug
            }
        }
    }
`;